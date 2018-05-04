---
id: tutorial-setup-routing
title: Setup Routing
sidebar_label: Setup Routing
---

With Redux Bundler, routing is handled in redux, so you do not need any heavy routing packages, we can just include a routing bundle in our our redux-bundler.

So lets navigate to our bundles folder and create a new file called `routes.js`

```sh
cd bundles
touch routes.js
```

Using our favorite editor lets add the following code to the routes file.

```js
import { createRouterBundle } from 'redux-bundler'
import Home from '../components/pages/home'

export default createRouterBundle({
  '/': Home
})
```

> Now that we have our routes bundle, we need to add it to the bundle index `bundles/index.js`:

```js
import { composeBundles } from 'redux-bundler'
import routes from './routes'

export default composeBundles(routes)
```

And if we restart our application, we should now see the home page as the default route.

To handle links to other pages we need to go into the layout component and add the `internal-nav-helper`.

Open the file from the project directory: (in your editor)

`components/layout.js`

```js
import navHelper from 'internal-nav-helper'

//....

<main onClick={navHelper(doUpdateUrl)}>
// ...
</main>
```

And now we can go back to the routes.js file and add a couple more routes.

```js
import Resources from '../components/pages/resources'
import Categories from '../components/pages/categories'

export default createRouterBundle({
  '/': Home,
  '/resources': Resources,
  '/categories': Categories
})
```

> You now should be able to click on the sidebar and navigate to resources and categories, and back to home.
