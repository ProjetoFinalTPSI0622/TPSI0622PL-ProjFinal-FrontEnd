<script setup>
import { defineProps, defineEmits, ref } from 'vue';
import { UserService } from '../../Services/UserService';
import Modal from '../Modal.vue';
import ToastStore from '../../Stores/ToastStore.js';


defineProps({
  user: Object
});
const emit = defineEmits(['userDeleted']);

const showModal = ref(false);
const userToDelete = ref(null);


const openModal = (userDelete) => {
  userToDelete.value = userDelete;
  showModal.value = true;
};

const handleConfirmModal = async () => {
  event.stopPropagation();
  if (userToDelete.value) {
    const response = await UserService.deleteUser(userToDelete.value.id);
    if (response.success) {
      ToastStore().triggerToast(`Utilizador ${userToDelete.value.name}, apagado com sucesso!`, 'success');
      emit("userDeleted");
    } else {
      console.error("Error deleting user:", response.message);
    }
  }
  showModal.value = false;
};

const handleCancelModal = () => {
  showModal.value = false;
  event.stopPropagation();
};


</script>

<template>
  <tr class="hoverGrey border-b-black border-b-opacity-30 border-b border-solid">
    <td class="flex flex-col md:flex-row gap-2.5">
      <img loading="lazy" :src="user.user_info.profile_picture_path"
        class="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full rounded-[50%]" />
      <span class="flex">
        <div class="text-black text-opacity-80 text-sm sm:text-lg self-center">
          {{ user.name }}
        </div>
      </span>
    </td>

    <td>{{ user.email }}</td>
    <td>{{ user.user_info.class }}</td>
    <td>{{ user.internalcode }}</td>
    <td>
      <button @click.stop="openModal(user)"
        class="px-4 py-2 ml-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-300">
        Apagar
      </button>
    </td>
    <Modal :show="showModal" @Cancel="handleCancelModal" @Confirm="handleConfirmModal">
      <template #title>
        Apagar utilizador
      </template>
      <template #content>
        <p class="flex">Esta prestes a apagar&nbsp;
        <div class="font-bold">{{ user.name }}</div>,&nbsp;pretende prosseguir?</p>
        <br>
        <p class="font-bold text-red-600">ATENÇÃO!!!</p>
        <p class="text-red-600">Esta acção não pode ser revertida!</p>
      </template>
    </Modal>
  </tr>
</template>

<style scoped>
td {
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: left;
}

td:first-child {
  padding-left: 140px;
}
</style>