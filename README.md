# :snowman: Vue Ionicons

> Vue Icon Set Components from Ionic Team

[![License](https://img.shields.io/github/license/mazipan/vue-ionicons.svg?maxAge=3600)](https://github.com/mazipan/vue-ionicons) [![version](https://img.shields.io/npm/v/vue-ionicons.svg?maxAge=60)](https://www.npmjs.com/package/vue-ionicons) ![downloads](https://img.shields.io/npm/dt/vue-ionicons.svg?maxAge=3600)

Design Icons, sourced from the
[Ionicons](https://github.com/ionic-team/ionicons) project.

## Demo

https://mazipan.github.io/vue-ionicons

## Getting started

1. Install the package

    ```bash
    # NPM
    npm install --save vue-ionicons

    # Yarn
    yarn add vue-ionicons
    ```

1. Import the icon, and declare it as a local component:

    ```javascript
    import AlertIcon from 'vue-ionicons/alert.vue'

    components: {
      AlertIcon
    }
    ```

    OR

    Declare it as a global component:

    ```javascript
    import AlertIcon from 'vue-ionicons/alert.vue'

    Vue.component('alert-icon', AlertIcon)
    ```

    > **Note** Icon files are kebab cased, e.g. `alert-circle.vue`. All icon generated can be see in [dist](https://github.com/mazipan/vue-ionicons/tree/master/dist) folder.

1. Then use it in your template code!

    ```html
    <AlertIcon />
    ```

1. You can add props for height and width icon

    ```html
    <AlertIcon w="30px" h="30px"/>
    ```

    > **Note** Default value for height and width is `14px`.

## Development

Checkout with submodule :

```bash
git clone git@github.com:mazipan/vue-ionicons.git
git submodule init
git submodule update
```

Run demo

```bash
npm run dev
```

Build demo

```bash
npm run build
```

Build new distribute icon

```bash
npm run dist
```

## Tips

- Use `resolve` in your Webpack config to clean up the imports:

  ```javascript
  resolve: {
     alias : {
       "icons": path.resolve(__dirname, "node_modules/vue-ionicons")
     },
    extensions: [
      ".vue"
    ]
  }
  ```

  This will give you much shorter and more readable imports, like
  `import Android from 'icons/android'`, rather than
  `import Android from 'vue-ionicons/android.vue'`. Much better!

## Credits

- [Ionicons](https://github.com/ionic-team/ionicons) project by [@Ionic-Team](https://github.com/ionic-team).
- [Vue Material Design Icons](https://gitlab.com/robcresswell/vue-material-design-icons) by [@robcresswell](https://gitlab.com/robcresswell/).

## Contributing

If you'd like to contribute, head to the [contributing guidelines](/CONTRIBUTING.md). Inside you'll find directions for opening issues, coding standards, and notes on development.
