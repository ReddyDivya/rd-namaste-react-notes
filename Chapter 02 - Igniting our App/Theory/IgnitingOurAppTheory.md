# Chapter 02 - Igniting our App

## Theory Assignment

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

## Q List down your `favorite 5 superpowers of Parcel` and `describe any 3` of them in your own words
A: ### Configuration:
Parcel follows a zero-config approach, meaning it requires minimal to no configuration. It automatically detects and bundles assets without extensive setup, making it simpler for beginners.

### Ease of Use: 
Parcel is designed for simplicity and ease of use. Its zero-config approach makes it quick to start with and is well-suited for small to medium projects without complex requirements.

### Customization:
While it's less customizable than Webpack, Parcel's simplicity and zero-config approach make it suitable for projects where rapid development and simplicity are priorities

### Use Cases:
Ideal for smaller to medium-sized projects, prototypes, or beginners who want a straightforward setup without delving into extensive configuration.

### Hot Module Replacement (HMR): 
The parcel comes with a built-in HMR. This allows you to see instant updates to your code as you make changes, enhancing your development workflow and speeding up iteration times.

### Optimized Output: 
In production mode, Parcel automatically optimizes your assets for performance. It minifies JavaScript and CSS, generates cache-busting filenames, and applies other optimizations to ensure a faster loading experience for users.

### Code Splitting: 
The parcel can automatically analyze your code and create optimized bundles with code splitting. This helps reduce initial load times by only delivering the code necessary for the current page or functionality.

### Efficient Caching: 
Parcel utilizes a sophisticated caching mechanism that speeds up subsequent builds by reusing cached data from previous builds. This can significantly reduce build times during development.

### Easy Deployment: 
With the optimized output it generates, deploying Parcel-built applications is straightforward. You can host your assets on a server or deploy them to various hosting platforms.

## Q What is `.gitignore`? What should `we add` and `not add` into it?
A: `.gitignore` is a configuration file used in Git repositories to specify which files and directories should be ignored by the version control system. This file helps prevent certain files or types of files from being tracked by Git, which is particularly useful for excluding files that are generated during the development process, contain sensitive information, or are not relevant to the project's version history.

### What to Add to .gitignore:
- Generated Files: Files that are generated during the build process, such as compiled code, transpiled JavaScript, or build artifacts.
- Dependencies: Node.js node_modules directory, Python __pycache__ directories, and other dependency folders.
- Sensitive Information: Configuration files that contain sensitive data like API keys, credentials, or passwords.
- Logs and Reports: Log files, error reports, or debug outputs.
- Output Files: Any files that are generated from source files, like transpiled JavaScript, minified CSS, or compressed images.
- Temporary Files
- 
```
# Ignore node_modules directory
node_modules/

# Ignore build artifacts
dist/
build/
```

### What Not to Add to .gitignore:
- Source Code
- Configuration Templates (e.g., `config.example.json`)
- Documentation (e.g., `README.md`)
- Build Files Needed for Deployment

## Q What is the difference between `package.json` and `package-lock.json`?
A: `package.json` is a metadata file for your Node.js project. It contains various information about your project, such as its name, version, description, entry points, scripts, and most importantly, the list of dependencies required for your project to function. Dependencies are listed along with their specified versions or version ranges.

Developers typically manage the dependencies in the dependencies and devDependencies sections of the package.json file. The dependencies section lists the packages that your application needs to run, while the devDependencies section lists packages that are only required during development, such as testing frameworks or build tools.

package.json also includes scripts that can be executed using the npm (Node Package Manager) or yarn commands. These scripts can be used for tasks like running tests, building the application, or starting a development server.

`package-lock.json`  is a file generated by npm (or yarn) that provides a detailed, deterministic, and reproducible description of the exact versions of the dependencies installed in your project. It includes information about the versions of the dependencies, their dependencies (sub-dependencies), and the specific commit hashes or references for those versions. This helps ensure that your project uses the same dependency versions across different environments and installations.

The purpose of package-lock.json is to prevent what is known as the "dependency hell." This occurs when multiple developers or environments use slightly different versions of dependencies, leading to inconsistencies and unexpected behaviors in the application.

## Q  Why should I not modify package-lock.json?
A: `package-lock.json` is automatically generated by npm (or yarn) when you install or update dependencies in your Node.js project. It's intended to provide a deterministic and reproducible snapshot of the exact versions of dependencies and their dependencies that were installed. Modifying package-lock.json directly is generally not recommended for several reasons:

`Version Consistency`: The primary purpose of package-lock.json is to ensure version consistency across different environments and installations of your project. If you modify it manually, you might introduce inconsistencies that could lead to unexpected behavior, bugs, or compatibility issues.

`Dependency Resolution`: package-lock.json includes specific version numbers and dependency resolution information that npm uses to fetch the exact same versions of dependencies when others install your project. Modifying this information could lead to conflicts or missing dependencies.

`Collaboration`: When working in a team, each member might have their own local changes to package-lock.json. If you manually modify it, you might cause conflicts when trying to merge changes from different team members. This can be a source of confusion and difficulty during collaboration.

## Q What is node_modules? Is it a good idea to push that on git?
A: `node_modules` is a directory that is automatically created by Node.js and npm (Node Package Manager) when you install dependencies for your project. It contains all the packages (dependencies) that your project relies on. These packages can range from libraries that provide various functionalities to tools used for the development, testing, and building of your application.

The `node_modules` directory can become quite large, especially for projects with many dependencies. It contains all the code and files needed to make the external packages work within your project. Because of its size and the fact that it can be generated from the package.json and package-lock.json files, it's generally not considered a good practice to include the node_modules directory in your version control system (e.g., Git). 

## Q What is the `dist` folder?
A: The `dist` folder, short for "distribution," is a commonly used directory in software development projects. It's typically used to store the final, compiled, or minified version of your code that is ready for deployment or distribution to end-users. The contents of the dist folder are often optimized for performance, stripped of unnecessary files, and compressed to reduce file size.

## Q What is `browserlists`?
A: `browserslist` is a configuration file and query syntax used by various front-end tools and libraries to define which browsers and browser versions your project should support. This configuration helps tools like autoprefixer, Babel, and others determine which browser-specific prefixes and transformations to apply to your CSS and JavaScript code, ensuring compatibility with a specified range of browsers.

When you set up a browserslist configuration, you're essentially specifying the minimum browser versions that your project should be compatible with. This helps automate the process of adding vendor prefixes and applying code transformations that ensure your web application looks and behaves consistently across different browsers.

```
last 2 versions
> 1%
not dead
```
In this example, the configuration indicates that your project should support the last two versions of all major browsers, any browser with a usage share of more than 1%, and browsers that are not considered "dead" (i.e., no longer actively used).

## Q Read about dif bundlers: vite, webpack, parcel
A: `Vite`, `Webpack`, and `Parcel` are all popular bundlers used in modern web development to manage assets, bundle code, and optimize projects for production. Each of these bundlers has its own strengths, use cases, and features. Let's briefly look at each of them:

`Vite`:
Vite is a relatively new build tool that focuses on speed and developer experience. It was designed to be a faster alternative to traditional bundlers like Webpack. Vite leverages ES modules and relies on native browser imports during development, which results in rapid hot module replacement (HMR) and quicker build times.

### Key features:
Ultra-fast development with instant HMR.
Supports Vue.js and React, with plans to expand to other frameworks.
No need for bundling during development, as it serves unbundled code directly.
Optimized for smaller production bundles.
Simplified configuration compared to Webpack.

`Webpack`:
Webpack is one of the most widely used bundlers in the JavaScript ecosystem. It's highly configurable and offers a robust set of features for bundling, code splitting, asset management, and more. While Webpack's configuration can be complex, it provides a powerful solution for projects of all sizes.

### Key features:
Highly customizable and configurable.
Supports code splitting and dynamic imports for optimizing performance.
Integrates well with various plugins and loaders.
Widely adopted and well-documented.
Can handle a wide range of use cases, from small projects to large-scale applications.

`Parce`l:
Parcel is an easy-to-use, zero-config bundler that aims to simplify the build process. It automates many tasks and requires minimal configuration. It's a great choice for quick prototyping, smaller projects, or beginners who want to get started quickly without delving into complex configurations.

### Key features:
Zero-config setup; no manual configuration required.
Supports various asset types out of the box (HTML, CSS, JavaScript, images, etc.).
Built-in support for hot module replacement.
Suitable for simple projects and fast prototyping.
Provides a simple command-line interface.

## Q Read about: ^ - caret and ~ - tilde
A: In the context of versioning in software development, the caret (^) and tilde (~) symbols are used to specify version ranges for dependencies in files like package.json when working with package managers like npm or yarn.

`Caret (^)`:
When you use the caret symbol (^) in front of a version number, it indicates that you want to allow updates to the package as long as the major version remains the same. In semantic versioning (semver), versions are represented as MAJOR.MINOR.PATCH.

### For example:
^1.2.3 allows updates to any version within the 1.x.x range.
^0.3.2 allows updates to any version within the 0.3.x range.
The caret symbol is more aggressive than the tilde symbol and is often used for libraries that follow semver closely. It allows for the inclusion of bug fixes and minor features while avoiding major version changes.

`Tilde (~)`:
The tilde symbol (~) is used to specify a version range that allows updates to a package as long as the most recent version is within the same minor version range. In other words, it permits updates as long as the patch version is incremented.

### For example:
~1.2.3 allows updates to any version within the 1.2.x range, but not beyond that.
The tilde symbol is generally more conservative than the caret symbol and is used when you want to ensure that only bug fixes are included without introducing new features.

Both the caret and tilde symbols are used to strike a balance between ensuring a level of stability while still allowing for updates and bug fixes. The choice between them depends on your project's requirements and how much flexibility you want in terms of accepting updates.

## Q Read about Script types in html (MDN Docs)
A: The term `Script types` in the context of HTML refers to the attribute type used in the <script> element. This attribute specifies the MIME type of the script, which helps the browser understand how to interpret and execute the script code. However, please note that HTML and web development practices can evolve, so I recommend checking the latest documentation on the MDN Web Docs for the most up-to-date information.

Here's a brief overview of how the type attribute is used with <script> elements:
JavaScript (text/javascript): This is the most common value used for the type attribute. It indicates that the content of the <script> element is JavaScript code. However, starting from HTML5, you can omit the type attribute altogether for JavaScript, as browsers assume it's JavaScript by default.

### Example:
```
<script>
    // JavaScript code here
</script>
```

`Module Script (module)`: This value is used to indicate that the script is a JavaScript module, which allows you to use features like import and export to organize your code into reusable modules. Modules are loaded asynchronously and have a different scope compared to traditional scripts.

### Example:
```
<script type="module">
    import { functionName } from './module.js';
    // JavaScript module code here
</script>
```
