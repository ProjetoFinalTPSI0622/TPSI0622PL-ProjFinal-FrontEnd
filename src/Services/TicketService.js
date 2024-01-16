import axios from 'axios';

export const getTickets = async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/tickets',
        {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });
    return response.data;
}

