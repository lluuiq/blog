import axios from "axios";

let baseUrl = "https://api.github.com"
export default {
    getDate(path) {
        let url = baseUrl + '/api/github/repos/lluuiq/blog/commits'
        return axios.get(url, {
            params: {
                path: "public" + path
            }
        })
    }
}
