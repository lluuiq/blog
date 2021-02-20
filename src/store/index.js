import Vue from 'vue'
import Vuex from 'vuex'
import markdown from "@/utils/markdown";

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        posts: markdown.getPostList(),
        toc: [],
    },
    getters: {
        POST_GET_POST: state => (category, title) => {
            return state.posts.find((item, index) => {
                return item.category.join('-') === category && item.title === title
            })

        }
    },
    actions: {},
    modules: {}
})
