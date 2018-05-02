---
id: bundles
title: Redux Bundles
sidebar_label: Bundles
---

Ok, so there are a lot of moving parts in redux and each piece is pure, predictable and testable which provides simplicity. But it can be extremely painful to manage all of these moving parts over medium to large applications with different domain models. Also there are several things that can be abstracted to leverage common patterns, like routing, cacheing, async api's, and more. In other words there is a lot of potential for reusability of application logic.

One of the challenge is to not introduce too much complexity to get the benefit of reusability. This is where Redux-Bundler really shines.

Redux-Bundler is a tool that wraps around redux and provides all of the redux pieces you are familiar with and adds the ability to create composable bundles of redux functionality, this means you get all of the benefits of redux without having to create a lot of files and a lot of redundant code.

Lets explore:

* Bundle Specification
* Use Cases
* AppTime Bundle
* Cache Bundle
* Routing Bundle
* Enabling Debugging
* Testing Examples
