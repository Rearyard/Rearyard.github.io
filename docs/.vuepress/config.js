module.exports = {
    base:"/",
    title: 'Rearyard v2.0 设计文档',
    description: '后花园v2.0背后的那些事儿',
    themeConfig: {
        sidebar: 'auto',
        lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
        nav: [
            {
                text:"设定",link:"/design/"
            },
            {
                text: '开发文档', items: [
                    { text: "数据库文档", link: '/database/' },
                    { text: "后端文档", link: '/server/' }
                ]
            },
            {
                text: 'GitHub',
                items: [
                    { text: 'GitHub组织', link: 'https://github.com/Rearyard' },
                    {
                        text: 'To CafuChino',
                        link: 'https://github.com/CafuChino'
                    }
                ]
            }
        ],
    },
}