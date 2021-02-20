import axios from "axios";

export default {
    getDate(path) {
        let url = 'https://api.github.com/repos/lluuiq/blog/commits'
        return axios.get(url, {
            params: {
                path: "public" + path
            }
        })
    },
    getMarkdown(path) {
        let url = "https://api.github.com/repos/lluuiq/blog/contents/public" + path
        return axios.get(url, {
            headers: {
                Accept: 'application/vnd.github.VERSION.html'
            }
        })
    }
}
