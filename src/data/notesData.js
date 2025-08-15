const notedata = {
  // Web Development Fundamentals Course
  1: {
    meta: {
      title: "Web Development Fundamentals",
      description: "Master HTML, CSS, and JavaScript basics",
      icon: "🌐",
      level: "Beginner",
      duration: "8 hours",
      lastUpdated: "2023-11-20",
      tags: ["frontend", "beginners"],
      thumbnail: "/thumbnails/webdev-fundamentals.jpg"
    },
    chapters: [
      {
        title: "HTML Essentials",
        duration: "90 min",
        blocks: [
          {
            type: "h1",
            text: "HTML Foundations",
            meta: { importance: "high" }
          },
          {
            type: "p",
            text: "HTML provides the structural framework for all web content."
          },
          {
            type: "video",
            src: "/videos/html-structure.mp4",
            duration: "4:15",
            caption: "Understanding Document Structure"
          },
          {
            type: "h2",
            text: "Core Elements"
          },
          {
            type: "grid",
            columns: 2,
            items: [
              {
                icon: "📄",
                title: "Document Structure",
                content: "<html>, <head>, <body> tags"
              },
              {
                icon: "📝",
                title: "Content Tags",
                content: "<p>, <h1>-<h6>, <div>, <span>"
              },
              {
                icon: "🖇️",
                title: "Links & Media",
                content: "<a>, <img>, <video>"
              },
              {
                icon: "📋",
                title: "Lists & Tables",
                content: "<ul>, <ol>, <table>"
              }
            ]
          },
          {
            type: "interactive",
            component: "CodePlayground",
            initialCode: `<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Welcome!</h1>
  <!-- Add your content here -->
</body>
</html>`,
            instructions: "Create a basic HTML page with heading and paragraph"
          }
        ]
      },
      {
        title: "CSS Styling",
        duration: "120 min",
        blocks: [
          {
            type: "h1",
            text: "Cascading Style Sheets"
          },
          {
            type: "image",
            src: "/images/css-box-model.png",
            alt: "CSS Box Model",
            caption: "The CSS Box Model: Margin, Border, Padding, Content"
          },
          {
            type: "tabs",
            tabs: [
              {
                title: "Selectors",
                content: [
                  {
                    type: "ul",
                    items: [
                      "Element: `p { }`",
                      "Class: `.my-class { }`",
                      "ID: `#my-id { }`",
                      "Attribute: `[type='text'] { }`"
                    ]
                  }
                ]
              },
              {
                title: "Properties",
                content: [
                  {
                    type: "ul",
                    items: [
                      "Layout: display, position, flexbox",
                      "Typography: font-family, line-height",
                      "Colors: color, background-color",
                      "Spacing: margin, padding"
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: "quiz",
            question: "Which CSS property controls text color?",
            options: ["font-color", "text-color", "color", "font-style"],
            correctAnswer: 2,
            explanation: "The 'color' property sets the foreground color of text."
          }
        ]
      },
      {
        title: "JavaScript Basics",
        duration: "150 min",
        blocks: [
          {
            type: "h1",
            text: "Introduction to JavaScript"
          },
          {
            type: "p",
            text: "JavaScript adds interactivity to web pages."
          },
          
          
        ]
      }
    ]
  },

  // Python Programming Course
  python101: {
    meta: {
      title: "Python Programming",
      description: "Learn Python from scratch",
      icon: "🐍",
      level: "Beginner",
      duration: "10 hours",
      tags: ["backend", "scripting"],
      thumbnail: "/thumbnails/python-fundamentals.jpg"
    },
    chapters: [
      {
        title: "Python Basics",
        blocks: [
          // Similar structured content for Python...
        ]
      }
    ]
  }
};

export default notedata;