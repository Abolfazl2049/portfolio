---
title: "Building an Ephemeral Anonymous Chat App with Next.js, WebRTC, and Socket.IO"
description: "Building an Ephemeral Anonymous Chat App with Next.js, WebRTC, and Socket.IO"
date: "2026-1-6"
tags: ["webrtc", "webdev", "express", "nextjs"]
author: "Abolfazl Shahini"
image: "/img/blog/ephem-chat-logo.png"
draft: false
---

Hello 👋 I’d be happy if you check out my new mini project: [website](http://my-ephem-chat.vercel.app/) Ephem Chat = Ephemeral Chat = temporary conversations

In short, the app flow works like this: you enter with just a name. You can choose whether or not to save your account. If you enable this option, the next time you visit the website you can continue with the same user; otherwise, your account exists only for that session.

In addition, a token is generated for each user, which you can save and later retrieve if you want. That said, if you don’t log into your account for 30 days, your session gets deleted. The same logic applies to “enclaves,” which I’ll explain next.

This authentication and account system is honestly very loose and informal—but that’s exactly how I wanted it to be, and I enjoyed building it that way.

So what’s the core logic of the app?

On the main/home page, you’ll see a big “Search” button. When you click it, the system looks for a match among users who are currently searching.

Once a match is found, a room—what I’ve chosen to call an enclave—is created for you and your match.

Inside this room, you can send messages, or what I’ve called dispatches. I intentionally chose these names for this project, just for creativity.

You can also share an enclave with other users, meaning you can have real-time group chats. Any user who joins an enclave is effectively registered to it, and it appears in their list of enclaves. That’s it.

From a technical perspective, the project is also interesting, because it’s a combination of three protocols: REST API, Engine.IO (Socket.IO), and WebRTC.

User matching and WebRTC signaling are handled via Socket.IO, chat is done through WebRTC data channels, and everything else is handled via REST.

Also, this was my first project built with Next.js, and the backend is implemented with Express.

Overall, I gained a lot of interesting experience from this project. I hope you like it as well. Thank you for your attention.

source front : [link](https://github.com/Abolfazl2049/ephem-chat-frontend) backend : [link](https://github.com/Abolfazl2049/ephem-chat-backend)
