import axios from 'axios';

export const getDataAPI = async (url) => {
    const res = await axios.get(`https://localhost:7173/${url}`
    // , {
    //     // https://localhost:7173/NewsArticle
    //     // headers: { Authorization: token }
    // }
    )
    return res;
};
export const loginAPI = async(body) => {
    const res = await axios.get(`https://localhost:7173/User`, {params:body })
    return res;
}
export const signupAPI = async(body) => {
    const res = await axios.post(`https://localhost:7173/User`, body)
    return res;
}


export const postDataAPI = async (url, post,token) => {
    const res = await axios.post(`http://localhost:5000/api/${url}`, post,{
        headers: { Authorization: token }
    })
    return res;
};

export const putDataAPI = async (url, post, token) => {
    const res = await axios.put(`/api/${url}`, post, {
        headers: { Authorization: token }
    })
    return res;
};

export const patchDataAPI = async (url, post, token) => {
    const res = await axios.patch(`http://localhost:5000/api/${url}`, post, {
        headers: { Authorization: token }
    })
    return res;
};

export const deleteDataAPI = async (url, token) => {
    const res = await axios.delete(`/api/${url}`, {
        headers: { Authorization: token }
    })
    return res;
};