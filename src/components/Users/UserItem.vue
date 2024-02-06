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
  <tr class="hoverGrey border-b-black border-b-opacity-30 border-b border-solid items-start">

    <td class="flex flex-col pl-2.5 sm:items-center">
      <img loading="lazy" :src="user.user_info.profile_picture_path"
        class="aspect-square object-contain object-center w-10 h-10 md:w-20 md:h-20 overflow-hidden mr-2 md:mr-4 max-w-full rounded-[50%] hidden sm:table-cell" />
      <div class="flex flex-col md:flex-row w-full my-4">
        <div class="text-black text-opacity-80 text-xs sm:text-lg text-left mb-1 md:mb-0 md:mr-4 sm:w-full sm:text-center">
          {{ user.name }}
        </div>
      </div>
    </td>

    <td class="whitespace-nowrap hidden sm:table-cell text-lg text-center">{{ user.email }}</td>
    <td class="whitespace-nowrap text-xs text-center sm:text-lg ">{{ user.user_info.class }}</td>
    <td class="whitespace-nowrap text-xs text-center sm:text-lg">{{ user.internalcode }}</td>
    
    <td class="whitespace-nowrap text-center py-2.5 sm-py-0">
      <button @click.stop="openModal(user)"
        class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-300 text-xs sm:text-lg">
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

