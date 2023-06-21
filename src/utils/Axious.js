import axios from 'axios'

const setup = function () {
    axios.create({
        baseURL: `http://localhost:5050/`
    })
    axios.interceptors.request.use(
        config => {
            config.headers['Content-Type'] = 'application/json';
            return config
        },
        error => {
            Promise.reject(error)
        }
    )
    axios.interceptors.response.use(
        response => {
            return response
        }
    )
}

export default setup
