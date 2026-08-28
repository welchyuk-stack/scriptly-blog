---
layout: app
title: "Scriptly — Mac Automation Guides"
description: "Learn to automate your Mac with zero coding. AppleScript templates, guides, and tutorials, written for beginners."
permalink: /scriptly/
section: scriptly
---

<div class="app-hero" style="--app-accent: {{ site.sections.scriptly.accent }}; --app-accent-dark: {{ site.sections.scriptly.accent_dark }};">
  <div class="app-hero__inner">
    <img class="app-hero__icon" src="{{ '/assets/images/scriptly/icon.jpg' | relative_url }}" alt="Scriptly app icon">
    <div class="app-hero__text">
      <h1>Scriptly</h1>
      <p>Templates + AI, zero coding — automate your Mac with plain-English AppleScript.</p>
      <a class="app-hero__badge" href="{{ site.sections.scriptly.app_url }}">
        <img src="{{ '/assets/images/badges/app-store-badge-white.svg' | relative_url }}" alt="Download on the App Store">
      </a>
    </div>
  </div>
</div>

<div class="app-screens">
  <img src="{{ '/assets/images/scriptly/screenshot-1-hero.jpg' | relative_url }}" alt="Scriptly: Automate your Mac, no code required — 100 ready-to-run templates">
  <img src="{{ '/assets/images/scriptly/screenshot-2-browse.jpg' | relative_url }}" alt="Scriptly template library, browsing by category">
  <img src="{{ '/assets/images/scriptly/screenshot-3-build.jpg' | relative_url }}" alt="Scriptly script builder">
  <img src="{{ '/assets/images/scriptly/screenshot-4-use.jpg' | relative_url }}" alt="Scriptly in use">
</div>

<div class="wrap wrap--wide" style="padding-top: 20px; padding-bottom: 60px;" markdown="1">

Practical, copy-paste AppleScript guides for people who have never written a line of code — plus templates for anyone who just wants working scripts fast.

<ul class="app-features">
  <li>100+ ready-made automation templates</li>
  <li>AI script generation — describe a task, get working AppleScript</li>
  <li>Runs directly from the app, nothing to install separately</li>
  <li>Private, on-device processing — nothing leaves your Mac</li>
  <li>Free tier + one-time Pro upgrade, no subscription</li>
</ul>

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

[View All Posts →](/blog/)

</div>
