import axios from "axios";

export default {
    getLastDate(path) {
        const url = 'https://api.github.com/repos/lluuiq/blog/commits'
        return axios.get(url, {
            params: {
                path: "public" + path
            }
        })
    }
}
