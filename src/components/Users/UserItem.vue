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
  <tr class="hoverGrey border-b-black border-b-opacity-30 border-b border-solid grid grid-cols-3 sm:grid-cols-4 gap-4 pl-[10%] pr-[5%] sm:pl-[20%] sm:pr-[15%]">

    <td class="flex flex-col gap-1 py-2 overflow-hidden overflow-ellipsis">
      <img loading="lazy" :src="user.user_info.profile_picture_path"
        class="aspect-square object-cover content-start w-12 overflow-hidden shrink-0 max-w-full rounded-[50%]" />
      <div class="flex w-full ">
        <div class="whitespace-nowrap text-black text-opacity-80 text-xs sm:text-lg text-left sm:w-full overflow-hidden overflow-ellipsis">
          {{ user.name }}
        </div>
      </div>
    </td>

    <td
      class="whitespace-nowrap text-xs sm:text-lg self-center overflow-hidden overflow-ellipsis">
      {{ user.user_info.class }}
    </td>
    <td
      class="hidden sm:block whitespace-nowrap text-xs sm:text-lg self-center overflow-hidden overflow-ellipsis">
      {{ user.internalcode }}
    </td>

    <td
      class="whitespace-nowrap  py-2.5 sm-py-0 self-center">
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

