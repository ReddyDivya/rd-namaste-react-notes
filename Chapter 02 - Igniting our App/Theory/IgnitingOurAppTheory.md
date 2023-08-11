# Chapter 02 - Igniting our App

## Theory Assignment

- What's `npm`?
- What's `Parcel/Webpack`? Why do we need it?
- What is `.parcel-cache`?
- What is `npx`?
- What is the difference between `devDependencies` and `dependencies`?
- What is `Tree Shaking`?
- What is `Hot Module Replacement`?
- List down your `favorite 5 superpowers of Parcel` and `describe any 3` of them in your own words.
- What is `.gitignore`? What should `we add` and `not add` into it?
- What is the `difference` between `package.json` and `package-lock.json`
- Why should I not modify `package-lock.json`?
- What is `node_modules` ? Is it a `good idea to push that on git`?
- What is the `dist` folder?
- What is `browserlists`
- Read about `dif bundlers`: `vite`, `webpack`, `parcel`
- Read about: `^` - `caret` and `~` - `tilde`
- Read about `Script types in html` (MDN Docs)

## Coding
- In your `existing project`
    - initialize `npm` into your `repo`
    - install `react` and `react-dom`
    - `remove CDN` links of `react`
    - `install parcel`
    - `ignite your app` with parcel
    - add scripts for `start` and `build` with `parcel commands`
    - add `.gitignore` file
    - add `browserlists`
    - `build a production version` of your code using `parcel build`


## References:
- Creating your own create-react-app
- Parcel Documentation
- Parcel on Production
- [BrowsersList](https://browserslist.dev/)

## Q What is `npm`?
A:  npm is like a magic toolbox for JavaScript programmers. It helps them find and use ready-made pieces of code (packages) made by other people. These packages can do all sorts of things, like adding special features to websites or making it easier to write code. With npm, programmers can easily get these packages and use them in their own projects without having to build everything from scratch. It's like borrowing tools instead of making them all by yourself.

## Q What's `Parcel/Webpack`? Why do we need it?
A: Webpack is a bundler tool that bundles your web project's files together. It optimizes and organizes JavaScript, CSS, images, and more, making them load faster for websites. It manages file dependencies, converts code for different browsers, and uses plugins to enhance performance. This tool also supports splitting code into smaller parts, loading only what's needed. For development, it offers a server that automatically updates changes. In a nutshell, Webpack streamlines web development by packaging, optimizing, and simplifying the way files are delivered to browsers.

## Q How does Webpack convert code for different browsers?
A: `Webpack` doesn't directly convert code for various browsers, but it works with tools like Babel. `Babel`, integrated into the Webpack setup, transforms modern JavaScript into versions that older browsers can understand. Webpack's configuration instructs it to use a "loader" for Babel, which processes JavaScript files through Babel's transformations based on defined rules. The resulting code, now compatible with different browsers, is bundled by Webpack and ready for deployment. This approach ensures wider browser compatibility by making modern code usable for users with varying browser versions.

## Q What is Babel?
A: `Babel` is a widely used open-source JavaScript compiler. Its primary purpose is to transform modern JavaScript code, which might use the latest language features and syntax (ES6+, ES7, etc.), into an older version that is compatible with older browsers and environments that don't support those newer features.

Babel achieves this by parsing your modern JavaScript code, applying transformations based on specified rules, and generating equivalent code in an older syntax. This process is commonly known as transpilation.

