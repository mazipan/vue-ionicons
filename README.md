# vue-ionicons
:snowman: Vue Icon Set Components from Ionic Team

Design Icons, sourced from the
[Ionicons](https://github.com/ionic-team/ionicons) project.


## Demo
https://mazipan.github.io/vue-ionicons (under development)


## Getting started

1. Install the package

    ```bash
    $ npm install --save vue-ionicons
    ```

    OR

    ```bash
    $ yarn add vue-ionicons
    ```

2. Import the icon, and declare it as a local component:

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

    Vue.component('menu-icon', AlertIcon)
    ```

    > **Note** Icon files are kebab cased, e.g. `alert-circle.vue`, and
    > their default name has `-icon` appended e.g. `alert-circle-icon`.

3. Then use it in your template code!

    ```html
    <menu-icon />
    ```

## Icons

A list of the icons can be found at the [Ionicons Repository](https://github.com/ionic-team/ionicons)

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

+ [Ionicons](https://github.com/ionic-team/ionicons) project by [@Ionic-Team](https://github.com/ionic-team).
+ [Vue Material Design Icons](https://gitlab.com/robcresswell/vue-material-design-icons) by [@robcresswell](https://gitlab.com/robcresswell/).
