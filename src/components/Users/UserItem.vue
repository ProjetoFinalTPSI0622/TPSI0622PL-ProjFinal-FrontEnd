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
const userData = ref(null);
const modalAction = ref(null);


const openModal = (myUser) => {
  userData.value = myUser;
  showModal.value = true;
};

const handleConfirmModal = async () => {
  event.stopPropagation();
  if (modalAction.value === 'delete') {
    if (userData.value) {
      const response = await UserService.deleteUser(userData.value.id);
      if (response.success) {
        ToastStore().triggerToast(`Utilizador ${userData.value.name}, apagado com sucesso!`, 'success');
        emit("userDeleted");
      } else {
        console.error("Error deleting user:", response.message);
      }
    }
  }
  else if (modalAction.value === 'reset') {
    if (userData.value) {
      const response = await UserService.resetPassword(userData.value);
      if (response.success) {
        ToastStore().triggerToast(`Password de ${userData.value.name}, alterada com sucesso!`, 'success');
      } else {
        console.error("Error reseting password:", response.message);
      }
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
  <tr
    class="hoverGrey border-b-black border-b-opacity-30 border-b border-solid grid grid-cols-3 sm:grid-cols-4 gap-4 pl-[10%] pr-[5%] sm:pl-[20%] sm:pr-[15%]">

    <td class="flex flex-col gap-1 py-2 overflow-hidden overflow-ellipsis">
      <img loading="lazy" :src="user.user_info.profile_picture_path"
        class="aspect-square object-cover content-start w-12 overflow-hidden shrink-0 max-w-full rounded-[50%]" />
      <div class="flex w-full ">
        <div
          class="whitespace-nowrap text-black text-opacity-80 text-xs sm:text-lg text-left sm:w-full overflow-hidden overflow-ellipsis">
          {{ user.name }}
        </div>
      </div>
    </td>

    <td class="hidden sm:block whitespace-nowrap text-xs sm:text-lg self-center overflow-hidden overflow-ellipsis">
      {{ user.user_info.class }}
    </td>
    <td class="hidden sm:block whitespace-nowrap text-xs sm:text-lg self-center overflow-hidden overflow-ellipsis">
      {{ user.internalcode }}
    </td>

    <td class="whitespace-nowrap  py-2.5 sm-py-0 self-center">
      <button @click.stop="openModal(user, modalAction = 'delete')"
        class="p-2 mr-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-300 text-xs sm:text-lg">
        Apagar
      </button>
      <button @click.stop="openModal(user, modalAction = 'reset')"
        class="p-2 bg-yellow-600 text-white rounded hover:bg-red-700 transition duration-300 text-xs sm:text-lg">
        Repor password
      </button>
    </td>

    <Modal :show="showModal" @Cancel="handleCancelModal" @Confirm="handleConfirmModal">
      <template v-if="modalAction === 'delete'" #title>
        Apagar utilizador
      </template>

      <template v-else-if="modalAction === 'reset'" #title>
        Repor password
      </template>

      <template v-if="modalAction === 'delete'" #content>
        <p class="flex">Esta prestes a apagar&nbsp;
        <div class="font-bold">{{ user.name }}</div>,&nbsp;pretende prosseguir?</p>
        <br>
        <p class="font-bold text-red-600">ATENÇÃO!!!</p>
        <p class="text-red-600">Esta acção não pode ser revertida!</p>
      </template>

      <template v-else-if="modalAction === 'reset'" #content>
        <p class="flex">A password de&nbsp;
        <div class="font-bold">{{ user.name }}</div>,&nbsp;ficara o NIF dele, pretende prosseguir?</p>
        <br>
        <p class="font-bold text-red-600">ATENÇÃO!!!</p>
        <p class="text-red-600">Esta acção não pode ser revertida!</p>
      </template>

    </Modal>
  </tr>
</template>

