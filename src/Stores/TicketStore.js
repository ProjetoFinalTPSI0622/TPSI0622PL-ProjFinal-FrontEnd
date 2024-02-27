import { defineStore } from 'pinia';
import ToastStore from '@/Stores/ToastStore.js';
import { TicketsService } from '@/Services/TicketsService.js';
import html2pdf from 'html2pdf.js';
import { useTicketFilterStore } from '@/Stores/TicketFilterStore';

export const useTicketStore = defineStore({
    id: 'modal',
    state: () => ({
        showModal: false,
        newValue: null,
        ticketID: null,
        oldValue: 0,
        type: '',
        tickets: [],
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
        handleShowModalPriority(priority, ticketID, oldValue) {
            this.showModal = true;
            this.ticketID = ticketID;
            this.oldValue = oldValue;
            this.newValue = priority;
            this.type = 'priority';
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
                case 'priority':
                    await this.changePriority();
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

        async changePriority() {
            const response = await TicketsService.updatePriority(this.ticketID, this.newValue);
            if (response.success) {
                ToastStore().triggerToast(`A prioridade do ticket foi alterada !`, 'success');
            } else {
                ToastStore().triggerToast(`Erro ao alterar a prioridade do ticket !`, 'error');
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

        async fetchTickets() {
            const response = await TicketsService.getTickets();
            if (response.success) {
                this.tickets = response.data;
                console.log(this.tickets);
            } else {
                console.error('Failed to fetch tickets');
            }
        },

        async convertTicketsToPDF() {
            const store = useTicketFilterStore();
            let container = document.createElement('div');
        
            store.filteredTickets.forEach((ticket, index) => {
                if (index % 4 === 0) {
                    let header = document.createElement('div');
                    header.textContent = 'Header Text';
                    header.style.textAlign = 'center';
                    header.style.marginBottom = '20px';
                    container.appendChild(header);
                }

                let ticketDiv = document.createElement('div');
                ticketDiv.style.display = 'flex';
                ticketDiv.style.flexDirection = 'column';
                ticketDiv.style.padding = '20px';
                ticketDiv.style.gap = '10px';
                ticketDiv.style.border = '1px solid #ddd';
                ticketDiv.style.backgroundColor = '#f8f8f8';
                ticketDiv.style.marginBottom = '20px';

                let title = document.createElement('p');
                title.textContent = `Titulo: ${ticket.title}`;
                ticketDiv.appendChild(title);

                let createdBy = document.createElement('p');
                createdBy.textContent = `Criado por: ${ticket.createdby.email}`;
                ticketDiv.appendChild(createdBy);

                let assignedTo = document.createElement('p');
                assignedTo.textContent = `Técnico: ${ticket.assignedto ? ticket.assignedto.name : "Sem Técnico"}`;
                ticketDiv.appendChild(assignedTo);

                let status = document.createElement('p');
                status.textContent = `Estado: ${ticket.status.name}`;
                ticketDiv.appendChild(status);

                container.appendChild(ticketDiv);

                if ((index + 1) % 4 === 0 || index === this.tickets.length - 1) {
                    let footer = document.createElement('div');
                    footer.textContent = 'Footer Text';
                    footer.style.textAlign = 'center';
                    footer.style.marginTop = '20px';
                    container.appendChild(footer);

                    if (index !== this.tickets.length - 1) {
                        let pageBreak = document.createElement('div');
                        pageBreak.style.pageBreakAfter = 'always';
                        container.appendChild(pageBreak);
                    }
                }
            });

            document.body.appendChild(container);

            let opt = {
                margin: 1,
                filename: 'Tickets.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().set(opt).from(container).save().then(() => {
                document.body.removeChild(container);
            });
        },
    },
});