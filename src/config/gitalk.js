const gitalkConf = (id) => {
    return {
        clientID: '739a34cde3d5cd833d38',
        clientSecret: 'e4deb7d6dfaa3ef8886c854ee015d5ff0335dacf',
        repo: 'blog-comment',
        owner: 'lluuiq',
        admin: ['lluuiq'],
        id: "", // 在使用时赋值，用于区分不同页面显示不同的评论
        createIssueManually: true,
        proxy: 'https://netnr-proxy.cloudno.de/https://github.com/login/oauth/access_token',
        distractionFreeMode: false
    }
}

export default {
    gitalkConf
}

