const user = {
    name: 'lluuiq',
    repo: 'blog-comment',
    clientID: '739a34cde3d5cd833d38',
    clientSecret: 'e4deb7d6dfaa3ef8886c854ee015d5ff0335dacf',
}

const gitalkConf = (id) => {
    return {
        clientID: user.clientID,
        clientSecret: user.clientSecret,
        repo: user.repo,
        owner: user.name,
        admin: [user.name],
        id: id, // 在使用时赋值，用于区分不同页面显示不同的评论
        proxy: 'https://netnr-proxy.cloudno.de/https://github.com/login/oauth/access_token',
        createIssueManually: false,
        distractionFreeMode: false
    }
}

export default {
    gitalkConf
}

