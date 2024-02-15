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
                    id: response.notification.id,
                    ticketId: response.notification.notification_data.ticket_id,
                    message: `O estado do ticket ${response.notification.notification_data.ticket_id} foi atualizado por ${response.notification.notification_data.updated_by} para ${response.notification.notification_data.updated_to}`
                })
                break;
            case 'ticketPriorityUpdated':
                handledNotifications.push({
                    id: response.notification.id,
                    ticketId: response.notification.notification_data.ticket_id,
                    message: `A prioridade do ticket ${response.notification.notification_data.ticket_id} foi atualizada por ${response.notification.notification_data.updated_by} para ${response.notification.notification_data.updated_to}`
                })
                break;
            case 'ticketCommentCreated':
                handledNotifications.push({
                    id: response.notification.id,
                    ticketId: response.notification.notification_data.ticket_id,
                    message: `Ticket ${response.notification.notification_data.ticket_id} comentado por ${response.notification.notification_data.created_by}`
                })
                break;
            case 'ticketAssigned':
                handledNotifications.push({
                    id: response.notification.id,
                    ticketId: response.notification.notification_data.ticket_id,
                    message: `Ticket ${response.notification.notification_data.ticket_id} atribuído a ${response.notification.notification_data.assigned_to}`
                })
                break;
            default:
                break;
        }
    })
    console.log(handledNotifications)
    return handledNotifications;
}