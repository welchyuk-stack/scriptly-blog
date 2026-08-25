---
layout: post
title: "How to Automate Email Organization on Mac (Zero Coding Required)"
date: 2026-08-19
categories: [email, automation, beginner-friendly]
tags: [AppleScript, email, Mail.app, templates]
author: Luke Welch
excerpt: "Stop spending 30 minutes a week filing emails by hand. Automatically sort messages into folders based on sender — works with Apple Mail."
---

# How to Automate Email Organization on Mac

**The problem:** Invoices, newsletters, and work emails all land in one inbox. Sorting them manually eats up real time every week.

**The fix:** A short AppleScript that automatically moves emails into folders based on who sent them — running in seconds instead of minutes.

## Before You Start

This works with **Apple Mail** (not Gmail's web interface, though Mail can connect to Gmail accounts). You'll need:

1. Mail.app set up with your account
2. A destination folder (mailbox) already created — e.g. "Billing"

To create a mailbox: open Mail → **Mailbox** menu → **New Mailbox** → name it (e.g. "Billing") → choose "On My Mac" or your account.

## The Script

```applescript
tell application "Mail"
    set sourceMailbox to inbox
    set targetMailbox to mailbox "Billing"

    set matchingMessages to (every message of sourceMailbox whose sender contains "stripe.com")

    repeat with aMessage in matchingMessages
        move aMessage to targetMailbox
    end repeat
end tell
```

**What this does:** Looks at every message in your inbox, finds ones where the sender's address contains "stripe.com", and moves each one into your "Billing" mailbox.

## How to Use It

1. Open **Script Editor** (Applications → Utilities)
2. Paste the script above
3. Change `"Billing"` to your actual mailbox name
4. Change `"stripe.com"` to the sender you want to filter (a company domain, or a full email address)
5. Click **Run** (▶)
6. macOS will ask for permission to control Mail — click **OK**

Your matching emails move instantly.

## Filtering by Multiple Senders

Want to catch several senders at once? Use `or`:

```applescript
tell application "Mail"
    set targetMailbox to mailbox "Billing"
    set matchingMessages to (every message of inbox whose sender contains "stripe.com" or sender contains "paypal.com")

    repeat with aMessage in matchingMessages
        move aMessage to targetMailbox
    end repeat
end tell
```

## Filtering by Subject Instead of Sender

```applescript
tell application "Mail"
    set targetMailbox to mailbox "Receipts"
    set matchingMessages to (every message of inbox whose subject contains "Receipt")

    repeat with aMessage in matchingMessages
        move aMessage to targetMailbox
    end repeat
end tell
```

## Running It Automatically (No Manual Clicking)

To run this every morning without opening Script Editor:

1. In Script Editor: **File → Export**
2. **File Format:** Application
3. Save as `EmailOrganizer.app`
4. Open **Automator** → **File → New → Calendar Alarm**
5. Search for and add the **"Run AppleScript"** action, paste your script in
6. Save — this creates a Calendar event that triggers the script
7. Set the event to repeat daily at your preferred time

Now your inbox files itself before you've had coffee.

## Troubleshooting

**"Mail got an error: Can't get mailbox 'Billing'"**
The mailbox doesn't exist yet, or the name doesn't match exactly (check capitalization). Create it via Mail → Mailbox → New Mailbox first.

**Nothing happens, no error**
Your filter condition didn't match anything — double check the sender/subject text is exactly right (it's case-sensitive for exact matches, though `contains` is fairly forgiving with partial text).

**"Not authorized to send Apple events to Mail"**
Go to **System Settings → Privacy & Security → Automation**, find Script Editor (or your exported app), and enable Mail.

## Want More Filters Without Writing Them Yourself?

[Scriptly](https://apps.apple.com/us/app/scriptly-script-automations/id6788839033?mt=12) includes ready-made email templates (auto-archive, flag, forward, and more) — or describe your rule in plain English and it writes the script for you.

## Related Guides

- [Archive Old Emails and Files Automatically](/scriptly-blog/archive-old-files-automatically/)
- [10 AppleScript Templates You Can Copy-Paste](/scriptly-blog/applescript-templates/)
- [Fix Common AppleScript Errors](/scriptly-blog/fix-common-applescript-errors/)
