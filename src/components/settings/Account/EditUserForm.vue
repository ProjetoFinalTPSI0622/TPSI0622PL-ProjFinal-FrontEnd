<template>
    <FormShell>
        <template v-slot:AvatarCard>
            <AvatarCard @avatar="ImageHandler" :initialImage="user.avatar" />
        </template>

        <template v-slot:Form>
            <FormTitle FormTitle="Create User" />

            <div class="flex flex-col w-full my-5">
                <div class="flex flex-col gap-5 md:flex-row">
                    <Input LabelTitle="Full Name" type="name" required v-model="user.name" />
                    <Input LabelTitle="Email" type="email" required v-model="user.email" />
                </div>
                <div class="flex flex-col gap-5 mt-5 md:flex-row">
                    <div class="flex flex-col md:flex-row md:items-end gap-3 lg:w-2/4">
                        <Input LabelTitle="NIF" type="number" required v-model="userInfo.nif" />
                        <div class="flex flex-row mb-2 gap-2 ">
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

            <ButtonSubmit textButton="Save Changes" @click.prevent="updateUser" />
        </template>
    </FormShell>
</template>


<script>
    import axios from 'axios';
    import FormShell from '@/layout/FormShell.vue';
    import AvatarCard from '@/Form/AvatarCard.vue';
    import FormTitle from '@/components/Form/FormTitle.vue';
    import Input from '@/components/Form/Input.vue';
    import ButtonSubmit from '@/components/Form/ButtonSubmit.vue';
    import { AxiosService } from '@/Services/AxiosService.js';

    export default {
      components: {
        FormShell,
        AvatarCard,
        FormTitle,
        Input,
        ButtonSubmit,
      },
      data() {
        return {
          user: {
            id: '', // Adicione o campo 'id' para identificar o usuário
            name: '',
            email: '',
            // Adicione outros campos conforme necessário
            avatar: null, // Para armazenar a imagem
          },
        };
      },
      methods: {
        // Método para atualizar as informações do usuário
        updateUser() {
          AxiosService.updateUser(this.user)
            .then((response) => {
              console.log('User updated successfully:', response.data);
              // Redirecione ou tome outra ação após a atualização
            })
            .catch((error) => {
              console.error('Error updating user:', error);
            });
        },

        // Método chamado quando uma nova imagem é selecionada no AvatarCard
        handleImageSelected(image) {
          this.user.avatar = image;
        },
        // Método para carregar os dados do usuário a serem editados
        loadUserData(userId) {
          AxiosService.loadUserData(userId)
            .then((response) => {
              // Preencha os dados do usuário com os dados recebidos do backend
              this.user = response.data;
            })
            .catch((error) => {
              console.error('Error loading user data:', error);
            });

        },
      },

      created() {
        // Carregue os dados do usuário ao criar o componente
        const userId = 'ID_DO_USUARIO_A_SER_EDITADO'; // Substitua pelo ID do usuário a ser editado
        this.loadUserData(userId);
      },
    };
    </script>
<!--
    })
    .catch((error) => {
    console.error('Error updating user:', error);
    });
    },

    // Método chamado quando uma nova imagem é selecionada no AvatarCard
    handleImageSelected(image) {
    this.user.avatar = image;
    },

    // Método para carregar os dados do usuário a serem editados
    loadUserData(userId) {
    axios
    .get(`http://127.0.0.1:8000/users/${userId}`)
    .then((response) => {
    // Preencha os dados do usuário com os dados recebidos do backend
    this.user = response.data;
    })
    .catch((error) => {
    console.error('Error loading user data:', error);
    });
    },
    },

    created() {
    // Carregue os dados do usuário ao criar o componente
    const userId = 'ID_DO_USUARIO_A_SER_EDITADO'; // Substitua pelo ID do usuário a ser editado
    this.loadUserData(userId);
    },
    };
</script>-->
