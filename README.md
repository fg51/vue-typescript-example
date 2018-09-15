# vue-typescrit-example
example vue.js with typescript


## .vue

* template: html
* script: js
* style: css


## router.ts
set component to path.

```javascript
{
  path: '/foo',
  name: 'foo',
  component: () => import('./views/foo.vue'),
}
```


## App.vue
App.vue is base format. (ex. header, footer)

"main.ts" depends on "App.vue"
