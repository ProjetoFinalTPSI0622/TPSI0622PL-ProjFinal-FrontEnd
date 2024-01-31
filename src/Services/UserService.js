import axios from 'axios';

export const UserService = {

    getUsers : async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/users',{
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });
            if (response.status === 200) {
                return {success: true, message: 'Authenticated', users: response.data}
            } else {
                return {success: false, message: 'Not authenticated'}
            }
        } catch (e) {
            return {success: false, message: 'Not authenticated'}
        }
    },

    getUser : async (id) => {
        try {
            const response = await axios.get('http://localhost:8000/api/users/' + id,{
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });
            console.log(response.data);
            if (response.status === 200) {
                return {success: true, message: 'Authenticated', data: response.data}
            } else {
                return {success: false, message: 'Not authenticated'}
            }
        } catch (e) {
            return {success: false, message: 'Not authenticated'}
        }
    },

    createUser : async (user) => {
        try {
            const response = await axios.post('http://localhost:8000/api/users', user,{
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });
            console.log(response.data);
            if (response.status === 200) {
                return {success: true, message: 'Authenticated', data: response.data}
            } else {
                return {success: false, message: 'Not authenticated'}
            }
        } catch (e) {
            return {success: false, message: 'Not authenticated'}
        }
    },

    createUserInfo : async (userInfo) => {
        try {
            const response = await axios.post('http://localhost:8000/api/userInfo', userInfo,{
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });
            console.log(response.data);
            if (response.status === 200) {
                return {success: true, message: 'Authenticated', data: response.data}
            } else {
                return {success: false, message: 'Not authenticated'}
            }
        } catch (e) {
            return {success: false, message: 'Not authenticated'}
        }
    },

    updateUser : async (user) => {
        try {
            const response = await axios.put('http://localhost:8000/api/users/' + user.id, user,{
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });
            console.log(response.data);
            if (response.status === 200) {
                return {success: true, message: 'Authenticated', data: response.data}
            } else {
                return {success: false, message: 'Not authenticated'}
            }
        } catch (e) {
            return {success: false, message: 'Not authenticated'}
        }
    },

    updateUserInfo : async (formData) => {
        try {
            const response = await axios.post('http://localhost:8000/api/userInfo/' + formData.get('user_id'), formData,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true,
            });
            console.log(response.data);
            if (response.status === 200) {
                return {success: true, message: 'Authenticated', data: response.data}
            } else {
                return {success: false, message: 'Not authenticated'}
            }
        } catch (e) {
            return {success: false, message: 'Not authenticated'}
        }
    },

    deleteUser : async (id) => {
        try {
            const response = await axios.delete('http://localhost:8000/api/users/' + id,{
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });
            console.log(response.data);
            if (response.status === 200) {
                return {success: true, message: 'Authenticated', data: response.data}
            } else {
                return {success: false, message: 'Not authenticated'}
            }
        } catch (e) {
            return {success: false, message: 'Not authenticated'}
        }
    },

    getTechnicians : async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/users/technicians',{
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });
            console.log(response.data);
            if (response.status === 200) {
                return {success: true, message: 'Authenticated', data: response.data}
            } else {
                return {success: false, message: 'Not authenticated'}
            }
        } catch (e) {
            return {success: false, message: 'Not authenticated'}
        }
    },

    getAuthedUser: async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/users/authed',{
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });
            if (response.status === 200) {
                return {success: true, message: 'Authenticated', user: response.data}
            } else {
                return {success: false, message: 'Not authenticated'}
            }
        } catch (e) {
            return {success: false, message: 'Not authenticated'}
        }
    },

    getRoles : async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/roles',{
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });
            console.log(response.data);
            if (response.status === 200) {
                return {success: true, message: 'Authenticated', data: response.data}
            } else {
                return {success: false, message: 'Not authenticated'}
            }
        } catch (e) {
            return {success: false, message: 'Not authenticated'}
        }
    },

    getGenders : async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/genders',{
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });
            console.log(response.data);
            if (response.status === 200) {
                return {success: true, message: 'Authenticated', data: response.data}
            } else {
                return {success: false, message: 'Not authenticated'}
            }
        } catch (e) {
            return {success: false, message: 'Not authenticated'}
        }
    },

    getCountries : async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/countries',{
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });
            console.log(response.data);
            if (response.status === 200) {
                return {success: true, message: 'Authenticated', data: response.data}
            } else {
                return {success: false, message: 'Not authenticated'}
            }
        } catch (e) {
            return {success: false, message: 'Not authenticated'}
        }
    },
}