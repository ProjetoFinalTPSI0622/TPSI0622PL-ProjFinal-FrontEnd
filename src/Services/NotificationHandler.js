export const NotificationHandler = (response) => {
    const handledNotifications = [];
    // "{"event_type":"ticket_created","ticket_id":13,"created_by":1,"ticket_title":"fsdfsdf"}"
    response.forEach(response => {
        switch (response.notification.notification_data.event_type) {
            case 'ticket_created':
                handledNotifications.push({
                    id: response.notification.id,
                    message: `Ticket ${response.notification.notification_data.ticket_id} criado por ${response.notification.notification_data.created_by}`
                })
                break;
            case 'ticketStatusUpdated':
                handledNotifications.push({
                    id: response.notification.id,
                    message: `O estado do ticket ${response.notification.notification_data.ticket_id} foi atualizado por ${response.notification.notification_data.updated_by} para ${response.notification.notification_data.updated_to}`
                })
                break;
            case 'ticketPriorityUpdated':
                handledNotifications.push({
                    id: response.notification.id,
                    message: `A prioridade do ticket ${response.notification.notification_data.ticket_id} foi atualizada por ${response.notification.notification_data.updated_by} para ${response.notification.notification_data.updated_to}`
                })
                break;
            case 'ticketCommentCreated':
                handledNotifications.push({
                    id: response.notification.id,
                    message: `Ticket ${response.notification.notification_data.ticket_id} comentado por ${response.notification.notification_data.created_by}`
                })
                break;
            case 'ticketAssigned':
                handledNotifications.push({
                    id: response.notification.id,
                    message: `Ticket ${response.notification.notification_data.ticket_id} atribuído a ${response.notification.notification_data.assigned_to}`
                })
                break;
            default:
                break;
        }
    })
    return handledNotifications;
}