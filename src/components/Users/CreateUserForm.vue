<template>
    <FormShell @formSubmit="CreateUser">
        <template v-slot:AvatarCard>
            <AvatarCard @avatar="ImageHandler" />
        </template>

        <template v-slot:Form>
            <FormTitle FormTitle="Create User" />

            <div class="flex flex-col w-full my-5">
                <div class="flex flex-col gap-5 md:flex-row">
                    <Input LabelTitle="Full Name" type="name" required v-model="user.name" />
                    <Input LabelTitle="Email" type="email" required v-model="user.email" />
                </div>
                <div class="flex flex-col gap-5 mt-5 md:flex-row">
                    <Input LabelTitle="Internal Code" type="text" required v-model="user.internalcode" />
                    <Input LabelTitle="Password" type="password" required v-model="user.password" />
                </div>

                <div class="flex flex-col gap-5 mt-5 md:flex-row">
                  <Dropdown
                      LabelTitle="Role"
                      :options="roles"
                      v-model="user.role"
                      :modelValue="user.role"
                      @update:modelValue="handleDropdownChange" />



                  <Dropdown
                      LabelTitle="Gender"
                      :options="genders"
                      v-model="userInfo.gender"
                      :modelValue="userInfo.gender"
                      @update:modelValue="handleDropdownChange" />

                  <DatePicker LabelTitle="Birthday Date" required v-model="userInfo.birthday_date" :modelValue="userInfo.birthday_date"/>
                </div>
                <div class="flex flex-col gap-5 mt-5 md:flex-row">
                    <div class="flex flex-col md:flex-row md:items-end gap-3 lg:w-2/4">
                        <Input LabelTitle="NIF" type="number" required v-model="userInfo.nif" />
                        <div class="flex flex-row mb-2 gap-2 ">
                            <label class="text-purple text-sm">Set NIF as password</label>
                            <input type="checkbox" v-model="isChecked" @change="handleCheckboxChange" class="size-6">
                        </div>
                    </div>
                    <Input LabelTitle="Phone Number" type="number" required v-model="userInfo.phone_number" />
                </div>
                <div class="flex flex-col gap-5 mt-5 md:flex-row ">
                    <Input LabelTitle="Address" type="address" required v-model="userInfo.address" />
                    <Input LabelTitle="Zip Code" type="number" required v-model="userInfo.postal_code" />
                </div>
                <div class="flex flex-col gap-5 mt-5 md:flex-row md:mt-5">
                    <Input LabelTitle="State/Province" type="text" required v-model="userInfo.district" />
                    <Input LabelTitle="City" type="text" required v-model="userInfo.city" />
                  <Dropdown
                      LabelTitle="Country"
                      :options="countries"
                      v-model="userInfo.country"
                      @update:model-value="handleDropdownChange"/>
                </div>
            </div>

            <ButtonSubmit textButton="Create User" type="submit" />
        </template>
    </FormShell>
</template>

<script setup>
import FormShell from '../../layout/FormShell.vue';
import AvatarCard from '../Form/AvatarCard.vue';
import FormTitle from '../../components/Form/FormTitle.vue';
import Input from '../../components/Form/Input.vue';
import Dropdown from '../Form/Dropdown.vue';
import DatePicker from '../Form/DataPicker.vue';
import ButtonSubmit from '../../components/Form/ButtonSubmit.vue';
import { UserService } from '../../Services/UserService';
import {onBeforeMount, onMounted, ref} from "vue";
import router from "../../router.js";


const roles = ref([]);
const genders = ref([]);
const countries = ref([]);
const isChecked = ref(false);
const user = ref({
    name: '',
    email: '',
    password: '',
    internalcode: '',
    role:'',
});

const userInfo = ref({
  user_id: '',
  gender: '',
  avatar: '',
  nif: '',
  phone_number: '',
  birthday_date: '',
  address: '',
  city: '',
  district: '',
  postal_code: '',
  country: ''
})

onBeforeMount(  async () =>{
  await loadData();
})


const loadData = async () =>{
  try {
    roles.value = (await UserService.getRoles()).data
    genders.value = (await UserService.getGenders()).data
    countries.value = (await UserService.getCountries()).data;
  } catch (error) {
    console.error('Error:', error.response);
  }
}

const ImageHandler = (file) => {
  user.avatar = file;
}

const handleCheckboxChange = () => {
  if (isChecked.value) {
    user.password = userInfo.nif.toString();
  } else {
    user.password = '';
  }
}

const CreateUser = () => {
  console.log(userInfo.value)

  UserService.createUser(user.value)
      .then((response) => {
        userInfo.value.user_id = response.data;
        UserService.createUserInfo(userInfo.value)
            .then((response) => {
              console.log(response);
              router.push({
                name: 'userDetails',
                params: { userId: userInfo.value.user_id }
              });
            })
            .catch((error) => {
              console.log('Error: ', error.response);
            });
      })
      .catch((error) => {
        console.log('Error: ', error.response);
      });
};

const handleDropdownChange = (value) => {
  const key = Object.keys(value)[0];
  userInfo[key] = value[key];
};

</script>