import axios from "axios";

export const BASE_URL = 'http://localhost:3003';

export const Login = async (body) => {
    const { data } = await axios.post(`${BASE_URL}/users/login`, body);
    return (data)
};

export const Signup = async (body) => {
    const { data } = await axios.post(`${BASE_URL}/users/signup`, body);
    return (data)
};

export const ListPosts = async () => {
    const { data } = await axios.get(`${BASE_URL}/posts`,
        {
            headers: {
                Authorization: localStorage.getItem("site.token")
            }
        });
    return (data)
}

export const AddPosts = async (body) => {
    const { data } = await axios.post(`${BASE_URL}/posts`,
        body,
        {
            headers: {
                Authorization: localStorage.getItem("site.token")
            }
        });
    return (data)
}
