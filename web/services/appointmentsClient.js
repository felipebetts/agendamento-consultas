
// const appointmentClient = axios.create({
//     baseURL: 'http://localhost:4000/appointment_hours',
//     timeout: 5000,
//     headers: {
//         'X-Requested-With': 'XMLHttpRequest',
//         'Content-type': 'application/json',
//         'Accept': 'application/json'
//     }
// })

import { api } from "./apiClient"

export const getAppointments = () => {
    return api('get', '/appointment_hours')
        .then(res => {
            console.log('res: ', res)
            return res
        })
    }
    
export const getAppointmentById = (id) => {
    return api('get', `/appointment_hours/${id}`)
        .then(res => {
            console.log('res: ', res)
            return res
        })
}