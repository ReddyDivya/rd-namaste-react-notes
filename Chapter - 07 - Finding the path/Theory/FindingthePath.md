# Chapter 07 - Finding the Path
---

### Q: What are various ways to add images to our App? Explain with code examples
A: There are several ways to add and display images.

1 `Importing images using ES6 Modules` - We can import images directly using ES6 modules. This is a common approach for `small to medium-sized apps`, and it's straightforward. Firstly, We have to place our image in the project directory (e.g., in the src folder or a subfolder).

**Example:**
```
import React from 'react';
import myImage from './my_image.jpg';

function App() {
    return (
        <div>
            <img src={myImage} alt="My Image" />
        </div>
    );
}

export default App;
```

2 `Using public folder` - If we want to reference images in the public folder, we can do so without importing them explicitly. This method is useful for handling large image assets or for dynamic image URLs. Place your image in the public directory.

```
// public/my_image.jpg
```

Then, reference it in your code:
```
import React from 'react';

function App() {
    return (
        <div>
            <img src={process.env.PUBLIC_URL + '/my_image.jpg'} alt="My Image" />
        </div>
    );
}

export default App;
```

3 `Loading images from a remote source` - We can load images from a remote source, such as an external URL or a backend API, by specifying the image URL directly in our img tag.

**Example:**
```
import React from 'react';

function App() {
    const imageUrl = 'https://example.com/my_image.jpg';

    return (
        <div>
            <img src={imageUrl} alt="My Image" />
        </div>
    );
}

export default App;
```

4 `Using image assets within CSS` - We can also use images as background images or in other CSS styling. In this case, we can reference the image in your CSS file.

**Example CSS (styles.css):**
```
.image-container {
    background-image: url('/my_image.jpg');
    width: 300px;
    height: 200px;
}
```
Then, apply the CSS class to your JSX:
```
import React from 'react';
import './styles.css';

function App() {
    return (
        <div className="image-container">
            {/* Content goes here */}
        </div>
    );
}

export default App;
```

Choose the method that best fits your project's requirements and organization. Importing images using ES6 modules is the most common and convenient approach for most React applications, especially for small to medium-sized projects. For larger projects with many images, consider the folder structure and organization to keep our code clean and maintainable.

---


















