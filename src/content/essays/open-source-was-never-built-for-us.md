---
title: "Open Source Was Never Built For Us"
description: "The SSPL debate exposed a gap in open source — between who it was built for and who it now serves. An essay on the licensing crisis facing independent builders."
publishDate: 2026-06-07
---

In 2018, MongoDB built the Server Side Public License (SSPL) specifically to stop cloud providers from hosting their database as a managed service without contributing anything back. OSI reviewed it and said: not open source. The license was too restrictive. It discriminated against a field of endeavor. They called it "fauxpen source" — a word that has since been aimed at every independent builder who's made a similar call.

The field of endeavor was Amazon making billions off your work for free.

I've been sitting with that for a while. Not because I have strong feelings about MongoDB specifically — and I'll come back to why their particular solution was its own problem — but because the same conversation is coming for every independent builder who's made an unconventional licensing choice. Including me. So I want to make the argument I haven't seen made cleanly anywhere: open source as a legal framework was designed for a world that no longer exists, and the people it now structurally disadvantages are exactly the people it claimed to liberate.

---

## Where It Came From

To be fair to the movement, you have to understand what it was fighting.

Richard Stallman launched the GNU Project in 1983. The enemy was clear: proprietary software vendors who locked users into systems they couldn't inspect, modify, or share. Microsoft was the archetype. You bought software, you got a binary, and if you wanted to know how it worked or fix a bug you were out of luck. The Free Software Foundation built a legal weapon — the GPL — specifically calibrated to that threat. Share the source, share the modifications, keep the commons open.

It worked. The ideology spread, the licenses multiplied, and by the late nineties "open source" had become something bigger than a licensing strategy. It became a value system. Transparency. Collaboration. The democratisation of software. These were real values, genuinely held, and the movement that carried them forward changed the industry permanently for the better.

Here's what I want to be clear about before I go further: the early FSF movement was absolutely built for individuals. Stallman was an indie builder before that term existed. The GPL was a tool designed to protect individuals from corporate lock-in. I'm not arguing the movement started wrong. I'm arguing it got stranded by history — that the legal tools forged then now protect a completely different kind of corporate power than the one they were built to fight.

The enemy it was built to fight is mostly gone. Microsoft open sourced .NET. Apple runs on BSD. The war against proprietary lock-in, while not completely won, is not the defining battle of software in 2026.

The battlefield changed. The license didn't.

---

## What Changed

The internet didn't just change how software was distributed. It changed who could extract value from it at scale.

In 1998, the entity most likely to exploit permissively licensed code was a proprietary software vendor who would take it, close the source, and sell it back to you. The GPL was a direct counter to that move — if you distribute modified code, you have to share the source. Brilliant for that threat model.

But the hyperscaler threat model is different. AWS doesn't close your source and sell it back. They run it as a managed service, charge for the infrastructure, and never distribute a modified binary. The GPL's reciprocity clause doesn't trigger. The MIT license's only requirement is attribution. So Amazon Web Services — a company that generated $90.8 billion in revenue in 2023 — can run your open source database, your open source search engine, your open source message queue, and contribute back exactly as much as they feel like contributing. Which is selectively. Strategically. On their timeline.

This isn't abuse. That's the important thing to understand. They are using the license correctly. The system is functioning as designed. The design is just broken for this context.

Here's the mechanism, stated plainly: permissive licensing removes friction for capital. Capital scales faster than contributors. Therefore extraction capacity compounds faster than contribution capacity. The longer this runs, the wider the gap between who benefits from open source software and who sustains it.

The people sustaining it are mostly individual maintainers and small teams. The people benefiting most are the companies with the infrastructure to deploy it at scale. That's not a bug someone introduced. That's the mathematical outcome of a neutral license applied to an unequal economic landscape.

---

## Who It Actually Serves

OSI's open source definition includes a clause that's worth examining: licenses must not discriminate against any field of endeavor. The original intent was to prevent arbitrary restrictions — you can't say "this software may not be used for commercial purposes" or "this software may not be used by defence contractors." Those restrictions would fragment the commons and create a licensing maze nobody could navigate.

Reasonable. For 1999.

But here's what that clause means in practice today: you cannot write a license that distinguishes between a solo developer using your software and AWS running it as a managed service for Fortune 500 companies. Both are fields of endeavor. Both must be treated identically. The license must be neutral.

Neutrality sounds fair. But a neutral rule applied to unequal actors produces unequal outcomes. The entity with the most resources to exploit the code benefits most from a rule that removes all friction on exploitation. That entity is not the indie developer. It is not the small studio. It is not the person in Lagos or Nairobi or Jakarta who can't afford a $500 software licence and needs a free tool that actually works.

The OSI definition, in its commitment to formal neutrality, accidentally optimised for the most capitalised player in every room.

I want to be careful here, because this is where the argument gets misread. The conflict isn't between builders and a disconnected institution. It's a conflict within the building community itself — between builders with different structural dependencies. Maintainers inside large companies, contributors to massive infrastructure projects, developers whose work genuinely benefits from permissive licenses — their interests are real and their position is coherent. The problem isn't that they're wrong. It's that the framework serves their structural position and not ours, and the conversation rarely names that distinction honestly.

Elasticsearch figured this out. HashiCorp figured this out. MongoDB figured this out. Each of them moved to a more restrictive license when they realised the extraction was unsustainable, and each of them got the same response: you're not open source anymore. As if the label were more important than whether the people building the software could continue building it.

---

## The Two Things People Call "Open"

There's a conflation at the centre of this debate that needs to be pulled apart.

When most people say they want software to be open, they mean something specific: they want to be able to read the code, understand how it works, verify it isn't doing something harmful, modify it for their own use, learn from it. That's moral openness. Transparency. Auditability. The thing that actually serves users and builds trust.

What OSI's definition requires — in addition to all of that — is economic openness. No restriction on commercial use. No restriction on who can build a business on top of your work. Full permission for any entity, at any scale, with any resources, to extract whatever value they can.

Those are two different things. They've been bundled together under one word for thirty years and the bundling has served the movement well enough that nobody questioned it. But they can come apart. And for independent builders they need to come apart, because moral openness is what we actually care about and economic openness is what's killing us.

Source-available licenses are what happen when you try to separate them. You keep the source open — readable, auditable, forkable for personal use, available for anyone to learn from. You restrict commercial exploitation. You say: you can see how this works, you can use it, you can build on it for yourself, but you cannot run it as a service and charge for it without contributing back or compensating the people who built it.

OSI calls that not open source. I call it honest.

And before someone raises MongoDB's SSPL as a counterpoint: I'm not defending that specific mechanism. SSPL's viral clause — requiring that any software making your service available must also be open-sourced under SSPL — overreached in ways that spooked even sympathetic readers, because it extended well beyond protecting the original project. What I'm defending is the principle underneath it: that moral openness and economic openness are separable, and that choosing to separate them is not a betrayal of software freedom. MongoDB's implementation was flawed. The instinct was correct.

---

## Why I Made The Choice I Made

I'm building Aestra. It's a DAW — a digital audio workstation — and it's free. Aimed at producers on constrained hardware in emerging markets. The people I'm building it for are in Nairobi, Lagos, Jakarta. They're making music on machines that Ableton won't run on, paying for software they can barely afford, using tools that weren't designed with them in mind.

I source-available licensed it under ASSAL. Under OSI's definition, Aestra is not open source.

Before I explain why, I want to describe what it actually felt like to make that call — because I think this experience is common and almost never talked about.

When I got to the point of choosing a license I did what any builder does: I went through the options. MIT was out immediately — too much exposure, nothing stopping a well-resourced competitor from forking the whole thing and outspending me in the market I was trying to serve. GPL was closer in spirit but doesn't address the actual threat, because my concern isn't binary distribution, it's commercial exploitation of the codebase. AGPL gets closer — it closes the binary distribution loophole — but it still can't distinguish between my users and a well-capitalised competitor. If they run it as a service, they just have to share their modifications, which doesn't stop them from outspending me in the market I'm trying to serve. Commons Clause as an addendum had the right idea but the implementation is legally murky and widely distrusted. Every existing license was either too permissive for my situation or too blunt an instrument.

There was no home for what I was actually trying to do. So I wrote ASSAL (Aestra Studios Source-Available License).

That moment — realising no existing framework fits what you're building and why — is something I suspect a lot of independent builders have hit and most have navigated quietly, either by picking the least-bad existing option or by writing something custom and hoping nobody looks too closely. The fact that we're all solving this privately, in isolation, with no standard to point to, is itself the problem the essay is trying to name.

I'm not protecting Aestra from its users. The producers I'm building it for can read every line of code, understand exactly what it does, fork it for personal use, learn from it, contribute to it. That relationship is completely intact. What I'm protecting against is a well-capitalised competitor reading the codebase, taking what I built, and selling it back to the same producers I'm trying to serve — with a marketing budget I'll never have. That's the threat model. Not AWS in this case, but the principle is identical.

I'm not operating under a different moral framework from the FOSS defender. I'm operating under a different constraint system entirely — one where the survival of the project and the people it serves matters more than satisfying a definition written before the hyperscaler era existed. That's not compromise. That's honesty about what independent building actually looks like.

---

## The Movement We Actually Need

I don't think OSI is the enemy. I think OSI is an institution built for a specific historical moment that is now past its context, defending a definition that made sense when it was written and causes real harm in its current application. That's a different problem than malice, and it requires a different response than anger.

What independent builders need is a licensing and sustainability framework that starts from our threat model, not the one from 1998. The shape of that framework isn't fully clear to me yet — this is a first post, not a manifesto — but a few principles seem obvious:

Moral openness and economic openness should be treated as separable, because they are. A license can guarantee full source transparency, auditability, personal use rights, and the ability to learn and contribute — everything that actually serves users — while still placing narrow, predictable restrictions on commercial exploitation. The restriction should be on the extraction, not the openness.

Scale matters more than field of endeavor. The meaningful distinction isn't "commercial vs non-commercial" — that's too blunt and catches the wrong people. It's something closer to: free for individuals and organisations below a certain revenue threshold, with a clear and fair licensing path above it. Some projects are already experimenting in this direction — Sentry's Functional Source License grants full freedom except to direct competitors, then converts to Apache after two years; HashiCorp's Business Source License for Terraform takes a similar time-limited approach. Neither is perfect. Both are pointing at the right problem. That direction deserves to become a standard, not a collection of one-off experiments.

Standardisation is the only way this works at scale. If every independent builder writes a custom source-available license we fragment the commons in a different way — a compatibility nightmare that makes it hard for a developer anywhere to combine tools without a legal review. The movement needs a small set of standard source-available licenses with narrow, predictable terms. Not an explosion of custom instruments. A handful of well-understood options.

The conversation starts with being honest about what the current framework actually does, who it actually serves, and why the split inside the building community between those it helps and those it harms is so rarely named directly.

---

## Back To MongoDB

MongoDB tried to protect itself from a real problem using a mechanism that overreached. OSI reviewed the mechanism and said: too restrictive, you're out of the club. Both of those things can be true simultaneously. The problem MongoDB identified was real. The solution was flawed. And the conversation that followed almost entirely focused on the flaw while ignoring the problem.

I never tried to join the club. Not because I'm against what it originally stood for — I'm not — but because the club wasn't designed with builders like me in mind. It was designed for a fight I wasn't in, in an era I didn't build in, against an enemy that's mostly been replaced by a different and more diffuse problem that the existing framework has no answer for.

<p class="essay-pull">Open source was never built for us. That's not an accusation. It's just true. And the sooner we're honest about it, the sooner we can build something that is.</p>
