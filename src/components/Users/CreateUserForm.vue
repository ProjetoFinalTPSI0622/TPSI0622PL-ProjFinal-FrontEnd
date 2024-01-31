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
                    <Dropdown LabelTitle="Role" :options="role" :selectedOption="role" v-model="userInfo.role" />
                    <Dropdown LabelTitle="Gender" :options="gender" :selectedOption="gender" required
                        v-model="userInfo.gender" />
                    <DatePicker LabelTitle="Birthday Date" required v-model="userInfo.birthday_date" />
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
                    <CountryDropdown LabelTitle="Country" required v-model="userInfo.country"/>
                </div>
            </div>

            <ButtonSubmit textButton="Create User" />
        </template>
    </FormShell>
</template>

<script>
import FormShell from '../../layout/FormShell.vue';
import AvatarCard from '../Form/AvatarCard.vue';
import FormTitle from '../../components/Form/FormTitle.vue';
import Input from '../../components/Form/Input.vue';
import Dropdown from '../Form/Dropdown.vue';
import DatePicker from '../Form/DataPicker.vue';
import CountryDropdown from '../../components/Form/CountryDropdown.vue';
import ButtonSubmit from '../../components/Form/ButtonSubmit.vue';
import { UserService } from '../../Services/UserService';

export default {
    components: {
        FormShell,
        AvatarCard,
        FormTitle,
        Input,
        Dropdown,
        DatePicker,
        CountryDropdown,
        ButtonSubmit,
        UserService

    },
    data() {
        return {
            role: [],
            gender: [],
            isChecked: false,
            user: {
                name: '',
                email: '',
                password: '',
                internalcode: '',
            },
            userInfo: {
                role: '',
                gender: '',
                avatar: '',
                nif: '',
                gender: '',
                phone_number: '',
                birthday_date: '',
                address: '',
                city: '',
                district: '',
                postal_code: '',
                country: ''
            }
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        async loadData() {
            try {
                this.role = (await UserService.getRoles()).data.map((item) => {
                    return {
                        id: item.id,
                        label: item.role,
                    }
                });
                this.gender = (await UserService.getGenders()).data.map((item) => {
                    return {
                        id: item.id,
                        label:item.name
                    }
                });
                this.country = (await UserService.getCountries()).data;
            } catch (error) {
                console.error('Error:', error.response);
            }
        },
        ImageHandler(file) {
            this.user.avatar = file;
        },
        handleCheckboxChange() {
            if (this.isChecked) {
                this.user.password = this.userInfo.nif.toString();
            } else {
                this.user.password = '';
            }
        },
        CreateUser() {
            const allData = {
                user: {
                    name: this.user.name,
                    email: this.user.email,
                    password: this.user.password,
                    internalcode: this.user.internalcode,
                },
                userInfo: {
                    user_id: '',
                    role: this.userInfo.role,
                    gender: this.userInfo.gender,
                    avatar: this.user.avatar,
                    nif: this.userInfo.nif,
                    gender: this.userInfo.gender,
                    phone_number: this.userInfo.phone_number,
                    birthday_date: this.userInfo.birthday_date,
                    address: this.userInfo.address,
                    city: this.userInfo.city,
                    district: this.userInfo.district,
                    postal_code: this.userInfo.postal_code,
                    country: this.userInfo.country,
                },
            }

            UserService.createUser(allData)
                .then((response) => {
                    console.log('User created successfully ' + response.data);
                    allData.userInfo.user_id = response.data.id;
                    UserService.createUserInfo(allData.userInfo)

                })
                .catch((error) => {
                    console.log('Error: ', error.response);
                })

        },
    }
}
</script>