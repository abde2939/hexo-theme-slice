# Slice
A Simple, Light, Beautiful, Onepaged Hexo Theme.

![Slice](https://img.shields.io/badge/Hexo%20Theme-Slice-ff4500.svg?style=flat-square)
![NHibiki](https://img.shields.io/badge/Author-NHibiki-40aa00.svg?style=flat-square)
![Code](https://img.shields.io/badge/Code%20With-<3-ff0000.svg?style=flat-square)

[Demo](https://slice.nekoyu.cc) | [Customize](https://github.com/NHibiki/hexo-theme-slice#customize)

## Installation

### Download

```bash
  git clone https://github.com/NHibiki/hexo-theme-slice.git theme/slice
```

Or, download the zip package through [GitHub](https://github.com/NHibiki/hexo-theme-slice/archive/master.zip).

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

```yml
menu:
  Home: /#/home
  About: /#/article/about
  Tag: /#/tag
  Category: /#/category
  Link: /#/link
  NHibiki: https://nekoyu.cc
  # Menu Bar

music:
  "The Song's Name":
    subtitle: Infomation you want to add to the song
    src: url to the song
  "The 2nd Song's Name":
    subtitle: Infomation you want to add to the song
    src: url to the song
  # Music List

comment:
  github: # Gitalk
    owner: 
    repo: 
    id: 
    secret: 
  # Comment System

link:
  YuunoHibiki: https://nekoyu.cc
  Slice: https://nhibiki.github.io/slice
  # Links You Want To Add

```

## License

GNU License 3.0
