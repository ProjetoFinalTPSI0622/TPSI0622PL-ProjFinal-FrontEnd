import { defineStore } from 'pinia';
import ToastStore from '@/Stores/ToastStore.js';
import { TicketsService } from '@/Services/TicketsService.js';

export const useTicketStore = defineStore({
    id: 'modal',
    state: () => ({
        showModal: false,
        newValue: null,
        ticketID: null,
        oldValue: 0,
        type: '',
    }),
    actions: {
        handleShowModalStatus(technicianID, ticketID, oldValue) {
            this.showModal = true;
            this.ticketID = ticketID;
            this.oldValue = oldValue;
            this.newValue = technicianID;
            this.type = 'status';
        },
        handleShowModalTech(technicianID, ticketID, oldValue) {
            this.showModal = true;
            this.ticketID = ticketID;
            this.oldValue = oldValue;
            this.newValue = technicianID;
            this.type = 'technician';
        },
        handleCancelModal() {
            this.showModal = false;
        },
        async handleConfirmModal() {
            switch (this.type) {
                case 'status':
                    await this.changeStatus();
                    break;
                case 'technician':
                    await this.assignTechnician();
                    break;
            }
            this.showModal = false;
        },

        async changeStatus() {
            const response = await TicketsService.updateStatus(this.ticketID, this.newValue);
            if (response.success) {
                ToastStore().triggerToast(`O status do ticket foi alterado !`, 'success');
            }
            else (
                ToastStore().triggerToast(`Erro ao alterar o status do ticket !`, 'error')
            )
        },

        async assignTechnician() {
            const response = await TicketsService.assignTechnician(this.ticketID, this.newValue);
            if (response.success) {
                ToastStore().triggerToast(`O técnico foi assignado ao ticket !`, 'success');
                const statusResponse = await TicketsService.updateStatus(this.ticketID, 2);
                if (statusResponse.success) {
                    ToastStore().triggerToast(` status do tiOcket foi alterado para "Em Progresso"!`, 'success');
                } else {
                    ToastStore().triggerToast(`Erro ao alterar o status do ticket para "Em Progresso"!`, 'error');
                }
            } else {
                ToastStore().triggerToast(`Erro ao assignar o técnico ao ticket !`, 'error');
            }
        },

        async closeTicket(ticketID) {
            const response = await TicketsService.closeTicket(ticketID);
            if (response.success) {
                ToastStore().triggerToast(`O ticket foi fechado !`, 'success');
            } else {
                ToastStore().triggerToast(`Erro ao fechar o ticket !`, 'error');
            }
        },

        async reopenTicket(ticketID) {
            const response = await TicketsService.reopenTicket(ticketID);
            if (response.success) {
                ToastStore().triggerToast(`O ticket foi reaberto!`, 'success');
                const updateAssignedToResponse = await TicketsService.assignTechnician(ticketID, null);
                if (updateAssignedToResponse.success) {
                    ToastStore().triggerToast(`O técnico foi removido do ticket !`, 'success');
                } else {
                    ToastStore().triggerToast(`Erro ao remover o técnico do ticket !`, 'error');
                }
            } else {
                ToastStore().triggerToast(`Erro ao reabrir o ticket !`, 'error');
            }
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