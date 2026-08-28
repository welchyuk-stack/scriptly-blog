---
layout: page
title: "Scriptly — Mac Automation Guides"
description: "Learn to automate your Mac with zero coding. AppleScript templates, guides, and tutorials, written for beginners."
permalink: /scriptly/
section: scriptly
wide: true
show_breadcrumb: false
---

<span class="section-badge">Scriptly</span>

# Automate Your Mac with Zero Coding

Practical, copy-paste AppleScript guides for people who have never written a line of code — plus templates for anyone who just wants working scripts fast.

## Latest Guides

{% for post in site.posts limit:8 %}
  <div class="post-list-item">
    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    <p class="meta">{{ post.date | date: "%B %d, %Y" }}</p>
    <p>{{ post.excerpt }}</p>
    <a href="{{ post.url | relative_url }}">Read More →</a>
  </div>
{% endfor %}

---

## Popular Topics

- **Email Automation** — Archive, organize, and filter emails automatically
- **File Management** — Batch rename, sort, and organize files
- **Photo Organization** — Batch rename by date, clean up camera exports
- **AppleScript Reference** — Syntax, templates, and troubleshooting

[View All Posts →](/blog/)

---

## Get Scriptly

[Download from the App Store]({{ site.sections.scriptly.app_url }})

- 100+ ready-made automation templates
- AI script generation — describe a task, get working AppleScript
- Private, on-device processing
- Free tier + one-time Pro upgrade
