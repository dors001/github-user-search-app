import axios from "axios";

//TODO: fix global variables in .env
const apiKey = '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'

export default axios.create({
    baseURL: `https://api.github.com/users/`,
    params: {
        key: apiKey
    }
})
