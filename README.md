# Slice
A Simple, Light, Beautiful, Onepaged Hexo Theme.

## Installation

### Download

```bash
  git clone https://github.com/NHibiki/hexo_theme_slice.git theme/slice
```

Or, download the zip package through [GitHub](https://github.com/NHibiki/hexo_theme_slice/archive/master.zip).

Then unzip the file to folder `theme/slice`

### Config

You need to install these plugins to enable the theme:

 - hexo-generator-json-content
 - hexo-generator-feed

After that, you need to add some configs to Hexo Config.

```yml
theme: slice # To Enable The Theme.

jsonContent:
  meta: true
  dateFormat: YYYY-MM-DD HH:mm:ss
  posts:
    title: true
    slug: true
    date: true
    updated: true
    comments: true
    path: true
    link: true
    permalink: true
    excerpt: true
    keywords: true
    text: true
    raw: false
    content: true
    categories: true
    tags: true
```

<span style="color:red">Make Sure "content" and "text" are set to true if you don't want any bother.</span>

### Customize

Then, it is time to work on the theme `_config.yml` file.

First, rename `_config.yml.edit` which is a default config to `_config.yml`

