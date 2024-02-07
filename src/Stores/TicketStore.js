import { defineStore } from 'pinia';
import ToastStore from '@/Stores/ToastStore.js';

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
            ToastStore().triggerToast(`O técnico ${this.selectedTechnician} foi assignado ao ticket !`, 'success');
        },
        convertTicketsToPDF(filteredTickets) {
            let ticketsElement = document.createElement('div');
            filteredTickets.forEach(ticket => {
                ticketsElement.innerHTML += `
                    <div style="border: 1px solid black; margin: 10px; padding: 10px;">
                        <p>${ticket.createdby.email}</p>
                        <p>${ticket.title}</p>
                        <p>${ticket.status.status_name}</p>
                    </div>
                `;
            });
            let opt = {
                margin: 1,
                filename: 'FilteredTickets.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().set(opt).from(ticketsElement).save();
        },
    },
});