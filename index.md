---
layout: home
title: "Scriptly Blog - Mac Automation Guides"
description: "Learn to automate your Mac with zero coding. AppleScript templates, guides, and tutorials, written for beginners."
---

# Automate Your Mac with Zero Coding

Practical, copy-paste AppleScript guides for people who have never written a line of code — plus templates for anyone who just wants working scripts fast.

## Latest Guides

{% for post in site.posts limit:8 %}
  <div style="margin: 30px 0; padding: 15px; border-left: 4px solid #0969da;">
    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    <p style="color: #666;">{{ post.date | date: "%B %d, %Y" }}</p>
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

[View All Posts →](/scriptly-blog/blog/)

---

## Get Scriptly

[Download from the App Store](https://apps.apple.com/us/app/scriptly-script-automations/id6788839033?mt=12)

- 100+ ready-made automation templates
- AI script generation — describe a task, get working AppleScript
- Private, on-device processing
- Free tier + one-time Pro upgrade
