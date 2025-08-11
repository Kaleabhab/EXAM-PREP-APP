// src/data/notesData.js (example)
const notesData = {
  // support both "course1" and "1" style keys
  course1: {
    chapters: [
      // Chapter 1
      [
        { type: "h1", text: "Introduction to HTML" },
        { type: "p", text: "HTML (HyperText Markup Language) is the standard markup language for creating web pages." },
        { type: "h2", text: "Basic Elements" },
        { type: "p", text: "HTML elements are represented by tags. Here are some common ones:" },
        { type: "ul", items: ["<html> - root element", "<head> - metadata", "<body> - page content", "<p> - paragraph", "<a> - link"] },
        { type: "code", code: "<!doctype html>\n<html>\n  <head>\n    <title>My page</title>\n  </head>\n  <body>\n    <p>Hello world</p>\n  </body>\n</html>" },
      ],

      // Chapter 2
      [
        { type: "h1", text: "Styling with CSS" },
        { type: "p", text: "CSS (Cascading Style Sheets) controls the look and layout of web pages." },
        { type: "h2", text: "Selectors & Properties" },
        { type: "p", text: "You can target elements with selectors and assign properties like color, font-size, margin, etc." },
        { type: "ol", items: ["Selector types: element, class, id", "Specificity rules", "Box model: margin, border, padding, content"] },
        { type: "code", code: "p { color: #333; font-size: 16px; }\n.container { margin: 0 auto; max-width: 1200px; }" },
      ],

      // Chapter 3
      [
        { type: "h1", text: "JavaScript Basics" },
        { type: "p", text: "JavaScript is the language for adding behavior to web pages: responding to events, manipulating the DOM, and handling data." },
        { type: "h2", text: "Core Concepts" },
        { type: "ul", items: ["Variables & types", "Functions", "Control flow (if/for/while)", "DOM manipulation", "Events"] },
        { type: "p", text: "Example: a simple click handler that changes text:" },
        { type: "code", code: "document.getElementById('btn').addEventListener('click', () => {\n  document.getElementById('msg').textContent = 'Clicked!';\n});" },
      ],
    ],
  },

  // you can also add numeric keys if you prefer:
  "1": {
    chapters: [
      /* same structure or references to course1 above */
    ],
  },
};

export default notesData;
