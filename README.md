[readme.md](https://github.com/user-attachments/files/30967296/readme.md)
# HTML, CSS & JavaScript Tutorial Repository

> A hands-on learning repository based on the **Apna College HTML, CSS, and JavaScript tutorials**, including lesson examples, practice sets, projects, notes, and a JavaScript currency-converter project.

[![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=111111)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## About This Repository

This repository records a progressive frontend-learning path through **HTML**, **CSS**, and **JavaScript**. The HTML and CSS folders follow long-form tutorial videos with the supplied timestamps. JavaScript is organized as a chapter-based course in which the topics were taught across separate videos; therefore, there is **no single consolidated JavaScript timestamp list** in this README. The JavaScript coverage is documented from the supplied JavaScript notes and the actual chapter files in the repository.

The examples in this document are grounded in the reuploaded repository and its included notes. The project tree at the end lists every relevant HTML, CSS, JavaScript, asset, practice, project, and notes path. The internal contents of `.git/` are intentionally collapsed because they are version-control metadata.

## Learning Objectives

By working through this repository, you will learn how to structure semantic HTML pages, create links and media, build tables and forms, organize page layouts, style pages with selectors and the CSS box model, position and align elements, build responsive layouts with Flexbox and media queries, and add transitions and animations. The JavaScript chapters extend this foundation with variables, data types, operators, control flow, loops, strings, arrays, functions, the DOM, events, classes, objects, error handling, callbacks, promises, asynchronous programming, `async`/`await`, and the Fetch API.

## How the Repository Is Organized

| Area | Location | Coverage |
|---|---|---|
| HTML lessons | `HTML/` | Page structure, tags, layout, lists, tables, forms, iframes, video, and projects |
| CSS lessons | `CSS/` | Selectors, colors, text, units, box model, display, positioning, backgrounds, Flexbox, media queries, transitions, transforms, and animations |
| JavaScript lessons | `JAVASCRIPT/` | Chapters 1–11, DOM, events, object-oriented concepts, asynchronous JavaScript, Fetch API, and projects |
| Notes | `Notes for HTML, CSS, and JAVASCRIPT/` | HTML, CSS, and JavaScript PDF notes |

## Running the Examples

Most examples are standalone browser files. Open an `index.html` file directly in a browser for basic HTML/CSS lessons. For JavaScript lessons, open the chapter’s `index.html` so the corresponding script is loaded in the intended page context. For a smoother development workflow, use a local development server such as VS Code Live Server.

```bash
# Example using Python's built-in static server
cd /path/to/apna_college_html_css_javascript_tutorial
python3 -m http.server 5500
```

Then visit `http://localhost:5500/` in a browser. Some examples use external resources such as a currency-rate API or flag images, so those projects require an internet connection.

# HTML Tutorial

## HTML Course Coverage

The HTML tutorial is represented by the material in `HTML/HTML tutorial level 1 and 2`, `HTML/HTML tutorial level 3`, `HTML/HTML tutorial level 4`, the HTML practice projects, and the supplied `HTML Notes.pdf`.

| Timestamp | Topic |
|---|---|
| 00:00 | Introduction to HTML |
| 08:24 | What is HTML? |
| 22:19 | Basic HTML page structure |
| 28:53 | HTML tags |
| 36:38 | HTML attributes |
| 38:33 | Headings |
| 41:06 | Paragraph tag |
| 42:50 | Anchor tag |
| 48:06 | Image tag |
| 53:42 | Line break tag |
| 54:09 | Bold, italic, and underline tags |
| 56:13 | Big and small tags |
| 56:49 | Horizontal rule tag |
| 58:24 | Subscript and superscript tags |
| 01:00:19 | `pre` tag |
| 01:03:55 | Page layout techniques |
| 01:06:09 | `header` tag |
| 01:08:49 | `main` tag |
| 01:10:49 | `footer` tag |
| 01:16:09 | `div` tag |
| 01:22:23 | `span` tag |
| 01:25:17 | Lists |
| 01:29:28 | Tables |
| 01:37:13 | Forms |
| 01:56:49 | `iframe` tag |
| 02:00:19 | Video tag |

## Basic HTML Document Structure

HTML documents are made of elements arranged in a tree. The document type declaration identifies an HTML5 document. The `html` element contains the `head` and `body`; metadata belongs in the head, while visible page content belongs in the body.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

Tags define the meaning or behavior of content. Attributes provide additional information to an element, such as the destination of a link, the source of an image, or the alternative text for an image.

```html
<a href="https://example.com">Visit the website</a>
<img src="/image.png" alt="A descriptive alternative text" />
```

## Text and Inline Elements

The tutorial demonstrates headings from `h1` to `h6`, paragraphs, line breaks, horizontal rules, emphasis tags, and text-size tags. `pre` preserves whitespace and line breaks.

```html
<h1>Main heading</h1>
<h2>Section heading</h2>
<p>This is a paragraph with <b>bold</b>, <i>italic</i>, and <u>underlined</u> text.</p>
<br />
<hr />
<p>H<sub>2</sub>O and x<sup>2</sup></p>
<pre>
This text keeps
its original spacing.
</pre>
```

`div` is a block-level container commonly used to group page sections. `span` is an inline container used to target a smaller part of a sentence or element.

```html
<div class="card">
  <p>Price: <span class="highlight">₹999</span></p>
</div>
```

## Page Layout and Semantic Elements

The notes introduce semantic layout elements that communicate the role of each section to browsers, developers, and assistive technologies.

```html
<header>
  <h1>My Website</h1>
</header>
<main>
  <section>
    <h2>About the project</h2>
    <p>Primary page content belongs here.</p>
  </section>
</main>
<footer>
  <p>Copyright 2025</p>
</footer>
```

A semantic layout is generally easier to read and maintain than a page built entirely from anonymous containers.

## Lists

HTML supports ordered lists, unordered lists, and nested lists.

```html
<h2>Learning topics</h2>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<ol>
  <li>Plan the page</li>
  <li>Write the markup</li>
  <li>Style the layout</li>
</ol>
```

## Tables

Tables represent tabular data using rows and cells. The repository and notes introduce `table`, `tr`, `th`, `td`, `caption`, `thead`, and `tbody`.

```html
<table>
  <caption>Student records</caption>
  <thead>
    <tr>
      <th>Name</th>
      <th>Roll No.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Shradha</td>
      <td>1664</td>
    </tr>
  </tbody>
</table>
```

## Forms and Input Elements

Forms collect user input and submit it to an action URL. The tutorial introduces the `form` element and input controls.

```html
<form action="/action.php" method="post">
  <label for="username">Username</label>
  <input id="username" name="username" type="text" />

  <label for="email">Email</label>
  <input id="email" name="email" type="email" />

  <button type="submit">Submit</button>
</form>
```

Use labels, meaningful `name` attributes, suitable input types, and accessible descriptions when building forms.

## Iframes and Video

An `iframe` embeds another page or resource. The `video` element embeds media and can be configured with controls.

```html
<iframe src="https://example.com" title="Embedded example"></iframe>

<video src="myVid.mp4" controls width="480">
  Your browser does not support the video tag.
</video>
```

## HTML Projects and Practice

The HTML section includes introductory exercises, a resume/portfolio project, and a student website project with multiple pages such as sign-in, sign-up, dashboard, courses, grades and records, and personal information. These projects show how separate HTML pages can represent parts of one larger website.

# CSS Tutorial

## CSS Course Coverage

The CSS tutorial is organized into five levels, seven practice sets, and a media-queries lesson. The supplied CSS timestamps are preserved below.

| Timestamp | Topic |
|---|---|
| 12:14 | Level 1 |
| 15:47 | CSS syntax |
| 19:53 | Including CSS |
| 28:48 | Color |
| 34:10 | Background color |
| 39:44 | Color system |
| 54:40 | Color palette |
| 56:38 | Selectors |
| 1:04:55 | Practice set 1 |
| 1:17:26 | Text |
| 1:42:02 | Units in CSS |
| 1:48:52 | Practice set 2 |
| 1:55:44 | Level 2 |
| 1:55:48 | Box model |
| 2:01:26 | Height |
| 2:03:46 | Width |
| 2:06:09 | Border |
| 2:16:12 | Padding |
| 2:21:36 | Margin |
| 2:24:49 | Practice set 3 |
| 2:38:18 | Display property |
| 2:47:40 | Visibility property |
| 2:48:31 | Alpha / opacity |
| 2:52:33 | Practice set 4 |
| 3:02:48 | Level 3 |
| 3:02:55 | Units in CSS revisited |
| 3:04:26 | Percentage |
| 3:09:19 | `em` |
| 3:13:17 | `rem` |
| 3:14:57 | `vh` and `vw` |
| 3:16:15 | Position |
| 3:16:56 | `static` position |
| 3:21:00 | `relative` position |
| 3:22:45 | `absolute` position |
| 3:26:26 | `fixed` position |
| 3:29:40 | `sticky` position |
| 3:30:49 | `z-index` |
| 3:36:50 | Background image |
| 3:40:25 | Background size |
| 3:42:54 | Background repeat |
| 3:43:46 | Practice set 5 |
| 3:50:33 | Level 4 |
| 3:50:48 | Flexbox |
| 3:53:56 | Flex model |
| 3:58:17 | Flexbox direction |
| 4:03:53 | Flex container properties |
| 4:10:59 | Flex item properties |
| 4:18:36 | Practice set 6 |
| 4:34:55 | Media queries |
| 4:43:16 | Practice set 7 |
| 4:47:32 | Level 5 |
| 4:48:26 | Transition |
| 4:59:04 | Transform |
| 4:59:26 | Rotate |
| 5:05:17 | Scale |
| 5:09:00 | Translate |
| 5:12:34 | Skew |
| 5:13:37 | Animation |
| 5:25:15 | Animation shorthand |
| 5:28:00 | Animation percentages |
| 5:29:31 | Practice set 8 |

## Including CSS and Basic Syntax

CSS rules contain a selector and a declaration block. A declaration combines a property and a value.

```css
h1 {
  color: blue;
  text-align: center;
}
```

CSS can be written inline, inside a `style` element, or in an external stylesheet. The repository primarily demonstrates external `style.css` files linked from HTML.

```html
<link rel="stylesheet" href="style.css" />
```

```css
body {
  background-color: #f4f4f4;
}
```

## Colors, Backgrounds, and Selectors

The tutorial covers named colors, hexadecimal notation, RGB/RGBA, and color palettes. Selectors identify the elements to style.

```css
/* Element selector */
p { color: #333; }

/* Class selector */
.card { background-color: rgb(255, 255, 255); }

/* ID selector */
#hero { color: rgba(0, 0, 0, 0.8); }

/* Group selector */
h1, h2 { font-family: Arial, sans-serif; }
```

Background properties control the fill and image behind an element.

```css
.hero {
  background-color: lightblue;
  background-image: url("image.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
}
```

## Text and Units

The CSS notes cover text color, alignment, decoration, transformation, font properties, and common units. Relative units such as `%`, `em`, `rem`, `vh`, and `vw` help layouts adapt to context and viewport size.

```css
article {
  color: #222;
  text-align: justify;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1rem;
  line-height: 1.5;
}
```

## The Box Model

Every element is represented by a box with content, padding, border, and margin. The repository practices changing height, width, border, padding, and margin independently.

```css
.card {
  width: 320px;
  height: 180px;
  padding: 20px;
  border: 2px solid black;
  margin: 24px auto;
  box-sizing: border-box;
}
```

Padding creates space inside the border; margin creates space outside the border. The `box-sizing` setting determines how declared dimensions interact with padding and borders.

## Display, Visibility, and Opacity

The tutorial distinguishes `inline`, `block`, `inline-block`, and `none`. `visibility: hidden` hides an element while reserving its layout space, whereas `display: none` removes it from layout. Opacity controls visual transparency.

```css
.inline-item { display: inline; }
.block-item { display: block; }
.inline-block-item { display: inline-block; }
.removed-item { display: none; }
.hidden-item { visibility: hidden; }
.translucent-item { opacity: 0.5; }
```

## Positioning and Stacking

CSS positioning modes include `static`, `relative`, `absolute`, `fixed`, and `sticky`. `z-index` controls stacking order when positioned elements overlap.

```css
.parent {
  position: relative;
}

.badge {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 2;
}

.navbar {
  position: sticky;
  top: 0;
}
```

An absolutely positioned element is positioned relative to its closest positioned ancestor. A fixed element is positioned relative to the viewport, while a sticky element responds to scrolling within its containing context.

## Flexbox

Flexbox begins when the parent is set to `display: flex`. The parent is the flex container and its children are flex items. The tutorial covers direction, wrapping, main-axis alignment, cross-axis alignment, and item-level growth and shrinking.

```css
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: space-around;
}

.item {
  align-self: stretch;
  flex-grow: 1;
  flex-shrink: 1;
}
```

## Media Queries

Media queries apply styles according to viewport or device conditions. They are used to make layouts responsive.

```css
@media (max-width: 600px) {
  .container {
    flex-direction: column;
  }

  h1 {
    font-size: 1.5rem;
  }
}
```

## Transitions, Transforms, and Animations

Transitions interpolate changes between states. Transforms change an element’s visual geometry through rotation, scaling, translation, or skewing. Animations use keyframes to describe multiple stages.

```css
.button {
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.button:hover {
  transform: scale(1.05) translateY(-2px);
  background-color: tomato;
}

@keyframes slide-in {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

.panel {
  animation: slide-in 1s ease-in-out;
}
```

# JavaScript Tutorial

## Why JavaScript Has No Consolidated Timestamp List

Unlike the HTML and CSS sections, JavaScript in this repository was taught through multiple separate videos. The supplied material does not contain one combined timestamp description for all JavaScript chapters. For that reason, this README deliberately does **not** invent timestamps for JavaScript. Instead, the JavaScript roadmap below is based on the chapter directories, the included JavaScript notes (`JS1` through `JS12`), and the actual source files.

## JavaScript Chapter Roadmap

| Chapter | Repository location | Main coverage |
|---|---|---|
| 1 | `Chapter 1-Variables Data Types/` | Variables, primitive data types, values, and basic output |
| 2 | `Chapter 2-Operations and Conditional Statements/` | Operators, expressions, conditions, and branching |
| 3 | `Chapter 3-Loops and Strings/` | Loops, strings, string methods, and practice questions |
| 4 | `Chapter 4-Arrays/` | Arrays, indexing, mutation, and array practice |
| 5 | `Chapter 5-Functions/` | Functions, arrow functions, `forEach`, array methods, and reusable logic |
| 6 | `Chapter 6-DOM/` | DOM selection, properties, styles, and element manipulation |
| 7 | `Chapter 7-DOM part 2/` | DOM creation, attributes, classes, and practice questions |
| 8 | `Chapter 8-Events/` | Event handlers, event objects, listeners, and form events |
| 9 | `Chapter 9-Classes & Objects/` | Objects, classes, prototypes, inheritance, and error handling |
| 10 | `Chapter 10-Callbacks, Promises & Async Await/` | Callbacks, callback hell, promises, asynchronous programming, and `async`/`await` |
| 11 | `Chapter 11-Fetch API with project/` | Fetch API, JSON data, currency conversion, and API-driven UI |

## Variables, Data Types, and Operators

JavaScript variables can be declared with `let`, `const`, or—older code permitting—`var`. The first chapter introduces values and data types; the second chapter builds expressions with operators and conditional statements.

```js
let name = "Aman";
const age = 20;
let isStudent = true;
let marks = null;

console.log(name, age, isStudent, marks);
```

Arithmetic, comparison, logical, assignment, and conditional expressions are used to make decisions.

```js
let marks = 82;
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else {
  console.log("Keep practicing");
}
```

## Loops and Strings

Loops repeat logic. The repository includes practice scripts for repeated execution and string manipulation.

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

const message = "JavaScript";
console.log(message.length);
console.log(message.toUpperCase());
console.log(message.slice(0, 4));
```

## Arrays and Array Methods

Arrays store ordered collections. The chapters cover indexing, iteration, and common methods. Functions such as `forEach` and other array methods allow operations to be expressed close to the data they process.

```js
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  console.log(number);
});

const doubled = numbers.map((number) => number * 2);
const evenNumbers = numbers.filter((number) => number % 2 === 0);
const total = numbers.reduce((sum, number) => sum + number, 0);
```

## Functions and Arrow Functions

Functions package reusable behavior. The repository separates regular functions, arrow functions, `forEach`, and array-method examples.

```js
function greet(user) {
  return `Hello, ${user}`;
}

const add = (a, b) => a + b;

console.log(greet("Aman"));
console.log(add(2, 3));
```

## DOM Selection and Manipulation

The DOM represents the HTML document as objects. JavaScript can select nodes, read or update their text, change styles and classes, create elements, and append them to the page.

```js
const heading = document.querySelector("h2");
heading.innerText = "Hello JavaScript";
heading.style.color = "blue";

const button = document.createElement("button");
button.innerText = "Click me";
button.classList.add("primary-button");
document.body.append(button);
```

The notes and scripts use `querySelector` and `querySelectorAll` with IDs, classes, and tag selectors.

```js
const byId = document.querySelector("#myId");
const byClass = document.querySelector(".myClass");
const allButtons = document.querySelectorAll("button");
```

## Attributes, Classes, and DOM Projects

DOM code can read or update attributes and use `classList` to add, remove, or toggle CSS classes.

```js
const image = document.querySelector("img");
image.setAttribute("src", "profile.png");
image.setAttribute("alt", "Profile image");

const card = document.querySelector(".card");
card.classList.add("active");
card.classList.toggle("highlighted");
```

Chapter 7 extends DOM work with dynamic element creation and practice tasks that connect JavaScript behavior to HTML and CSS.

## Events

Events let a page respond to user actions such as clicks, input changes, and form submissions. The repository demonstrates `addEventListener`, multiple handlers, event objects, and removing a named handler.

```js
const button = document.querySelector("#btn1");

const handler = () => {
  console.log("Button was clicked");
};

button.addEventListener("click", handler);
button.removeEventListener("click", handler);
```

Use the event object to inspect the event type, target, and pointer coordinates.

```js
button.addEventListener("click", (event) => {
  console.log(event.type);
  console.log(event.target);
  console.log(event.clientX, event.clientY);
});
```

For form submission, prevent the default browser navigation when JavaScript should process the form.

```js
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Form submitted through JavaScript");
});
```

## Classes, Objects, Prototypes, and Inheritance

The object-oriented chapters introduce object literals, classes, constructors, methods, prototypes, inheritance, and error handling.

```js
class User {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    return `My name is ${this.name}`;
  }
}

class Admin extends User {
  deleteUser() {
    return `${this.name} can delete users`;
  }
}

const admin = new Admin("Aman");
console.log(admin.introduce());
console.log(admin.deleteUser());
```

JavaScript objects can also be created directly:

```js
const product = {
  title: "Pen",
  price: 10,
  displayPrice() {
    console.log(this.price);
  }
};
```

Error handling makes failures explicit and allows recovery logic to be defined.

```js
try {
  throw new Error("Something went wrong");
} catch (error) {
  console.error(error.message);
}
```

## Callbacks, Promises, and Asynchronous Programming

A callback is a function passed to another function to be executed later. The notes and chapter files progress from callbacks to callback-hell scenarios, promises, and cleaner asynchronous patterns.

```js
function processData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

processData((message) => {
  console.log(message);
});
```

A promise represents a future result that may be fulfilled or rejected.

```js
const getPromise = () => {
  return new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve("Data loaded");
    } else {
      reject(new Error("Request failed"));
    }
  });
};

getPromise()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

`async` and `await` provide a readable way to work with promises.

```js
async function loadData() {
  try {
    const result = await getPromise();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

loadData();
```

## Fetch API and Currency Converter Project

Chapter 11 applies asynchronous JavaScript to a real project. The currency converter populates currency dropdowns, updates country flags, requests exchange-rate JSON, calculates a converted amount, and updates the message displayed in the page.

The repository’s project uses a base URL with the selected currency code:

```js
const BASE_URL =
  "https://latest.currency-api.pages.dev/v1/currencies";

const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
const response = await fetch(URL);
const data = await response.json();
```

The project validates the amount, reads the exchange rate, and displays the result.

```js
const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;

  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

  try {
    const response = await fetch(URL);
    const data = await response.json();
    const rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    const finalAmount = amtVal * rate;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
  } catch (error) {
    msg.innerText = "Error fetching exchange rate";
  }
};
```

The interface listens for button clicks and currency changes, while `preventDefault()` keeps the form from navigating away before the asynchronous calculation completes.

## Projects and Practice Sets

The repository includes HTML projects, CSS practice sets, JavaScript practice questions, and a complete currency-converter project. The HTML projects include a resume/portfolio and a multi-page student website. CSS practice sets build progressively from selectors and text to layouts, positioning, Flexbox, responsive design, and animation. JavaScript practice files accompany the chapters on variables, conditionals, loops, arrays, functions, DOM, events, and classes.

## Recommended Learning Workflow

Start with the HTML levels so that the document structure is familiar. Continue through CSS levels 1–5 and the practice sets, applying styles to the HTML examples. Then follow JavaScript chapters 1–11 in directory order. For each chapter, open its `index.html`, read the associated script, make a small change, and observe the result in the browser. Finish with the currency converter, where DOM manipulation, events, `async`/`await`, `fetch`, JSON, and error handling work together.

## Good Frontend Practices

Use meaningful HTML elements and accessible labels, provide alternative text for meaningful images, keep CSS in external stylesheets when possible, avoid unnecessary inline styles, validate form inputs, and handle asynchronous failures visibly. Do not expose private API keys in browser code. External APIs used by frontend projects are publicly visible to users, so use only endpoints intended for client-side access.

## Repository Structure

The following tree represents the complete project-level structure in the authoritative reuploaded archive. It includes the HTML, CSS, and JavaScript source files, practice sets, projects, assets, notes, and configuration files. The internal contents of `.git/` are collapsed as version-control metadata.

```text
apna_college_html_css_javascript_tutorial/
├── .git/
├── CSS/
│   ├── CSS tutorial level 1/
│   │   ├── index.html
│   │   └── style.css
│   ├── CSS tutorial level 2/
│   │   ├── index.html
│   │   ├── index2.html
│   │   ├── style.css
│   │   └── style2.css
│   ├── CSS tutorial level 3/
│   │   ├── index.html
│   │   └── style.css
│   ├── CSS tutorial level 4/
│   │   ├── Part 2 Media Queries/
│   │   │   ├── index.html
│   │   │   └── style.css
│   │   ├── index.html
│   │   └── style.css
│   ├── CSS tutorial level 5/
│   │   ├── index.html
│   │   └── style.css
│   └── Practice set/
│       ├── 1/
│       │   ├── index.html
│       │   └── style.css
│       ├── 2/
│       │   ├── index.html
│       │   └── style.css
│       ├── 3/
│       │   ├── index.html
│       │   ├── navbar.html
│       │   └── style.css
│       ├── 4/
│       │   ├── .vscode/
│       │   │   ├── c_cpp_properties.json
│       │   │   ├── launch.json
│       │   │   └── settings.json
│       │   ├── index.html
│       │   └── style.css
│       ├── 5/
│       │   ├── car.avif
│       │   ├── index.html
│       │   └── style.css
│       ├── 6/
│       │   ├── index.html
│       │   └── style.css
│       └── 7/
│           ├── index.html
│           └── style.css
├── HTML/
│   ├── HTML tutorial level 1 and 2/
│   │   ├── HelloFolder/
│   │   │   └── hello.html
│   │   ├── index.html
│   │   └── tanjiro.jpeg
│   ├── HTML tutorial level 3/
│   │   └── index.html
│   ├── HTML tutorial level 4/
│   │   └── index.html
│   └── Projects/
│       ├── Level 1/
│       │   └── index.html
│       ├── Level 2 (pushed on github)/
│       │   └── html_project_resume_portfolio/
│       │       ├── .git/
│       │       ├── Git commands 1/
│       │       │   ├── Screenshot (1605).png
│       │       │   ├── Screenshot (1606).png
│       │       │   └── git commands 1.txt
│       │       ├── education.html
│       │       ├── experience.html
│       │       ├── index.html
│       │       └── projects.html
│       └── Level pro/
│           └── Student website/
│               └── html_project_2_student_website/
│                   ├── .git/
│                   ├── forgotpassword.html
│                   ├── gradesandrecords.html
│                   ├── index.html
│                   ├── mycourses.html
│                   ├── personalinformation.html
│                   ├── signin.html
│                   ├── signup.html
│                   ├── signupsuccess.html
│                   └── studentdashboard.html
├── JAVASCRIPT/
│   ├── Chapter 1-Variables Data Types/
│   │   ├── first.js
│   │   ├── index.html
│   │   └── practicequestion.js
│   ├── Chapter 10-Callbacks, Promises & Async Await/
│   │   ├── async_await.js
│   │   ├── asynchronous_programming.js
│   │   ├── callback_hell.js
│   │   ├── callbacks.js
│   │   ├── index.html
│   │   └── promises.js
│   ├── Chapter 11-Fetch API with project/
│   │   ├── app.js
│   │   ├── currency_converter/
│   │   │   ├── app.js
│   │   │   ├── codes.js
│   │   │   ├── index.html
│   │   │   └── style.css
│   │   └── index.html
│   ├── Chapter 2-Operations and Conditional Statements/
│   │   ├── index.html
│   │   ├── practicequestions.js
│   │   └── script.js
│   ├── Chapter 3-Loops and Strings/
│   │   ├── index.html
│   │   ├── practicequestions.js
│   │   ├── practicequestions2.js
│   │   ├── script.js
│   │   └── strings.js
│   ├── Chapter 4-Arrays/
│   │   ├── index.html
│   │   ├── practicequestions.js
│   │   └── script.js
│   ├── Chapter 5-Functions/
│   │   ├── arrayMethods.js
│   │   ├── arrowFunctions.js
│   │   ├── forEach.js
│   │   ├── index.html
│   │   ├── practicequestions.js
│   │   └── script.js
│   ├── Chapter 6-DOM/
│   │   ├── index.html
│   │   ├── script.js
│   │   └── style.css
│   ├── Chapter 7-DOM part 2/
│   │   ├── index.html
│   │   ├── practice_questions/
│   │   │   ├── index.html
│   │   │   ├── script.js
│   │   │   └── style.css
│   │   ├── script.js
│   │   └── style.css
│   ├── Chapter 8-Events/
│   │   ├── Practice questions/
│   │   │   ├── index.html
│   │   │   ├── script.js
│   │   │   └── style.css
│   │   ├── index.html
│   │   ├── script.js
│   │   └── style.css
│   └── Chapter 9-Classes & Objects/
│       ├── Practice questions/
│       │   ├── index.html
│       │   └── script.js
│       ├── classes_and_objects.js
│       ├── error_handling.js
│       ├── index.html
│       ├── inheritance.js
│       └── prototype.js
└── Notes for HTML, CSS, and JAVASCRIPT/
    ├── CSS Notes.pdf
    ├── HTML Notes.pdf
    └── JAVASCRIPT Notes/
        └── JavaScript/
            ├── JS1 ClassNotes.pdf
            ├── JS11 Class Notes.pdf
            ├── JS12 ClassNotes.pdf
            ├── JS2 ClassNotes.pdf
            ├── JS3 ClassNotes.pdf
            ├── JS4 ClassNotes.pdf
            ├── JS5 ClassNotes (1).pdf
            ├── JS6 ClassNotes.pdf
            └── JS7 ClassNotes.pdf
```

## Attribution and References

This repository is a personal learning collection based on the Apna College HTML, CSS, and JavaScript tutorial series. The HTML and CSS timeline sections reproduce the supplied video descriptions. The JavaScript section intentionally uses chapter and notes-based coverage because JavaScript topics were taught across separate videos without one consolidated timestamp list.

1. [MDN Web Docs — HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
2. [MDN Web Docs — CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
3. [MDN Web Docs — JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
4. [MDN Web Docs — Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
5. [Apna College YouTube channel](https://www.youtube.com/@ApnaCollegeOfficial)
