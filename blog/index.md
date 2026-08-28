---
layout: page
title: "Blog"
description: "All posts across MacBound — Scriptly, Windows→Mac, and SnipClip."
permalink: /blog/
wide: true
---

# Blog

{% assign all_posts = site.posts | concat: site.windows_to_mac | concat: site.snipclip | sort: "date" | reverse %}

<div class="ref-toolbar no-print">
  <button class="btn is-active" data-blog-filter="all">All</button>
  <button class="btn" data-blog-filter="scriptly">Scriptly</button>
  <button class="btn" data-blog-filter="windows_to_mac">Windows → Mac</button>
  <button class="btn" data-blog-filter="snipclip">SnipClip</button>
</div>

<div id="blog-list">
{% for post in all_posts %}
  <div class="post-list-item" data-section="{{ post.section }}">
    <span class="section-badge">{{ site.sections[post.section].name }}</span>
    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    <p class="meta">{% if post.collection == "posts" and post.date %}{{ post.date | date: "%B %d, %Y" }}{% endif %}</p>
    <p>{{ post.excerpt | default: post.description }}</p>
  </div>
{% endfor %}
</div>

<script>
(function () {
  var buttons = document.querySelectorAll('[data-blog-filter]');
  var items = document.querySelectorAll('#blog-list [data-section]');
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');
      var filter = btn.dataset.blogFilter;
      items.forEach(function (item) {
        item.style.display = (filter === 'all' || item.dataset.section === filter) ? '' : 'none';
      });
    });
  });
})();
</script>
