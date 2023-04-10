---
layout: home

title: Blog
---

<script setup>
    const posts = import.meta.globEager('./**/*.md')

    const formatData = (date) => {
        const d = new Date(date)

        return d.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }
</script>

<h1 class="blog-title">Blog</h1>

<div class="post-container">
    <a class="blog-post" v-for="post in posts" :href="'/'+post.default.name.replace('.md', '')">
        <h2 class="post-title">{{ post.__pageData.title }}</h2>
        <div class="post-info">
            <span class="post-date">{{ ((date)=>{const d=new Date(date);return d.toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'})})(post.__pageData.frontmatter.date) }}</span>
            <span class="post-author">{{ post.__pageData.frontmatter.author }}</span>
        </div>
        <p class="post-description">{{ post.__pageData.description }}</p>
        <img v-if="post.__pageData.image" :src="post.__pageData.image" class="post-image" />
    </a>
</div>
