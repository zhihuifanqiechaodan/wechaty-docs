export default {
  title: " ",
  description: "Just playing around.",
  base: "/wechaty-docs/",
  lastUpdated: true,
  themeConfig: {
    logo: "/wechaty-logo.svg",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "指南",
        link: "/guide/",
        activeMatch: "/guide/",
      },
      { text: "我的掘金", link: "https://juejin.cn/user/3737995264930487" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/zhihuifanqiechaodan" },
    ],
    footer: {
      message: "行为守则",
      copyright: "版权所有 © 2023 Wechaty 贡献者",
    },

    sidebar: {
      "/guide/": [
        {
          text: "API",
          collapsed: false,
          items: [
            { text: "API 概述", link: "/guide/" },
            { text: "Puppet", link: "/guide/puppet" },
            { text: "Wechaty", link: "/guide/wechaty" },
            { text: "Message", link: "/guide/message" },
          ],
        },
      ],
    },
  },
  vite: {
    server: {
      host: true,
      port: 9527,
      open: false,
    },
  },
};
