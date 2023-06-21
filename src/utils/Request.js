import request from './Axious'




export function getUsers(endpoint) {
    return request({
        url:endpoint,
        method: 'GET',
        timeout: 5000,
    })
}

// export function ghetUsers() {
//     return request({
//         url: `/getlist`,
//         method: 'GET',
//     })
// }
