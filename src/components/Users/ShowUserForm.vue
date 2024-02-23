<script setup>
import { ref, watch, onMounted } from 'vue';
import FormShell from '@/layout/FormShell.vue';
import AvatarCard from '@/components/Form/AvatarCard.vue';
import FormTitle from '@/components/Form/FormTitle.vue';
import Input from '@/components/Form/Input.vue';
import Dropdown from '@/components/Form/Dropdown.vue';
import DatePicker from '@/components/Form/DataPicker.vue';
import ButtonSubmit from '@/components/Form/ButtonSubmit.vue';
import { UserService } from '@/Services/UserService';
import router from "@/router.js";
import Modal from '@/components/Modal.vue';
import ToastStore from '@/Stores/ToastStore.js';

const props = defineProps({
    myuser: Object
});

const showModal = ref(false);
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

const handleDropdownChange = (value) => {
  const key = Object.keys(value)[0];
  userInfo[key] = value[key];
};

const openModal = () => {
    if(user.value.name != '' && user.value.email != '' && user.value.password != '' && user.value.internalcode != '' && userInfo.value.birthday_date != '' && userInfo.value.nif != ''){
  showModal.value = true;
  } else {
    ToastStore().triggerToast('Preencha os campos obrigatórios marcados com *', 'error');
  }
};

const handleConfirmModal = async () => {
    UpdateUser();
};

const handleCancelModal = () => {
  showModal.value = false;
};

const UpdateUser = async () => {
    showModal.value = false;
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


    UserService.updateUser(user.value).then((response) => {

        if (response.success) {
            UserService.updateUserInfo(formData).then((response) => {
            
                if (response.success) {
                    window.dispatchEvent(new Event('user-updated'));
                    ToastStore().triggerToast(`Utilizador ${user.value.name} actualizado com sucesso!`, 'success');
                    window.location.reload();

                } else {
                    const myerros = response.message;

                    Object.keys(myerros).forEach((key) => {
                    ToastStore().triggerToast(` ${myerros[key][0]}`, 'error');
                    });
                }

            }).catch((error) => {
              ToastStore().triggerToast(`Erro ao tentar atualizar dados do utilizador 1`, 'error');
            });

        } else {
            const myerros = response.message;

            Object.keys(myerros).forEach((key) => {
              ToastStore().triggerToast(` ${myerros[key][0]}`, 'error');
            });
        }

    }).catch((error) => {
    ToastStore().triggerToast(`Erro ao tentar atualizar dados do utilizador 2`, 'error');
  });
};
</script>


<template>
    <FormShell @formSubmit="openModal">
        <template v-slot:AvatarCard>
            <AvatarCard @avatar="ImageHandler" v-model="userInfo.avatar" class="m-5"/>
        </template>
        
        <template v-slot:Form>
            <FormTitle Title="Editar Perfil" />

            <div class="flex flex-col w-full my-5">
                
                <div class="flex flex-col gap-5 md:flex-row">
                    <Input LabelTitle="Nome Completo: *" type="name" required v-model="user.name" />
                    <Input LabelTitle="Email: *" type="email" required v-model="user.email" />
                </div>

                <div class="flex flex-col gap-5 mt-5 md:flex-row">
                    <Input LabelTitle="Codigo Interno: *" type="text" required v-model="user.internalcode" />
                    <Input LabelTitle="Turma:" type="text" v-model="userInfo.class" />
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
                        v-model="userInfo.gender_id"
                        :modelValue="userInfo.gender_id"
                        @update:modelValue="handleDropdownChange" />
                    <DatePicker 
                        LabelTitle="Data de Nascimento: *" 
                        required 
                        v-model="userInfo.birthday_date" 
                        :modelValue="userInfo.birthday_date" />
                </div>

                <div class="flex flex-col gap-5 mt-5 md:flex-row ">
                    <div class="flex flex-col md:flex-row md:items-end gap-3 lg:w-2/4">
                        <Input LabelTitle="NIF: *" type="text" required v-model="userInfo.nif" />
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
                        LabelTitle="País:" 
                        :options="countries" 
                        v-model="userInfo.country_id"
                        @update:model-value="handleDropdownChange" 
                        class="md:w-1/5 xl:w-2/5"/>
                </div>
            </div>

            <ButtonSubmit @click="openModal(user)" textButton="Atualizar Informação" />
        </template>
    </FormShell>

    <Modal :show="showModal" @Cancel="handleCancelModal" @Confirm="handleConfirmModal">
      <template #title>
        Alterar dados de utilizador
      </template>
      <template #content>
        <p class="flex">Deseja prosseguir com a alteração dos dados?</p>
      </template>
    </Modal>

</template>