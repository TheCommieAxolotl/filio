import { defineConfig } from "vitepress";

const MainSidebar = [
    {
        text: "Examples",
        items: [
            { text: "Getting Started", link: "/guide/" },
            { text: "API", link: "/guide/api" },
        ],
    },
];

const BlogSidebar = [
    {
        text: "Blog",
        items: [
            {
                text: "Introducing filio",
                link: "/blog/introducing-filio",
            },
        ],
    },
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
    cleanUrls: true,

    title: "filio",
    description: "A simple configuration loader for NodeJS that supports various file formats such as js, ts, yaml and more.",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            { text: "Guide", link: "/guide/" },
            { text: "Blog", link: "/blog/" },
        ],
        sidebar: {
            "/guide/": MainSidebar,
            "/blog/": BlogSidebar,
        },
        footer: {
            message: "Made with ❤️",
            copyright: "MIT Licensed | Copyright © 2023 TheCommieAxolotl",
        },
        socialLinks: [{ icon: "github", link: "https://github.com/TheCommieAxolotl/filio" }],
    },
    markdown: {
        toc: {
            level: [2, 3],
        },
    },
});
