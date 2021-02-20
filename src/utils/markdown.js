import axios from "axios";

/**
 * 初始化博客列表
 * @return: posts 列表
 *         - path: 博文路径 string
 *         - title: 博客标题 string
 *         - category: 分类 []
 *         - forntMatter: md头信息 {}
 *         - content: 博文内容
 *         - abstract: 博文摘要
 */
const getPostList = () => {
    const matter = require('gray-matter')

    var posts = []
    const context = require.context('../../public', true, /\.md$/);
    const files = context.keys();
    files.map(file => {
        var post = {
            path: '',
            title: '',
            category: [],
            forntMatter: {},
            content: '',
            abstract: '',
        }

        const iter = file.split('/')
        for (var index = 1; index < iter.length; index++) {
            if (index > 1 && index < iter.length - 1) {
                post.category.push(iter[index])
            }
            post.path += '/' + iter[index]
        }

        axios.get(post.path).then(res => {
            // 获取解析内容
            const data = matter(res.data)
            post.forntMatter = data.data
            // 赋值
            if (data.content.search('<!-- more -->') !== -1) {
                post.content = data.content.split('<!-- more -->')[1]
                post.abstract = data.content.split('<!-- more -->')[0]
            } else if (data.content.search('<!--more-->') !== -1) {
                post.content = data.content.split('<!--more-->')[1]
                post.abstract = data.content.split('<!--more-->')[0]
            } else {
                post.content = data.content
                post.abstract = ''
            }
        })
        post.title = iter[iter.length - 1].split('.md')[0]
        posts.push(post)
    })
    return posts
}

export default {
    getPostList
}
