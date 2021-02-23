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

        // 在使用时赋值，用于区分不同页面显示不同的评论
        id: id,
        // 官方默认使用的跨域代理已经失效了
        proxy: 'https://netnr-proxy.cloudno.de/https://github.com/login/oauth/access_token',
        // 关闭手动创建issue
        createIssueManually: false,
        // 禁用facebook的评论时遮罩背景效果
        distractionFreeMode: false
    }
}

export default {
    gitalkConf
}

