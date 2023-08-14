import axios from "axios";

export default axios.create({
    baseURL: `https://api.github.com/users/`,
    params: {
        key: import.meta.env.REACT_APP_GITHUB_API_KEY
    }
})
