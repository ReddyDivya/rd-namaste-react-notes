### Q: Explore all the ways of writing CSS.
A: ### Using CSS - CSS can be added to HTML documents in 3 ways:

`Inline` - by using the `style attribute` inside HTML elements.

```
<h1 style="color:blue;">A Blue Heading</h1>
<p style="color:red;">A red paragraph.</p>
```

`Internal` - by using a `<style>` element in the <head> section.
```
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {background-color: powderblue;}
      h1   {color: blue;}
      p    {color: red;}
    </style>
  </head>
  <body>
    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>  
  </body>
</html>
```

`External` - by using a `<link>` element to link to an external CSS file.
```
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```

```
body {
  background-color: powderblue;
}
h1 {
  color: blue;
}
p {
  color: red;
}
```

---

### Q: How do we configure `tailwindcss`?
A: ### Creating your configuration file: 

### 1 Install Tailwind CSS
Install tailwindcss via npm, and create your tailwind.config.js file.

```
npm install -D tailwindcss
npx tailwindcss init
```
### 2 Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 3 Add the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 5 Start using Tailwind in your HTML
Add your compiled CSS file to the <head> and start using Tailwind’s utility classes to style your content.
```
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/dist/output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```

---

### Q: In `tailwind.config.js`, what does all the keys mean (content, theme, extend, plugins)?
A: 


---

### Q: Why do we have `.postcssrc` file?
A: 

