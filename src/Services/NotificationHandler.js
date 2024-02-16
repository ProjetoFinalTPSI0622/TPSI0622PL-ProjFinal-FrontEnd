export const NotificationHandler = (response) => {

    const handledNotifications = [];

    response.forEach(response => {
        const notification = response.notification;
        const notificationData = notification.notification_data;
        const ticket = notificationData.ticket;

        switch (response.notification.notification_data.event_type) {
            case 'ticket_created':
                handledNotifications.push({
                    id: notification.id,
                    ticketid: ticket.id,
                    message: `Ticket #${ ticket.id }, ${ ticket.description } criado por ${ticket.createdby.name}`
                })
                break;
            case 'ticketStatusUpdated':
                handledNotifications.push({
                    id: notification.id,
                    ticketid: ticket.id,
                    message: `O status do ticket #${ ticket.id } foi atualizado.`
                })
                break;
            case 'ticketPriorityUpdated':
                handledNotifications.push({
                    id: notification.id,
                    ticketid: ticket.id,
                    message: `A prioridade do ticket #${ ticket.id } foi atualizada.`
                })
                break;
            case 'ticketCommentCreated':
                handledNotifications.push({
                    id: notification.id,
                    ticketid: ticket.id,
                    message: `Comentário adicionado ao ticket #${ ticket.id }`
                })
                break;
            case 'ticketAssigned':
                handledNotifications.push({
                    id: notification.id,
                    ticketid: ticket.id,
                    message: `Ticket #${ ticket.id } foi atribuído a você.`
                })
                break;
            default:
                break;
        }
    })
    return handledNotifications;
}