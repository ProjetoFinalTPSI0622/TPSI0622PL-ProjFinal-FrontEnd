<template>
    <FormShell @submit.prevent="CreateUser, AddUserInfo">
        <template v-slot:AvatarCard>
            <AvatarCard v-model="userInfo.photo" />
        </template>
        <template v-slot:FormTitle>
            <div class="flex flex-col w-full">
                <FormTitle FormTitle="Create User" />
            </div>
        </template>
        <template v-slot:Form>
            <div class="flex flex-col w-full my-5">

                <div class="flex flex-col gap-5 md:flex-row">
                    <Input LabelTitle="Full Name" type="name" required v-model="user.name" />
                    <Input LabelTitle="Email" type="email" required v-model="user.email" />
                </div>

                <div class="flex flex-col gap-5 mt-5 md:flex-row">
                    <div class="flex items-end gap-3 xl:w-2/4">
                        <Input LabelTitle="NIF" type="number" required v-model="userInfo.nif" />
                        <div class="flex flex-row mb-2 gap-2">
                            <label>Set NIF as password</label>
                            <input type="checkbox" v-model="isChecked" class="size-6">
                        </div>
                    </div>
                    <Input LabelTitle="Password" type="password" required v-model="user.password" />
                </div>
                
                <div class="flex flex-col gap-5 mt-5 md:flex-row">
                    <Input LabelTitle="Internal Code" type="text" required v-model="user.internalCode" />
                    <Input LabelTitle="Phone Number" type="number" required v-model="userInfo.phoneNumber" />
                    <Input LabelTitle="Birthday Date" type="date" required v-model="userInfo.birthdayDate" />
                </div>

                <div class="flex flex-col gap-5 mt-5 md:flex-row ">
                    <Input LabelTitle="Address" type="address" required v-model="userInfo.address" />
                    <Input LabelTitle="Zip Code" type="number" required v-model="userInfo.zipCode" />
                </div>

                <div class="flex flex-col gap-5 mt-5 md:flex-row md:mt-5">
                    <Input LabelTitle="State/Province" type="text" required v-model="userInfo.state" />
                    <Input LabelTitle="City" type="text" required v-model="userInfo.city" />
                    <Input LabelTitle="Country" type="text" required v-model="userInfo.country" />
                </div>

            </div>
        </template>
        <template v-slot:ButtonSubmit>
            <div class="flex justify-center mx-10">
                <ButtonSubmit textButton="Create User" />
            </div>
        </template>
    </FormShell>
</template>

<script>
import axios from 'axios';
import FormShell from '../../layout/FormShell.vue';
import AvatarCard from '../Form/AvatarCard.vue'
import FormTitle from '../../components/Form/FormTitle.vue';
import Input from '../../components/Form/Input.vue';
import ButtonSubmit from '../../components/Form/ButtonSubmit.vue';
export default {
    components: {
        FormShell,
        AvatarCard,
        FormTitle,
        Input,
        ButtonSubmit
    },
    data() {
        return {
            isChecked: false,
            user: {
                name: '',
                email: '',
                password: '',
                internalCode: '',
            },
            userInfo: {
                id: '',
                photo: '',
                nif: '',
                phoneNumber: '',
                birthdayDate: '',
                address: '',
                city: '',
                state: '',
                zipCode: '',
                country: ''
            }
        }
    },
    methods: {
        CreateUser() {
            axios
                .post('http://127.0.0.1:8000/users', this.user)
                .then((response) => {
                    console.log(userInfo.id);
                    this.userInfo.id = response.data.id;
                    // this.$router.push('/users');
                })

            console.log(this.user)
        },
        AddUserInfo() {
            axios
                .post('http://127.0.0.1:8000/usersinfo', this.userInfo)
                .then((response) => {
                    console.log(response);
                    // this.$router.push('/users');
                })
        }
    }
}
</script>
