---
title: 安知鱼主题使用指南
date: 2023-01-15 12:30:00
updated: 2023-01-20 15:45:00
tags:
  - Hexo
  - 主题
  - 安知鱼
  - 教程
categories:
  - 教程指南
keywords: 
  - hexo-theme-anzhiyu
  - 安知鱼主题
  - hexo主题
  - 博客搭建
description: 这是一篇展示安知鱼主题所有功能的文章，包含了丰富的Markdown元素和主题特色功能。
cover: https://pic.imgdb.cn/item/65db650a9f345e8d03c1c061.jpg
comments: true
copyright: true
copyright_author: 安知鱼
copyright_author_href: https://anheyu.com/
copyright_url: https://anheyu.com/
copyright_info: 本文由安知鱼发表，共计 {{words}} 字。本站所有文章除特别声明外，均采用 CC BY-NC-SA 4.0 许可协议，转载请注明来源。
aside: true
---

# 安知鱼主题使用指南

> 欢迎使用安知鱼主题！这篇文章将展示主题支持的各种元素和特性。

## 文本样式

文本可以是**粗体**、*斜体*、~~删除线~~或者`行内代码`。

同时还可以使用一些 HTML 标签来实现特殊效果，比如<span style="color:red">红色文字</span>、<u>下划线文字</u>等。

## 引用

### 普通引用

> 这是一个普通的引用
> 可以有多行
> > 也可以嵌套使用

### 带图标的提示

{% note info %}
这是一条普通提示信息
{% endnote %}

{% note warning %}
这是一条警告提示信息
{% endnote %}

{% note danger %}
这是一条危险提示信息
{% endnote %}

{% note success %}
这是一条成功提示信息
{% endnote %}

## 代码展示

### 行内代码
这是`行内代码`的示例。

### 代码块
以下是一个 JavaScript 代码块：

```javascript
function hello() {
  console.log('Hello, Anzhiyu Theme!');
  return {
    name: 'anzhiyu',
    type: 'hexo-theme'
  };
}

// 调用函数
hello();
```

以下是一个 CSS 代码块：

```css
.anzhiyu-theme {
  display: flex;
  color: #49b1f5;
  background: rgba(73, 177, 245, 0.1);
  border-radius: 8px;
  padding: 10px;
  margin: 10px 0;
}
```

## 列表展示

### 无序列表

* 主题名称：安知鱼
* 主题特点：
  * 简洁美观
  * 功能丰富
  * 优化SEO
  * 响应式设计
* 适合人群：所有博客爱好者

### 有序列表

1. 下载主题
2. 安装主题
   1. 复制到themes目录
   2. 修改_config.yml
3. 配置主题
4. 体验主题

### 任务列表

- [x] 完成主题安装
- [x] 配置基本信息
- [ ] 编写第一篇文章
- [ ] 发布到GitHub Pages

## 表格展示

| 功能     | 描述                   | 是否默认开启 |
|----------|------------------------|--------------|
| 暗色模式 | 支持浅色/深色主题切换  | ✅          |
| 代码高亮 | 支持多种代码高亮方案   | ✅          |
| 图片灯箱 | 点击图片查看大图       | ✅          |
| 搜索功能 | 支持站内文章搜索       | ❌          |
| 评论系统 | 支持多种评论系统       | ❌          |

## 图片展示

### 普通图片

![安知鱼主题预览](https://pic.imgdb.cn/item/65db650a9f345e8d03c1c061.jpg)

### 带描述的图片

{% image https://pic.imgdb.cn/item/65db650a9f345e8d03c1c061.jpg, alt='安知鱼主题预览', '安知鱼主题的首页预览效果' %}

## 链接卡片

### 内部链接卡片



### 外部链接卡片

{% link 安知鱼主题文档, https://docs.anheyu.com/, https://pic.imgdb.cn/item/65db650a9f345e8d03c1c061.jpg %}

## 数学公式

安知鱼主题支持$\KaTeX$数学公式渲染，例如：

行内公式：$E=mc^2$

行间公式：

$$
\frac{1}{(\sqrt{\phi \sqrt{5}}-\phi) e^{\frac{2}{5} \pi}} = 1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}} {1+\frac{e^{-8\pi}} {1+\ldots} } } }
$$

## 时间轴

{% timeline 安知鱼主题发展历程 %}

<!-- timeline 2022-08-20 -->
安知鱼主题首次发布
<!-- endtimeline -->

<!-- timeline 2022-10-15 -->
安知鱼主题 v1.0.0 正式版发布
<!-- endtimeline -->

<!-- timeline 2023-01-30 -->
安知鱼主题 v1.5.0 版本发布，新增许多特性
<!-- endtimeline -->

{% endtimeline %}

## 折叠面板

{% folding 点击查看更多信息 %}

这里是被折叠的内容区域，可以放任何内容，包括代码、图片等。

```python
print("Hello, Anzhiyu Theme!")
```

{% endfolding %}

## 按钮

{% btn 'https://github.com/anzhiyu-c/hexo-theme-anzhiyu', 前往GitHub仓库, 'anzhiyufont anzhiyu-icon-github' %}

{% btn 'https://docs.anheyu.com/', 查看文档, 'anzhiyufont anzhiyu-icon-book', 'outline' %}

## 友情链接

{% flink %}

- class_name: 友情链接
  flink_style: flexcard
  link_list:
    - name: 安知鱼
      link: https://anheyu.com/
      avatar: https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg
      descr: 生活明朗，万物可爱
      siteshot: https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog/anheyu.com.jpg

- class_name: 网站
  flink_style: flexcard
  link_list:
    - name: Hexo
      link: https://hexo.io/zh-tw/
      avatar: https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg
      descr: 快速、简洁且高效的博客框架
      siteshot: https://hexo.io/about/index.html

{% endflink %}

## 引用站点卡片



## 音乐播放器



## YouTube 视频



## Bilibili 视频



## 结语

以上就是安知鱼主题的各种元素展示，如有更多需求，请查看[官方文档](https://docs.anheyu.com/)获取更多信息。

如果你喜欢这个主题，可以前往 [GitHub](https://github.com/anzhiyu-c/hexo-theme-anzhiyu) 为项目点个 Star ⭐
