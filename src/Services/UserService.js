import axios from 'axios';

export const getUsers = async () => {
    const response = await axios.get('http://localhost:8000/api/user',
        {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });
    return response.data;
}