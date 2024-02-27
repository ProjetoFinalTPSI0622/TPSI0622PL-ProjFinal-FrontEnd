<template>
    <FormShell @formSubmit="openModal">
        <template v-slot:AvatarCard>
            <AvatarCard @avatar="ImageHandler" />
        </template>

        <template v-slot:Form>
            <FormTitle Title="Criar User" />

            <div class="flex flex-col w-full my-5">
                <div class="flex flex-col gap-5 md:flex-row">
                    <Input LabelTitle="Nome Completo: *" type="name" required v-model="user.name" />
                    <Input LabelTitle="Email: *" type="email" required v-model="user.email" />
                </div>
                <div class="flex flex-col gap-5 mt-5 md:flex-row">
                  <Input LabelTitle="Codigo Interno: *" type="text" required v-model="user.internalcode" />
                    <Input LabelTitle="Turma:" type="text" v-model="userInfo.class" />
                    <Input LabelTitle="Palavra-Passe: *" type="password" required v-model="user.password" />
                </div>

                <div class="flex flex-col gap-5 mt-5 md:flex-row">
                  <Dropdown
                      LabelTitle="Role:"
                      :options="roles"
                      v-model="user.role"
                      :modelValue="user.role"
                      @update:modelValue="handleDropdownChange" />



                  <Dropdown
                      LabelTitle="Gênero:"
                      :options="genders"
                      v-model="userInfo.gender"
                      :modelValue="userInfo.gender"
                      @update:modelValue="handleDropdownChange" />

                      <DatePicker LabelTitle="Data de Nascimento: *" required v-model="userInfo.birthday_date" :modelValue="userInfo.birthday_date"/>
                </div>
                <div class="flex flex-col gap-5 mt-5 md:flex-row">
                    <div class="flex flex-col md:flex-row md:items-end gap-3 lg:w-2/4">
                        <Input LabelTitle="NIF: *" type="number" required v-model="userInfo.nif" />
                        <div class="flex flex-row mb-2 gap-2 ">
                            <label class="text-pink text-sm">Set NIF as password</label>
                            <input type="checkbox" v-model="isChecked" @change="handleCheckboxChange" class="size-6">
                        </div>
                    </div>
                    <Input LabelTitle="Número de telefone:" type="text" v-model="userInfo.phone_number" />
                </div>
                <div class="flex flex-col gap-5 mt-5 md:flex-row ">
                    <Input LabelTitle="Morada:" type="address" v-model="userInfo.address" />
                    <Input LabelTitle="Código Postal:" type="text" v-model="userInfo.postal_code" />
                </div>
                <div class="flex flex-col gap-5 mt-5 md:flex-row md:mt-5">
                  <Input LabelTitle="Localidade:" type="text" v-model="userInfo.district" />
                    <Input LabelTitle="Cidade:" type="text" v-model="userInfo.city" />
                  <Dropdown
                      LabelTitle="País"
                      :options="countries"
                      v-model="userInfo.country"
                      @update:model-value="handleDropdownChange"/>
                </div>
            </div>

            <ButtonSubmit textButton="Criar User" type="submit" />
        </template>
    </FormShell>

    <Modal :show="showModal" @Cancel="handleCancelModal" @Confirm="handleConfirmModal">
      <template #title>
        Criar utilizador?
      </template>

      <template #content>
        <p class="flex">Esta prestes a criar&nbsp;
        <div class="font-bold">{{ user.name }}</div>,&nbsp;pretende prosseguir?</p>
      </template>

    </Modal>

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
import {onBeforeMount, ref} from "vue";
import router from "../../router.js";
import ToastStore from '../../Stores/ToastStore.js';
import Modal from '../Modal.vue';

const showModal = ref(false);
const roles = ref([]);
const genders = ref([]);
const countries = ref([]);
const isChecked = ref(false);

const openModal = () => {
  if(user.value.name != '' && user.value.email != '' && user.value.password != '' && user.value.internalcode != '' && userInfo.value.birthday_date != '' && userInfo.value.nif != ''){
  showModal.value = true;
  } else {
    ToastStore().triggerToast('Preencha os campos obrigatórios marcados com *', 'error');
  }
};

const handleCancelModal = () => {
  showModal.value = false;
};

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
  class: '',
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
  userInfo.value.avatar = file;
}

const handleCheckboxChange = () => {
  if (isChecked.value) {
    user.value.password = userInfo.value.nif;
  } else {
    user.password = '';
  }
}

const handleConfirmModal = async () => {
  showModal.value = false;
  if (isChecked.value) {
    user.value.password = userInfo.value.nif.toString();
  }

  UserService.createUser(user.value).then((response) => {

          if (response.success) {

            userInfo.value.user_id = response.data;
            UserService.createUserInfo(userInfo.value).then((response) => {
            
              if (response.success) {
                ToastStore().triggerToast(`Utilizador ${user.value.name}, criado com sucesso!`, 'success');
                router.push({
                name: 'userDetails',
                  params: { userId: userInfo.value.user_id }
                });

              } else {
                const myerros = response.message;

                Object.keys(myerros).forEach((key) => {
                  ToastStore().triggerToast(` ${myerros[key][0]}`, 'error');
                });
              }

            }).catch((error) => {
              ToastStore().triggerToast(`Erro ao tentar criar utilizador`, 'error');
            });

          } else {
            const myerros = response.message;

            Object.keys(myerros).forEach((key) => {
              ToastStore().triggerToast(` ${myerros[key][0]}`, 'error');
            });
          }

  }).catch((error) => {
    ToastStore().triggerToast(`Erro ao tentar criar utilizador`, 'error');
  });
};

const handleDropdownChange = (value) => {
  const key = Object.keys(value)[0];
  userInfo[key] = value[key];
};

</script>