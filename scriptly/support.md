---
layout: page
title: "Scriptly Support"
description: "Get help with Scriptly, the Mac automation app — troubleshooting, permissions, and how to contact us."
permalink: /scriptly/support/
section: scriptly
show_breadcrumb: false
---

<span class="section-badge">Scriptly</span>

# Scriptly Support

Need help with Scriptly? Here's how to reach us.

## Contact

Email [appscriptly@gmail.com](mailto:appscriptly@gmail.com) with any questions, bug reports, or feature requests. We read every email and aim to reply within a couple of days.

## Common questions

**AI script generation, explanation, or repair isn't available.**
These features require **macOS 26 and an Apple Intelligence–capable Mac** (Apple silicon, with Apple Intelligence enabled in System Settings → Apple Intelligence & Siri). On a Mac that doesn't meet both requirements, the AI features simply won't appear — everything else in Scriptly (all 115+ templates, running, menu bar quick-run, scheduled automations, and Marketplace browsing) works back to macOS 13, no AI required.

**A template's generated script won't run.**
Scriptly copies AppleScript to your clipboard; it doesn't run scripts itself. Paste it into Apple's Script Editor (or your saved location for menu bar quick-run) and run it from there. If an AI-generated script fails to compile, Scriptly repairs it automatically before showing it to you — if something still looks wrong, use the Explain option to see what the script actually does, or email us the template/prompt that produced it.

**Scriptly flagged my script as risky and I don't understand why.**
Every AI-generated or AI-fixed script is checked for known destructive patterns (like broad file deletions) before you're allowed to run it. This is a deliberate safety check, not a bug — review the flagged script (or use Explain) before deciding whether to proceed.

**A script needs folder access I didn't expect.**
Scriptly is sandboxed by macOS, and it also previews what permissions a script will need before you run it — so this shouldn't come as a surprise. The only file access it ever requests is to a folder you explicitly choose via a standard "Choose Folder" dialog; some system-protected folders (like Downloads) additionally need Full Disk Access or Files & Folders access granted in System Settings, which Scriptly will deep-link you to if needed.

**My scheduled automation didn't run on time.**
While Scriptly is open, scheduled jobs are checked roughly every 30 seconds, so timing is tight. While it's closed, a background helper checks about every 15 minutes instead — so a job can run up to 15 minutes later than scheduled if the app wasn't open. Also note: a template needs to have run successfully at least once manually before it can be scheduled, since a scheduled run can't respond to a permission prompt on its own.

**The Marketplace won't load, or I can't publish a template.**
The Marketplace requires being signed in to iCloud on your Mac — check System Settings → [your name] → iCloud. Both browsing and publishing need that sign-in, since the Marketplace is built on Apple's CloudKit.

**I found a template in the Marketplace that's broken, inappropriate, or spam.**
Use the report option on the template's detail screen. Reporting locks the template from public view immediately and flags it for review. If you'd rather not see anything from a particular author again, you can block them directly instead — you don't need to contact us separately for either unless you want to add context.

**Where are my favourites and saved templates stored?**
Locally on your Mac, using the standard macOS preferences system. They're not synced anywhere — including across your own devices — and are removed if you delete the app. Only content you actively publish to the Marketplace ever leaves your Mac.

**Does Scriptly work with the macOS Shortcuts app, or have a widget?**
Not currently — Scriptly is a standalone app with its own template library, menu bar, and scheduler. There's no Shortcuts/App Intents integration or WidgetKit widget today.

## Privacy

See the [Privacy Policy]({{ '/scriptly/privacy/' | relative_url }}) for details on what Scriptly does — and doesn't — collect, including exactly what the optional Marketplace feature sends and to whom.
