---
layout: app
title: "Scriptly — Mac Automation Guides"
description: "Automate your Mac with 115+ AppleScript templates and AI generation — or write your own script. Guides and tutorials for beginners and scripters alike."
permalink: /scriptly/
section: scriptly
---

<div class="app-hero" style="--app-accent: {{ site.sections.scriptly.accent }}; --app-accent-dark: {{ site.sections.scriptly.accent_dark }};">
  <div class="app-hero__inner">
    <img class="app-hero__icon" src="{{ '/assets/images/scriptly/icon.jpg' | relative_url }}" alt="Scriptly app icon">
    <div class="app-hero__text">
      <h1>Scriptly</h1>
      <p>115+ templates, AI generation, or write your own — automate your Mac in AppleScript, your way.</p>
      <a class="app-hero__badge" href="{{ site.sections.scriptly.app_url }}">
        <img src="{{ '/assets/images/badges/app-store-badge-white.svg' | relative_url }}" alt="Download on the App Store">
      </a>
    </div>
  </div>
</div>

<div class="app-screens">
  <img src="{{ '/assets/images/scriptly/screenshot-1-hero.jpg' | relative_url }}" alt="Scriptly: automate your Mac with 115+ ready-to-run templates, plain-English AI generation, and your own AppleScript">
  <img src="{{ '/assets/images/scriptly/screenshot-2-ai.jpg' | relative_url }}" alt="Scriptly AI: describe an automation in plain English and it writes the AppleScript, with an Explain step before you run anything">
  <img src="{{ '/assets/images/scriptly/screenshot-3-marketplace.jpg' | relative_url }}" alt="Scriptly Community Marketplace: browse and publish templates shared by the community, with report and block-author options">
  <img src="{{ '/assets/images/scriptly/screenshot-4-scheduling.jpg' | relative_url }}" alt="Scriptly scheduled automations: run any template daily, weekly, or once, even while Scriptly is closed">
  <img src="{{ '/assets/images/scriptly/screenshot-5-menubar.jpg' | relative_url }}" alt="Scriptly menu bar: one-click run for your favourite automations, no window required">
  <img src="{{ '/assets/images/scriptly/screenshot-6-privacy.jpg' | relative_url }}" alt="Scriptly privacy: scripts never run themselves, destructive actions are flagged first, sandboxed, no accounts or tracking">
</div>

<div class="wrap wrap--wide" style="padding-top: 20px; padding-bottom: 60px;" markdown="1">

Practical, copy-paste AppleScript guides for people who have never written a line of code — plus a 115+ template library, AI script generation, and scheduled automations for anyone who just wants working automations fast.

<ul class="app-features">
  <li>115+ ready-made automation templates across Files, Slack, GitHub, Calendar, Email, Notion, Zoom, and more, plus a Community Marketplace to browse and publish more</li>
  <li>AI script generation and explanation — describe a task in plain English, get working AppleScript, or ask Scriptly to explain what any script does before you run it</li>
  <li>Destructive actions are flagged before you run them — a built-in check reviews every AI-generated script for risky patterns first</li>
  <li>Menu bar quick-run — launch a favourite automation with one click, no window required</li>
  <li>Scheduled automations — daily, weekly, or once, running even while Scriptly is closed</li>
  <li>Permission preview — see exactly what a script needs before you grant anything, no surprise prompts</li>
  <li>Native Dark Mode, private by default — nothing leaves your Mac except what you choose to publish to the Marketplace</li>
  <li>{{ site.sections.scriptly.price | prepend: "$" }} one-time purchase, no subscription, no in-app purchases</li>
</ul>

## Is Scriptly right for you?

**Do I need to know how to code?** No. Every template is ready to run as-is, and the AI generator writes scripts from a plain-English description — you never have to read or write AppleScript syntax unless you want to.

**Does Scriptly run scripts automatically?** Only if you schedule one yourself. Otherwise, Scriptly writes a script and you run it — from the template view, the menu bar, or a schedule you set. Nothing runs without you choosing to, and every AI-generated script is checked for risky patterns before you're allowed to run it.

**What's the Marketplace?** A searchable library of templates other Scriptly users have published, on top of the 115+ built-in ones. You can report or block any author whose templates shouldn't be there — reports are reviewed by the developer.

**Does the AI generation need an internet connection?** No — script generation and explanation both run on-device using Apple Intelligence. Nothing you type is sent anywhere. These features need macOS 26 and an Apple Intelligence–capable Mac; everything else in Scriptly (templates, running, scheduling, menu bar, Marketplace browsing) works back to macOS 13.

**Do scheduled automations really run when the app is closed?** Yes — a signed, sandboxed background helper checks for due schedules roughly every 15 minutes even with Scriptly fully quit. While the app is open, it checks far more often, so timing is much tighter in the common case.

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
