import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3004',
    headers: {
        'Content-Type': 'application/json'
    }
})

const api = Object.freeze({
    getDestination() {
        return instance.get('destination')
    },
    getHotels(params) {
        return instance.get('destination',{
            params,
        })
    }
})
export default api