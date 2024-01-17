<template>
    <div>
      <FormShell>
        <template v-slot:AvatarCard>
          <!-- Reutilize o componente AvatarCard e ouça os eventos necessários -->
          <AvatarCard @avatar="handleImageSelected" :initialImage="user.avatar" />
        </template>
  
        <template v-slot:Form>
          <FormTitle FormTitle="Edit User" />
  
          <div class="flex flex-col w-full my-5">
            <div class="flex flex-col gap-5 md:flex-row">
              <Input LabelTitle="Full Name" type="name" required v-model="user.name" />
              <Input LabelTitle="Email" type="email" required v-model="user.email" />
            </div>
            <!-- Adicione os campos restantes conforme necessário para a edição -->
          </div>
  
          <ButtonSubmit textButton="Save Changes" @click.prevent="updateUser" />
        </template>
      </FormShell>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import FormShell from '../../layout/FormShell.vue';
  import AvatarCard from '../Form/AvatarCard.vue';
  import FormTitle from '../../components/Form/FormTitle.vue';
  import Input from '../../components/Form/Input.vue';
  import ButtonSubmit from '../../components/Form/ButtonSubmit.vue';
  
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
        // Faça uma solicitação ao seu backend para atualizar o usuário
        axios
          .put(`http://127.0.0.1:8000/users/${this.user.id}`, this.user)
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
  </script>
  