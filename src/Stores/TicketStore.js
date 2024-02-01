import { defineStore } from 'pinia';

export const useTicketStore = defineStore({
    id: 'modal',
    state: () => ({
        showModal: false,
        selectedTechnician: '',
        selectBox: null,
        oldValue: 0,
    }),
    actions: {
        handleShowModal(technicianName, selectbox, oldValue) {
            this.showModal = true;
            this.selectBox = selectbox;
            this.oldValue = oldValue;
            this.selectedTechnician = technicianName;
        },
        handleCancelModal() {
            this.showModal = false;
            this.selectBox.selectedIndex = this.oldValue;
        },
        handleConfirmModal() {
            this.showModal = false;
            this.oldValue = this.selectBox.selectedIndex;
        },
    },
});