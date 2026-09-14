---
layout: app
title: "Scriptly — Mac Automation Guides"
description: "Automate your Mac with 115+ AppleScript templates and AI generation — or write your own script. Guides and tutorials for beginners and scripters alike."
permalink: /scriptly/
section: scriptly
last_modified_at: 2026-09-14
---

<div class="app-hero" style="--tint: {{ site.sections.scriptly.tint }};">
  <div class="app-hero__inner">
    <div>
      <img class="app-hero__icon" width="84" height="84" src="{{ '/assets/images/scriptly/icon.jpg' | relative_url }}" alt="Scriptly app icon">
      <div class="app-hero__text">
        <h1>115+ templates, AI generation, or write your own.</h1>
        <p>Automate your Mac in AppleScript, your way — from the menu bar, on a schedule, or with a plain-English request.</p>
        <div class="app-hero__btn-row">
          <a class="app-hero__badge" href="{{ site.sections.scriptly.app_url }}" target="_blank" rel="noopener">
            <img src="{{ '/assets/images/badges/app-store-badge-white.svg' | relative_url }}" width="120" height="40" alt="Download Scriptly on the App Store">
          </a>
          <span class="app-hero__price">${{ site.sections.scriptly.price }} one-time · macOS 13+</span>
        </div>
      </div>
    </div>
    <div class="app-hero__shot">
      <img src="{{ '/assets/images/scriptly/screenshot-1-hero.jpg' | relative_url }}" width="900" height="562" fetchpriority="high" alt="Scriptly: automate your Mac with 115+ ready-to-run templates, plain-English AI generation, and your own AppleScript">
    </div>
  </div>
</div>

<div class="app-screens">
  <img src="{{ '/assets/images/scriptly/screenshot-2-ai.jpg' | relative_url }}" width="900" height="562" loading="lazy" alt="Scriptly AI: describe an automation in plain English and it writes the AppleScript, with an Explain step before you run anything">
  <img src="{{ '/assets/images/scriptly/screenshot-3-marketplace.jpg' | relative_url }}" width="900" height="562" loading="lazy" alt="Scriptly Community Marketplace: browse and publish templates shared by the community, with report and block-author options">
  <img src="{{ '/assets/images/scriptly/screenshot-4-scheduling.jpg' | relative_url }}" width="900" height="562" loading="lazy" alt="Scriptly scheduled automations: run any template daily, weekly, or once, even while Scriptly is closed">
  <img src="{{ '/assets/images/scriptly/screenshot-5-menubar.jpg' | relative_url }}" width="900" height="562" loading="lazy" alt="Scriptly menu bar: one-click run for your favourite automations, no window required">
  <img src="{{ '/assets/images/scriptly/screenshot-6-privacy.jpg' | relative_url }}" width="900" height="562" loading="lazy" alt="Scriptly privacy: scripts never run themselves, destructive actions are flagged first, sandboxed, no accounts or tracking">
</div>

<div class="wrap wrap--wide" style="padding-top: 20px; padding-bottom: 60px;" markdown="1">

Practical, copy-paste AppleScript guides for people who have never written a line of code — plus a 115+ template library, AI script generation, and scheduled automations for anyone who just wants working automations fast.

## What it does

<div class="feat-grid" style="--app-tint: {{ site.sections.scriptly.tint }};">
  <div class="feat"><div class="k">Templates</div><h3>115+ ready-made automations</h3><p>Across Files, Slack, GitHub, Calendar, Email, Notion, Zoom, and more, plus a Community Marketplace to browse and publish more.</p></div>
  <div class="feat"><div class="k">AI</div><h3>Plain English in, AppleScript out</h3><p>Describe a task and get working AppleScript, or ask Scriptly to explain what any script does before you run it.</p></div>
  <div class="feat"><div class="k">Safety</div><h3>Risky actions flagged first</h3><p>A built-in check reviews every AI-generated script for destructive patterns before you're allowed to run it.</p></div>
  <div class="feat"><div class="k">Menu bar</div><h3>One-click quick-run</h3><p>Launch a favourite automation straight from the menu bar — no window required.</p></div>
  <div class="feat"><div class="k">Scheduling</div><h3>Runs even while closed</h3><p>Daily, weekly, or once — scheduled automations keep running whether or not Scriptly is open.</p></div>
  <div class="feat"><div class="k">Permissions</div><h3>See before you grant</h3><p>A permission preview shows exactly what a script needs, so there are no surprise prompts.</p></div>
  <div class="feat"><div class="k">Private</div><h3>Native Dark Mode, private by default</h3><p>Nothing leaves your Mac except what you choose to publish to the Marketplace.</p></div>
  <div class="feat new"><div class="k">Price</div><h3>${{ site.sections.scriptly.price }} one-time</h3><p>No subscription, no in-app purchases.</p></div>
</div>

## Common questions

<div class="faq">
<details open><summary><h3>Do I need to know how to code?</h3></summary><p>No. Every template is ready to run as-is, and the AI generator writes scripts from a plain-English description — you never have to read or write AppleScript syntax unless you want to.</p></details>
<details><summary><h3>Does Scriptly run scripts automatically?</h3></summary><p>Only if you schedule one yourself. Otherwise, Scriptly writes a script and you run it — from the template view, the menu bar, or a schedule you set. Nothing runs without you choosing to, and every AI-generated script is checked for risky patterns before you're allowed to run it.</p></details>
<details><summary><h3>What's the Marketplace?</h3></summary><p>A searchable library of templates other Scriptly users have published, on top of the 115+ built-in ones. You can report or block any author whose templates shouldn't be there — reports are reviewed by the developer.</p></details>
<details><summary><h3>Does the AI generation need an internet connection?</h3></summary><p>No — script generation and explanation both run on-device using Apple Intelligence. Nothing you type is sent anywhere. These features need macOS 26 and an Apple Intelligence–capable Mac; everything else in Scriptly (templates, running, scheduling, menu bar, Marketplace browsing) works back to macOS 13.</p></details>
<details><summary><h3>Do scheduled automations really run when the app is closed?</h3></summary><p>Yes — a signed, sandboxed background helper checks for due schedules roughly every 15 minutes even with Scriptly fully quit. While the app is open, it checks far more often, so timing is much tighter in the common case.</p></details>
<details><summary><h3>Is there a free tier?</h3></summary><p>No — Scriptly is a ${{ site.sections.scriptly.price }} one-time purchase with everything included. No subscription, no locked features, no in-app purchases.</p></details>
</div>

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
