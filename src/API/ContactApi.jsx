import axios from "axios";

const axiosIns = axios.create({
    baseURL: "http://localhost:5000"
})

const ContactApi = {
    getAll: () => {
        return axiosIns.request({
            method: "GET",
            url: `/contacts`
        })
    },
    getSingle: (id) => {
        return axiosIns.request({
            method: "GET",
            url: `/contacts/${id}`
        })
    },
    create: (contact) => {
        return axiosIns.request({
            method: "POST",
            url: `/contacts`,
            data: contact
        })
    },
    update: (id,contact) => {
        return axiosIns.request({
            method: "GET",
            url: `/contacts/${id}`
        })
    },
    delete: (id) => {
        return axiosIns.request({
            method: "GET",
            url: `/contacts/${id}`
        })
    },
}

export default ContactApi