import axios from 'axios';

export const getUsers = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users');
}


export const login = (email, password) => {

    const loginData = {
        email: email,
        password: password
    }

    return axios.put('http://localhost:8000/login', loginData)
        .then(res => {
            console.log(res)
            if (res.status === 200) {
                alert('Login realizado com sucesso')
            }
        })
        .catch(err => {
            console.log(err)
            alert('Erro ao realizar login')
        });
}