---
id: actions 
title: Redux Actions 
sidebar_label: Actions
---

Actions are a standard javascript object that has two keys, a `type` and a `payload`. The naming of these keys is not required, but it is a common convention and you can leverage a lot of re-usable patterns by sticking with these conventions.

```json
{
  "type": "RESOURCES_FETCH_FINISHED",
  "payload": [
    { "id": 1, "name": "Resource 1" },
    { "id": 2, "name": "Resource 2" }
  ]
}
```

## Common Practices

> Every action should have a `type` key and `payload` is optional.
