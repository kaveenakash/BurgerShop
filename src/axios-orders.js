import axios from 'axios'
const instance = axios.create({
    baseURL:'https://yumm-e88c6-default-rtdb.firebaseio.com/'
})

export default instance;