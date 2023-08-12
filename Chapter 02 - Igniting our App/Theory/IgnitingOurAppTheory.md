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

## Q What is a `bundler`?
A: A `bundler` is a tool used in web development to combine multiple separate files, such as JavaScript, CSS, and images, into a smaller number of optimized files. These optimized files, known as bundles, are designed to be more efficient for browsers to load, improving the performance of web applications.
- Bundlers help manage dependencies between files, ensuring that they are included in the correct order and that any redundant code is eliminated. This process not only speeds up the loading of web pages but also aids in organizing and maintaining a project's codebase.
- In addition to bundling, many modern bundlers offer features like minification (removing unnecessary characters to make files smaller), transpilation (converting newer code syntax to older versions for wider compatibility), and code splitting (breaking code into smaller chunks to load only what's needed for each page).

Webpack, Parcel, and Rollup are examples of popular bundlers used in web development.

## Q What's `Webpack`? Why do we need it?
A: Webpack is a bundler tool that bundles your web project's files together. It optimizes and organizes JavaScript, CSS, images, and more, making them load faster for websites. It manages file dependencies, converts code for different browsers, and uses plugins to enhance performance. This tool also supports splitting code into smaller parts, loading only what's needed. For development, it offers a server that automatically updates changes. In a nutshell, Webpack streamlines web development by packaging, optimizing, and simplifying the way files are delivered to browsers.

## Q How does `Webpack convert code for different browsers`?
A: `Webpack` doesn't directly convert code for various browsers, but it works with tools like Babel. `Babel`, integrated into the Webpack setup, transforms modern JavaScript into versions that older browsers can understand. Webpack's configuration instructs it to use a "loader" for Babel, which processes JavaScript files through Babel's transformations based on defined rules. The resulting code, now compatible with different browsers, is bundled by Webpack and ready for deployment. This approach ensures wider browser compatibility by making modern code usable for users with varying browser versions.

## Q What is `Babel`?
A: `Babel` is a widely used open-source JavaScript compiler. Its primary purpose is to transform modern JavaScript code, which might use the latest language features and syntax (ES6+, ES7, etc.), into an older version that is compatible with older browsers and environments that don't support those newer features.

Babel achieves this by parsing your modern JavaScript code, applying transformations based on specified rules, and generating equivalent code in an older syntax. This process is commonly known as transpilation.

## Q What is `Parcel`?
A: `Parcel` is an open-source web application bundler that simplifies the process of building and packaging web projects. Unlike Webpack, it offers a zero-config setup, automatically handling various file types without complex configurations. With built-in asset handling, a fast development server, and automatic dependency resolution, Parcel streamlines web development. It's particularly suited for smaller projects or developers looking for an easy-to-use bundling solution that requires minimal setup.

## Q What is the `difference between Webpack and Parcel`?
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

## Q What is `.parcel-cache`?
A: The .parcel-cache directory is created by the Parcel bundler when it processes and builds your web project. It serves as a cache storage location to optimize the performance of subsequent builds.
- When you run Parcel to bundle your project, it analyzes your source files, applies transformations (like minification and code splitting), and generates output files in a distribution directory. The .parcel-cache directory stores intermediate files, cached assets, and compiled code from previous builds. This helps to speed up future builds by reusing previously processed content, as opposed to reprocessing everything from scratch.
- The cache directory is automatically managed by Parcel, and you generally don't need to interact with it directly. However, in case you encounter any issues with your builds, clearing the cache can sometimes resolve certain problems.
- Remember that clearing the cache might lead to slightly longer build times for the first build after cache deletion, but subsequent builds should benefit from improved performance due to the cached data.

## Q What is `npx`?
A: `npx` is a command-line tool that comes with npm (Node Package Manager) and is used to run Node.js packages. It's often used to execute packages that are not globally installed on your system. The primary purpose of npx is to make it easier to run packages without having to install them globally or clutter your project's dependencies.
### Install Parcel (Optional): 
If you haven't already installed Parcel globally or locally in your project, you can skip this step. When using npx, you don't need to have Parcel installed globally or listed as a dependency in your package.json.

### Run Parcel with npx:
Open your terminal and navigate to the root directory of your project. 
Run the following command using npx and specify parcel as the package name:
```
npx parcel index.html
```
Replace index.html with the entry file of your project, which is the HTML file that serves as the starting point for your application.

### Parcel Processing:
Parcel will start processing your project, bundling and optimizing your files. It will automatically detect dependencies and apply the necessary transformations.

### View the Result:
Once Parcel has finished bundling your project, it will provide you with a local development server address (usually `http://localhost:1234` by default). Open this address in your web browser to see your bundled application.

## Q What is the difference between `devDependencies` and `dependencies`?
A: `dependencies` 
Packages listed under dependencies are the ones that your application needs to run correctly in production. These are the dependencies that your application relies on to function as intended when it's in the hands of end-users. They are necessary for the core functionality of your application.
**Example**: If you're building a web app with React, React itself would be listed under dependencies because it's essential for your app to work properly.

`devDependencies`
Packages listed under devDependencies are used for development purposes only. They are tools, libraries, or other packages that help you during the development process, such as build tools, and testing frameworks. These dependencies are not required for your application to run in a production environment and won't be included when your application is deployed.
**Example**: A testing library like Jest or a development server like Parcel would be listed under devDependencies because they are used for development and testing but are not necessary for the deployed application.

The distinction between dependencies and devDependencies allows you to separate what's essential for your application to function (production) from what's necessary for your development workflow

## Q What is `Tree Shaking`?
A: `Tree shaking` is a technique used in modern JavaScript build tools to eliminate unused code from your final bundle. It's a process that helps optimize the size of your JavaScript bundles, resulting in smaller file sizes and faster loading times for your web applications. The term "tree shaking" comes from the idea of "shaking out" or removing dead branches from a tree. In the context of code, it refers to identifying and removing parts of your codebase that are never used or referenced, effectively pruning away unnecessary portions.
- During the build process, the tool (like Webpack, Parcel) analyzes your JavaScript code and its dependencies, creating a "dependency graph" that represents the relationships between different modules.

## Q What is `Hot Module Replacement`?
A: `HMR` is a technique that allows developers to make changes to their codebase and see those changes instantly reflected in the running application without requiring a full page refresh or a manual reload of the browser.

`Change Detection`: When you make changes to your code (such as modifying a JavaScript file or updating a CSS style), the HMR system detects these changes.

`Patch and Apply`: Instead of reloading the entire page or application, HMR takes the modified module (JavaScript, CSS, or other assets) and patches the changes into the running application in real-time.

`Preserve State`: HMR is designed to preserve the application's current state. This means that if you're in the middle of a certain interaction or have some data stored in memory, those states will remain intact even after applying the code changes.

`Selective Updates`: HMR is capable of updating only the changed modules, which helps in reducing the need for a full page reload and speeds up the development process.

## Q Does Parcel bundler have HMR?
A:  Parcel is another popular bundler that comes with built-in Hot Module Replacement (HMR) functionality. Parcel is designed to be a zero-config bundler, which means you can set up a project without needing an extensive configuration file like you might with Webpack.
To use HMR with Parcel, you don't need to do any additional setup. It's enabled by default when you run the development server.

Parcel will automatically detect your application's entry point and set up the development server with HMR enabled. When you make changes to your React components, styles, or other assets, Parcel will apply those changes in real-time without requiring a full page reload.



