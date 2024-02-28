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
        selectbox: null,
    }),
    actions: {
        handleShowModalStatus(technicianID, ticketID, oldValue, selectbox) {
            this.showModal = true;
            this.ticketID = ticketID;
            this.oldValue = oldValue;
            this.newValue = technicianID;
            this.type = 'status';
            this.selectbox = selectbox;
        },
        handleShowModalTech(technicianID, ticketID, oldValue, selectbox) {
            this.showModal = true;
            this.ticketID = ticketID;
            this.oldValue = oldValue;
            this.newValue = technicianID;
            this.type = 'technician';
            this.selectbox = selectbox;
        },
        handleShowModalPriority(priority, ticketID, oldValue, selectbox) {
            this.showModal = true;
            this.ticketID = ticketID;
            this.oldValue = oldValue;
            this.newValue = priority;
            this.type = 'priority';
            this.selectbox = selectbox;
        },

        handleShowModalLocation(locationID, ticketID, oldValue, selectbox) {
            this.showModal = true;
            this.ticketID = ticketID;
            this.oldValue = oldValue;
            this.newValue = locationID;
            this.type = 'location';
            this.selectbox = selectbox;
        },

        handleCancelModal() {
            this.showModal = false;
            this.selectbox.selectedIndex = this.oldValue;
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
                case 'location':
                    await this.changeLocation();
                    break;
            }
            this.showModal = false;
        },

        async changeLocation() {
            const response = await TicketsService.updateLocation(this.ticketID, this.newValue);
            if (response.success) {
                ToastStore().triggerToast(`A localização do ticket foi alterada !`, 'success');
            } else {
                ToastStore().triggerToast(`Erro ao alterar a localização do ticket !`, 'error');
            }
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
                    header.style.display = 'flex';
                    header.style.justifyContent = 'space-between';
                    header.style.marginBottom = '20px';

                    let cesae = document.createElement('div');
                    cesae.textContent = 'CesaeDesk';
                    cesae.style.textAlign = 'left';
                    header.appendChild(cesae);

                    let date = document.createElement('div');
                    let today = new Date();
                    date.textContent = today.toISOString().split('T')[0];
                    date.style.textAlign = 'right';
                    header.appendChild(date);

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

        async convertSingleTicketToPDF(ticket) {
            let container = document.createElement('div');

            let header = document.createElement('div');
            header.style.display = 'flex';
            header.style.justifyContent = 'space-between';
            header.style.marginBottom = '20px';

            let cesae = document.createElement('div');
            cesae.textContent = 'CesaeDesk';
            cesae.style.textAlign = 'left';
            header.appendChild(cesae);

            let date = document.createElement('div');
            let today = new Date();
            date.textContent = today.toISOString().split('T')[0];
            date.style.textAlign = 'right';
            header.appendChild(date);

            container.appendChild(header);

            let ticketDiv = document.createElement('div');
            ticketDiv.style.display = 'flex';
            ticketDiv.style.flexDirection = 'column';
            ticketDiv.style.padding = '20px';
            ticketDiv.style.gap = '10px';
            ticketDiv.style.border = '1px solid #ddd';
            ticketDiv.style.backgroundColor = '#f8f8f8';
            ticketDiv.style.marginBottom = '20px';

            let createdBy = document.createElement('p');
            createdBy.textContent = `Created by: ${ticket.createdby.email}`;
            ticketDiv.appendChild(createdBy);

            let title = document.createElement('p');
            title.textContent = `Title: ${ticket.title}`;
            ticketDiv.appendChild(title);

            let description = document.createElement('p');
            let text = ticket.description.replace(/<[^>]*>/g, '');
            description.textContent = `Description: ${text}`;
            ticketDiv.appendChild(description);

            let assignedTo = document.createElement('p');
            assignedTo.textContent = `Technician: ${ticket.assignedto ? ticket.assignedto.name : "No Technician"}`;
            ticketDiv.appendChild(assignedTo);

            let category = document.createElement('p');
            category.textContent = `Category: ${ticket.category.name}`;
            ticketDiv.appendChild(category);

            let priority = document.createElement('p');
            priority.textContent = `Priority: ${ticket.priority.name}`;
            ticketDiv.appendChild(priority);

            let status = document.createElement('p');
            status.textContent = `Status: ${ticket.status.name}`;
            ticketDiv.appendChild(status);

            let location = document.createElement('p');
            location.textContent = `Location: ${ticket.location}`;
            ticketDiv.appendChild(location);

            container.appendChild(ticketDiv);

            document.body.appendChild(container);

            let opt = {
                margin: 1,
                filename: 'Ticket.pdf',
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