---
layout: page
title: "Blog"
description: "Every MacBound guide in one place: AppleScript automation with Scriptly, Windows-to-Mac switching help, and Mac screenshot tips from SnipClip."
permalink: /blog/
wide: true
last_modified_at: 2026-10-12
---

# Blog

{% assign all_posts = site.posts | concat: site.windows_to_mac | concat: site.snipclip | sort: "date" | reverse %}

<div class="ref-toolbar no-print">
  <button type="button" class="btn is-active" aria-pressed="true" data-blog-filter="all">All</button>
  <button type="button" class="btn" aria-pressed="false" data-blog-filter="scriptly">Scriptly</button>
  <button type="button" class="btn" aria-pressed="false" data-blog-filter="windows_to_mac">Windows → Mac</button>
  <button type="button" class="btn" aria-pressed="false" data-blog-filter="snipclip">SnipClip</button>
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

<script src="{{ '/assets/js/blog-filter.js' | relative_url }}" defer></script>
