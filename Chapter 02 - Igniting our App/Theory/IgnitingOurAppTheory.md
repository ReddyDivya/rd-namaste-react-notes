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

## Q What is Parcel?
A: `Parcel` is an open-source web application bundler that simplifies the process of building and packaging web projects. Unlike Webpack, it offers a zero-config setup, automatically handling various file types without complex configurations. With built-in asset handling, a fast development server, and automatic dependency resolution, Parcel streamlines web development. It's particularly suited for smaller projects or developers looking for an easy-to-use bundling solution that requires minimal setup.

## Q What is the difference between Webpack and Parcel?
A: `Webpack` and `Parcel` are both tools used for bundling and managing assets in web development, but they have some differences in terms of configuration, features, and use cases:

### Configuration:
`Webpack`: Webpack is highly configurable but requires more setup and configuration through a webpack.config.js file. This gives developers greater control over how assets are processed, optimized, and bundled.
`Parcel`: Parcel follows a zero-config approach, meaning it requires minimal to no configuration. It automatically detects and bundles assets without extensive setup, making it simpler for beginners.

### Ease of Use:
`Webpack`: While powerful, Webpack's configurability can be overwhelming for newcomers, and setting up loaders, plugins, and optimization can be time-consuming.
`Parcel`: Parcel is designed for simplicity and ease of use. Its zero-config approach makes it quick to start with and is well-suited for small to medium projects without complex requirements.

### Features:
`Webpack`: Webpack is extremely versatile and offers more advanced features like code splitting, dynamic imports, and fine-grained control over asset loading.
`Parcel`: Parcel offers built-in features like a fast development server, automatic dependency resolution, and support for various asset types out of the box, which makes it great for rapid development.

### Customization:
`Webpack`: The high level of customization in Webpack allows developers to tailor the build process to specific needs, but it can be more complex to set up and configure.
`Parcel`: While it's less customizable than Webpack, Parcel's simplicity and zero-config approach make it suitable for projects where rapid development and simplicity are priorities.

### Use Cases:
`Webpack`: Best suited for larger projects with complex requirements, multiple entry points, and intricate build processes that demand fine-tuning.
`Parcel`: Ideal for smaller to medium-sized projects, prototypes, or beginners who want a straightforward setup without delving into extensive configuration.

 Webpack offers more control and customization, while Parcel prioritizes simplicity and speed.

