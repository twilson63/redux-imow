---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

Getting to know Redux and Redux Bundler

This site is more of a guide to expand on the concepts of redux and redux bundler and how you can leverage these tools to tame one of the hardest concepts in application development: Application State Management.

## What is Application State Management?

Application State is the application data at a given point in time, this data is what provides content to your user experience. You data is constantly changing and
your application has to track with these changes and then react to adjust the user
presentation layer. Separating your state from your user presentation layer provides several benefits to your application design and development.

* code organization
* finding bugs
* unit testing
* refactoring

## Why Redux?

Why should we look to using redux for application state management? There are several options to manage state and when looking at these options you need to consider the trade offs. There is no perfect solution and you have to have knowledge of the pros and cons of each. Redux gives you a lot of flexibility and leverages simplicity over complexity. But it requires discipline. And it gives you predictable and testable outcomes.

This simply means that it puts a lot of responsibility in your hands, but gives you some common patterns and concepts to you use to provide the right path forward.

It is light weight and not a lot of code which reduces its bug surface. It does employ conventions more that configuration, which requires some learning up front, but you will find while difficult, the learning curve is not long.

## What is Redux?

Redux is a very simple library that provides some powerful concepts and ideas, which can be very challenging to understand and use at first. But when you grok the concepts, you will see how leveraging redux you can fight a lot of complexity.

Basically, Redux enforces concepts like immutability and pure functions to serve as an implementation to the FLUX pattern. Some call this a uni-directional flow. When thinking about how an application's state flows you can think of it in terms of a movie projector, where you have a stream of images or film feeding through the projector's light which shows each image one frame at a time. By showing frames at 60 frames per second you get motion. Our presentation layer is the projector taking our data or image and presenting it to the user and as things change we take the new data and presenting it to the user, when an event occurs this event may result in a data change and the cycle continues.

> Redux gives you a simple pattern to make your objects immutable in javascript and provides a predictable way to process change requests with notifications and a simple way to observe changes.

[Understanding Redux Concepts](concepts.md)
