<script>
import FormShell from '../../layout/FormShell.vue';
import AvatarCard from '../Form/AvatarCard.vue';
import FormTitle from '../../components/Form/FormTitle.vue';
import Input from '../../components/Form/Input.vue';
import CountryDropdown from '../../components/Form/CountryDropdown.vue';
import ButtonSubmit from '../../components/Form/ButtonSubmit.vue';
import { UserService } from '../../Services/UserService';
import DatePicker from '../Form/DataPicker.vue';

export default {
    components: {
        FormShell,
        AvatarCard,
        FormTitle,
        Input,
        CountryDropdown,
        ButtonSubmit,
        DatePicker,

    },
    props: {
        myuser: Object
    },
    data() {
        return {
            user: {
                id: '',
                name: '',
                email: '',
                internalcode: '',
            },
            userInfo: {
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
            },
            file: null,
        }
    },
    watch: {
    myuser: {
        handler(newUser) {
            if (newUser) {
                this.user = {
                    id: newUser.id || '',
                    name: newUser.name || '',
                    email: newUser.email || '',
                    internalcode: newUser.internalcode || '',
                };
                this.userInfo = {
                    user_id: newUser.user_info?.user_id || '',
                    avatar: newUser.user_info?.profile_picture_path || '',
                    class: newUser.user_info?.class || '',
                    nif: newUser.user_info?.nif ? newUser.user_info.nif.toString() : '',
                    gender_id: newUser.user_info?.gender_id ? newUser.user_info.gender_id.toString() : '',
                    phone_number: newUser.user_info?.phone_number ? newUser.user_info.phone_number.toString() : '',
                    birthday_date: newUser.user_info?.birthday_date || '',
                    address: newUser.user_info?.address || '',
                    city: newUser.user_info?.city || '',
                    district: newUser.user_info?.district || '',
                    postal_code: newUser.user_info?.postal_code || '',
                    country_id: newUser.user_info?.country_id ? newUser.user_info.country_id.toString() : '',
                };
            }
        },
        deep: true,
        immediate: true
    }
},
    methods: {
        ImageHandler(file) {
            this.file = file;
            this.userInfo.avatar = URL.createObjectURL(file);
        },
        UpdateUser() {
            const formData = new FormData();

            if (this.file) {
                formData.append('file', this.file);
            }
            formData.append('user_id', this.userInfo.user_id);
            formData.append('name', this.user.name);
            formData.append('class', this.userInfo.class);
            formData.append('nif', this.userInfo.nif);
            formData.append('birthday_date', this.userInfo.birthday_date);
            formData.append('gender_id', this.userInfo.gender_id);
            formData.append('phone_number', this.userInfo.phone_number);
            formData.append('address', this.userInfo.address);
            formData.append('postal_code', this.userInfo.postal_code);
            formData.append('city', this.userInfo.city);
            formData.append('district', this.userInfo.district);
            formData.append('country_id', this.userInfo.country_id);
            formData.append('_method', 'PUT');  // This is needed for Laravel to understand this is an update request

            /*
            const allData = {
                userInfo: {
                    user_id: this.userInfo.user_id,
                    name: this.user.name,
                    class: this.userInfo.class,
                    nif: this.userInfo.nif,
                    birthday_date: this.userInfo.birthday_date,
                    gender_id: this.userInfo.gender_id,
                    phone_number: this.userInfo.phone_number,
                    address: this.userInfo.address,
                    postal_code: this.userInfo.postal_code,
                    city: this.userInfo.city,
                    district: this.userInfo.district,
                    country_id: this.userInfo.country_id,
                },
            
            for (let [key, value] of formData.entries()) {
    console.log(key, value);
}}*/

            UserService.updateUser(this.user)
                .then((response) => {
                    console.log('User updated successfully ' + response.data);
                    UserService.updateUserInfo(formData)
                })
                .catch((error) => {
                    console.log('Error: ', error.response);
                })

        },
    }
}
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
                    <Input LabelTitle="Gender" type="text" required v-model="userInfo.gender_id" />
                    <Input LabelTitle="Email" type="email" required v-model="user.email" />
                </div>
                <div class="flex flex-col gap-5 mt-5 md:flex-row">
                    <Input LabelTitle="Internal Code" type="text" required v-model="user.internalcode" />
                    <Input LabelTitle="Class" type="text" required v-model="userInfo.class" />
                </div>
                <div class="flex flex-col gap-5 mt-5 md:flex-row">
                    <div class="flex flex-col md:flex-row md:items-end gap-3 lg:w-2/4">
                        <Input LabelTitle="NIF" type="number" required v-model="userInfo.nif" />
                    </div>
                    <Input LabelTitle="Phone Number" type="number" required v-model="userInfo.phone_number" />
                    <DatePicker LabelTitle="Birthday Date" required v-model="userInfo.birthday_date" />
                </div>
                <div class="flex flex-col gap-5 mt-5 md:flex-row ">
                    <Input LabelTitle="Address" type="address" required v-model="userInfo.address" />
                    <Input LabelTitle="Zip Code" type="number" required v-model="userInfo.postal_code" />
                </div>
                <div class="flex flex-col gap-5 mt-5 md:flex-row md:mt-5">
                    <Input LabelTitle="State/Province" type="text" required v-model="userInfo.district" />
                    <Input LabelTitle="City" type="text" required v-model="userInfo.city" />
                    <Input LabelTitle="Country" type="text" required v-model="userInfo.country_id" />
                    <!-- <CountryDropdown/> -->
                </div>
            </div>

            <ButtonSubmit textButton="Update User" />
        </template>
    </FormShell>
</template>

