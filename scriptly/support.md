---
layout: page
title: "Scriptly Support"
description: "Get help with Scriptly, the Mac automation app — troubleshooting, permissions, and how to contact us."
permalink: /scriptly/support/
show_breadcrumb: false
sitemap: false
noindex: true
last_modified_at: 2026-10-23
---

<p class="retired-note"><strong>Scriptly is no longer sold.</strong> This page stays online for people who already have Scriptly installed.</p>


<span class="section-badge">Scriptly</span>

# Scriptly Support

Need help with Scriptly? Here's how to reach us.

## Contact

Email [appscriptly@gmail.com](mailto:appscriptly@gmail.com) with any questions, bug reports, or feature requests. We read every email and aim to reply within a couple of days.

## Common questions

**Which version of macOS do I need?**
Scriptly requires **macOS 14 or later**. All 115 templates, running, scheduling, menu bar quick-run and the Marketplace work on any supported Mac; only the optional AI features have extra requirements (below).

**The AI features (Generate with AI, Explain, Fix) aren't available.**
These run on-device and require **macOS 26 and a Mac with Apple Intelligence** (Apple silicon, with Apple Intelligence turned on in System Settings → Apple Intelligence & Siri). If Apple Intelligence is still finishing setup, try again shortly. On a Mac that doesn't meet these requirements, Scriptly tells you why the AI features are unavailable — everything else works normally.

**I described a task but Scriptly didn't find a template.**
Generate with AI matches your description to one of Scriptly's built-in templates and fills it in for you. If nothing matches, try describing it another way, or browse the library by category.

**A script won't run, or fails with an error.**
Press Run in Scriptly to run a script directly — the first time a script controls another app, macOS asks you to allow it. Follow the step-by-step setup instructions shown with each automation. On a Mac with Apple Intelligence, use Fix to diagnose the failed script and get a suggested correction, or Explain to see what it actually does. If you're still stuck, email us the template name and the error message.

**Scriptly asked me to confirm before running a script.**
Scripts that could change or delete files (like broad file deletions) ask for confirmation before they run, and the prompt lists what was flagged. This is a deliberate safety check, not a bug — review the script (or use Explain) before choosing Run Anyway.

**A script needs folder access I didn't expect.**
Scriptly is sandboxed by macOS, and it also previews what permissions a script will need before you run it — so this shouldn't come as a surprise. The only file access it ever requests is to a folder you explicitly choose via a standard "Choose Folder" dialog; some system-protected folders (like Downloads) additionally need Full Disk Access or Files & Folders access granted in System Settings, which Scriptly will deep-link you to if needed.

**My scheduled automation didn't run on time.**
While Scriptly is open, scheduled jobs run on time. While it's closed, a lightweight background helper checks every 15 minutes and catches up on anything that's due — so a job can run up to 15 minutes later than scheduled if the app wasn't open. Scheduled automations also start as soon as Scriptly opens, and a job never runs twice. Also note: before you can schedule a template, run it once (or use Grant Permissions), since a scheduled run can't respond to a permission prompt on its own.

**The Marketplace won't load, or I can't publish a template.**
The Marketplace requires being signed in to iCloud on your Mac — check System Settings → [your name] → iCloud. Both browsing and publishing need that sign-in, since the Marketplace is built on Apple's CloudKit.

**Is it safe to download Marketplace templates?**
Every shared script is scanned for risky commands, and if a template is flagged, Scriptly tells you what it found and asks before you download it. As with any script, read the description (or use Explain) before running it.

**I found a template in the Marketplace that's broken, inappropriate, or spam.**
Use the report option on the template's detail screen. Reporting locks the template from public view immediately and flags it for review. If you'd rather not see anything from a particular author again, you can block them directly instead — you don't need to contact us separately for either unless you want to add context.

**Where are my favourites and saved templates stored?**
Locally on your Mac, using the standard macOS preferences system. They're not synced anywhere — including across your own devices — and are removed if you delete the app. Only content you actively publish to the Marketplace ever leaves your Mac.

**Does Scriptly work with the macOS Shortcuts app, or have a widget?**
Not currently — Scriptly is a standalone app with its own template library, menu bar, and scheduler. There's no Shortcuts/App Intents integration or WidgetKit widget today.

## Privacy

See the [Privacy Policy]({{ '/scriptly/privacy/' | relative_url }}) for details on what Scriptly does — and doesn't — collect, including exactly what the optional Marketplace feature sends and to whom.
