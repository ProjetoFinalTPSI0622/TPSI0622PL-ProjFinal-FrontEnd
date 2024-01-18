import axios from 'axios';

export const TicketsService = {
    getTickets: async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/tickets', {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });
            if (response.status === 200) {
                return {success: true, message: 'Authenticated', tickets: response.data}
            } else {
                return {success: false, message: 'Not authenticated'}
            }
        } catch (e) {
            return {success: false, message: 'Not authenticated'}
        }
    },
    getTicket: async (id) => {
        try {
            const response = await axios.get('http://localhost:8000/api/tickets/' + id, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });
            console.log(response.data);
            if (response.status === 200) {
                return {success: true, message: 'Authenticated', ticket: response.data}
            } else {
                return {success: false, message: 'Not authenticated'}
            }
        } catch (e) {
            return {success: false, message: 'Not authenticated'}
        }
    },
    createTicket: async (title, description, priority, type) => {
        try {
            const response = await axios.post('http://localhost:8000/api/tickets', {
                title: title,
                description: description,
                priority: priority,
                type: type
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });
            console.log(response.data);
            if (response.status === 200) {
                return {success: true, message: 'Authenticated', ticket: response.data}
            } else {
                return {success: false, message: 'Not authenticated'}
            }
        } catch (e) {
            return {success: false, message: 'Not authenticated'}
        }
    },
    updateTicket: async (id, title, description, priority, type) => {
        try {
            const response = await axios.put('http://localhost:8000/api/tickets/' + id, {
                title: title,
                description: description,
                priority: priority,
                type: type
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });
        } catch (e) {
            return {success: false, message: 'Not authenticated'}
        }
    },
    deleteTicket: async (id) => {
        try {
            const response = await axios.delete('http://localhost:8000/api/tickets/' + id, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });
        } catch (e) {
            return {success: false, message: 'Not authenticated'}
        }
    },

    getComments: async (id) => {
        try {
            const response = await axios.get('http://localhost:8000/api/tickets/' + id + '/comments', {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });
            if (response.status === 200) {
                return {success: true, message: 'Authenticated', comments: response.data}
            } else {
                return {success: false, message: 'Not authenticated'}
            }
        } catch (e) {
            return {success: false, message: 'Not authenticated'}
        }
    },

    getCategories: async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/categories', {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });
            if (response.status === 200) {
                return {success: true, message: 'Authenticated', categories: response.data}
            } else {
                return {success: false, message: 'Not authenticated'}
            }
        } catch (e) {
            return {success: false, message: 'Not authenticated'}
        }
    },

    getUrgencies: async() => {
        try {
            const response = await axios.get('http://localhost:8000/api/urgencies', {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });
            if (response.status === 200) {
                return {success: true, message: 'Authenticated', urgencies: response.data}
            } else {
                return {success: false, message: 'Not authenticated'}
            }
        } catch (e) {
            return {success: false, message: 'Not authenticated'}
        }
    }
}