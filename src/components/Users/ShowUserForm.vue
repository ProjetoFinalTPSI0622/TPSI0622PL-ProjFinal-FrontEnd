<script setup>
import { ref, watch, onMounted } from 'vue';
import FormShell from '../../layout/FormShell.vue';
import AvatarCard from '../Form/AvatarCard.vue';
import FormTitle from '../../components/Form/FormTitle.vue';
import Input from '../../components/Form/Input.vue';
import Dropdown from '../Form/Dropdown.vue';
import DatePicker from '../Form/DataPicker.vue';
import ButtonSubmit from '../../components/Form/ButtonSubmit.vue';
import { UserService } from '../../Services/UserService';
import router from "../../router.js";

const props = defineProps({
    myuser: Object
});

const roles = ref([]);
const genders = ref([]);
const countries = ref([]);
const file = ref(null);
const user = ref({
    id: '',
    name: '',
    email: '',
    internalcode: '',
    role: null,
});
const userInfo = ref({
    user_id: '',
    avatar: '',
    class: '',
    nif: '',
    gender_id: '',
    phone_number: '',
    birthday_date: '',
    address: '',
    city: '',
    district: '',
    postal_code: '',
    country_id: ''
});

watch(() => props.myuser, (newUser) => {
    if (newUser) {
        let myRole = Array.isArray(newUser.roles) && newUser.roles.length > 0 ? newUser.roles[0] : {};

        user.value = {
            id: newUser.id || '',
            name: newUser.name || '',
            email: newUser.email || '',
            internalcode: newUser.internalcode || '',
            role: myRole.id || ''
        };

        userInfo.value = {
            user_id: newUser.user_info?.user_id || '',
            avatar: newUser.user_info?.profile_picture_path || '',
            class: newUser.user_info?.class || '',
            nif: newUser.user_info?.nif ? newUser.user_info.nif.toString() : '',
            gender_id: newUser.user_info?.gender_id ? newUser.user_info.gender_id : '',
            phone_number: newUser.user_info?.phone_number ? newUser.user_info.phone_number.toString() : '',
            birthday_date: newUser.user_info?.birthday_date || '',
            address: newUser.user_info?.address || '',
            city: newUser.user_info?.city || '',
            district: newUser.user_info?.district || '',
            postal_code: newUser.user_info?.postal_code || '',
            country_id: newUser.user_info?.country_id ? newUser.user_info.country_id : ''
        };
    }
}, { deep: true, immediate: true });

onMounted(async () => {
    try {
        roles.value = (await UserService.getRoles()).data
        genders.value = (await UserService.getGenders()).data
        countries.value = (await UserService.getCountries()).data
    } catch (error) {
        console.error('Error:', error.response);
    }
});

const ImageHandler = (fileInput) => {
    file.value = fileInput;
    userInfo.value.avatar = URL.createObjectURL(fileInput);
};

const UpdateUser = async () => {
    const formData = new FormData();

    if (file.value) {
        formData.append('file', file.value);
    }
    
    formData.append('user_id', userInfo.value.user_id);
    formData.append('name', user.value.name);
    formData.append('class', userInfo.value.class);
    formData.append('nif', userInfo.value.nif);
    formData.append('birthday_date', userInfo.value.birthday_date);
    formData.append('gender_id', userInfo.value.gender_id);
    formData.append('phone_number', userInfo.value.phone_number);
    formData.append('address', userInfo.value.address);
    formData.append('postal_code', userInfo.value.postal_code);
    formData.append('city', userInfo.value.city);
    formData.append('district', userInfo.value.district);
    formData.append('country_id', userInfo.value.country_id);
    formData.append('_method', 'PUT');

    try {
        await UserService.updateUser(user.value);
        console.log('User updated successfully');
        await UserService.updateUserInfo(formData).then((response) => {
            console.log('******User info updated successfully******', response)
        });
        router.push({ name: 'Users' });
    } catch (error) {
        console.error('Error: ', error.response);
    }
};

const handleDropdownChange = (value) => {
  const key = Object.keys(value)[0];
  userInfo[key] = value[key];
};
</script>


<template>
    <FormShell @formSubmit="UpdateUser">
        <template v-slot:AvatarCard>
            <AvatarCard @avatar="ImageHandler" v-model="userInfo.avatar" />
        </template>

        <template v-slot:Form>
            <FormTitle FormTitle="Update User" />

            <div class="flex flex-col w-full my-5">
                
                <div class="flex flex-col gap-5 md:flex-row">
                    <Input LabelTitle="Full Name" type="name" required v-model="user.name" />
                    <Input LabelTitle="Email" type="email" required v-model="user.email" />
                </div>

                <div class="flex flex-col gap-5 mt-5 md:flex-row">
                    <Input LabelTitle="Internal Code" type="text" required v-model="user.internalcode" />
                    <Input LabelTitle="Class" type="text" required v-model="userInfo.class" />
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
                        v-model="userInfo.gender_id"
                        :modelValue="userInfo.gender_id"
                        @update:modelValue="handleDropdownChange" />


                    <DatePicker LabelTitle="Birthday Date" required v-model="userInfo.birthday_date" :modelValue="userInfo.birthday_date" />
                </div>

                <div class="flex flex-col gap-5 mt-5 md:flex-row ">
                    <div class="flex flex-col md:flex-row md:items-end gap-3 lg:w-2/4">
                        <Input LabelTitle="NIF" type="text" required v-model="userInfo.nif" />
                    </div>
                    <Input LabelTitle="Phone Number" type="text" required v-model="userInfo.phone_number" />
                </div>

                <div class="flex flex-col gap-5 mt-5 md:flex-row ">
                    <Input LabelTitle="Address" type="address" required v-model="userInfo.address" />
                    <Input LabelTitle="Zip Code" type="text" required v-model="userInfo.postal_code" />
                </div>

                <div class="flex flex-col gap-5 mt-5 md:flex-row md:mt-5">
                    <Input LabelTitle="State/Province" type="text" required v-model="userInfo.district" />
                    <Input LabelTitle="City" type="text" required v-model="userInfo.city" />

                    <Dropdown 
                        LabelTitle="Country" 
                        :options="countries" 
                        v-model="userInfo.country_id"
                        @update:model-value="handleDropdownChange" />

                </div>

            </div>

            <ButtonSubmit textButton="Update User" />
        </template>
    </FormShell>
</template>