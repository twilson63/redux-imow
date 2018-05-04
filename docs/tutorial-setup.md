---
id: tutorial-setup
title: Setup
sidebar_label: Setup
---

In this tutorial we will building a veteran support application, this application will consist of resources and categories for resources to help veterans find support networks.

Getting setup, we will first start with cloning a repository from github. This repository contains all of the react components and material design stylesheets, but does not have a redux implementation. The application was started with `create-react-app`.

```sh
git clone https://github.com/twilson63/redux-bundler-tutorial.git
cd redux-bundler-tutorial
yarn
```

Once we have everything loaded, we want to install the redux bundler and the redux bundler react packages.

```sh
yarn add redux-bundler redux-bundler-react
```

We also want to install a small module that will help handle our link routing.
`internal-nav-helper`, this little module will intercept all anchor tag clicks and determine if it is an internal click event or external click event and if it is internal it will prevent default and dispatch the action to redux, if it is external it will allow the event to propagate.

```sh
yarn add internal-nav-helper
```

You should be able to startup the app and see our starting point.

```sh
yarn start
```
