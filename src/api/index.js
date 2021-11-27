import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:5000/"
});

const api = {
    getProducts(){
        return instance.get(`/product`).then(res => res.data);
    },
    addProduct(obj){
        return instance.post(`/product`, obj).then(res => res.data);
    },
    removeProduct(id){
        return instance.delete(`/product/${id}`).then(res => res.data);
    }
}

export default api;