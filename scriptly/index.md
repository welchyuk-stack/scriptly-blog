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

Practical, copy-paste AppleScript guides for people who have never written a line of code — plus a template library and AI script generation for anyone who just wants working automations fast.

<ul class="app-features">
  <li>100+ ready-made automation templates, browsable in the in-app Marketplace</li>
  <li>AI script generation — describe a task in plain English, get working AppleScript</li>
  <li>Automatic script repair — Scriptly checks and fixes generated scripts before you see them</li>
  <li>Menu bar quick-run — launch a favourite automation without opening the app</li>
  <li>Scheduled automations — set a template to run on a recurring schedule</li>
  <li>Private, on-device processing — nothing leaves your Mac</li>
  <li>{{ site.sections.scriptly.price | prepend: "$" }} one-time purchase, no subscription, no in-app purchases</li>
</ul>

## Is Scriptly right for you?

**Do I need to know how to code?** No. Every template is ready to run as-is, and the AI generator writes scripts from a plain-English description — you never have to read or write AppleScript syntax unless you want to.

**Does Scriptly run scripts automatically?** No, by design. Scriptly writes and copies AppleScript to your clipboard; you run it yourself in Apple's Script Editor (or via the menu bar quick-run once you've saved it). The app has no automation or accessibility entitlement — it can't act on your Mac without you choosing to run something.

**What's the Marketplace?** A browsable library of templates other Scriptly users have published, on top of the 100+ built-in ones — searchable by category, so you're rarely starting from a blank script.

**Does the AI generation need an internet connection?** No — script generation and repair both run on-device using Apple Intelligence. Nothing you type is sent anywhere.

**Is there a free tier?** No — Scriptly is a {{ site.sections.scriptly.price | prepend: "$" }} one-time purchase with everything included. No subscription, no locked features, no in-app purchases.

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
