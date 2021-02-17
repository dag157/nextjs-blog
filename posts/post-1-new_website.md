---
title: 'New Website'
date: '2021-02-13'
url: 'post-1-new_website'
---

Welcome to my new website! I have never created a personal website,  and after 4 years of being involved in coding, I thought I'd make one.

After some thinking, I have decided to create this website with **Next.js**, which is built on top of **React**. Plain old vanilla HTML and JavaScript sites has some downfalls. Next.js has some advantages that make it quicker to render and easier to develop.

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.