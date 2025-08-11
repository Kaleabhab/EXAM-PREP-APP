const exams = [
  {
    id: 1,
    title: "Intro to Web Dev",
    description: "Build your first website with HTML, CSS & JavaScript",
    level: "Beginner",
    icon: "🌐",
    color: "blue",
    route: "/exams/1/chapters",
    years: ["2012", "2013", "2014", "2015", "2016", "2017"],
    units: ["Intro to HTML", "Styling with CSS", "JavaScript Basics"],
    questions: [
      {
        year: "2012",
        unit: "Intro to HTML",
        question: "What is 2 + 2?",
        options: ["7", "3", "4", "5"],
        correctAnswer: "4",
        explanation: ""
      },
      {
        year: "2012",
        unit: "Styling with CSS",
        question: "Which keyword was introduced in ES6 for block-scoped variables?",
        options: ["var", "const", "let", "define"],
        correctAnswer: "let",
        explanation: "`let` and `const` were introduced in ES6 for block-scoped variables."
      },
      {
        year: "2012",
        unit: "JavaScript Basics",
        question: "Which keyword was introduced in ES6 for block-scoped variables?",
        options: ["var", "const", "let", "define"],
        correctAnswer: "let",
        explanation: "`let` and `const` were introduced in ES6 for block-scoped variables."
      },
      {
        year: "2013",
        unit: "Intro to HTML",  // ✅ fixed from "chapter"
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: "2",
        explanation: ""
      }
    ]
  },
  {
    id: 2,
    title: "React Fundamentals",
    description: "Master components, hooks, and state management",
    level: "Intermediate",
    icon: "⚛️",
    color: "purple",
    route: "/exams/2/chapters",
    years: ["2012", "2013", "2014", "2015", "2016", "2017"],
    units: ["JSX & Components", "React Hooks", "State Management"],
    questions: [
      {
        year: "2015",
        unit: "JSX & Components",
        question: "What does JSX stand for?",
        options: ["JavaScript XML", "Java Syntax Extension", "JavaScript Extension", "JSX is not an acronym"],
        correctAnswer: "JavaScript XML",
        explanation: "JSX stands for JavaScript XML."
      },
      {
        year: "2016",
        unit: "React Hooks",
        question: "Which hook is used for side effects in React?",
        options: ["useEffect", "useState", "useContext", "useReducer"],
        correctAnswer: "useEffect",
        explanation: "`useEffect` is used for handling side effects in function components."
      }
    ]
  },
  {
    id: 3,
    title: "JavaScript Mastery",
    description: "Deep dive into ES6+ and advanced concepts",
    level: "Advanced",
    icon: "📜",
    color: "orange",
    route: "/exams/3/chapters",
    years: ["2012", "2013", "2014", "2015", "2016", "2017"],
    units: ["ES6+", "Async JS", "Design Patterns"],
    questions: [
      {
        year: "2016",
        unit: "ES6+",
        question: "Which keyword was introduced in ES6 for block-scoped variables?",
        options: ["var", "const", "let", "define"],
        correctAnswer: "let",
        explanation: "`let` and `const` were introduced in ES6 for block-scoped variables."
      },
      
      {
        year: "2017",
        unit: "Async JS",
        question: "What does `async` function always return?",
        options: ["Number", "Promise", "String", "Object"],
        correctAnswer: "Promise",
        explanation: "An async function always returns a Promise."
      }
    ]
  },
  {
    id: 4,
    title: "UI/UX Design",
    description: "Create beautiful, intuitive interfaces",
    level: "Beginner",
    icon: "🎨",
    color: "green",
    route: "/exams/4/chapters",
    years: ["2012", "2013", "2014", "2015", "2016", "2017"],
    units: ["UX Principles", "Wireframing", "Design Systems"],
    questions: [
      {
        year: "2014",
        unit: "UX Principles",
        question: "Which is a core principle of UX design?",
        options: ["Confusion", "Accessibility", "Delay", "Ambiguity"],
        correctAnswer: "Accessibility",
        explanation: "Accessibility is a key UX principle for inclusiveness."
      },
      {
        year: "2015",
        unit: "Wireframing",
        question: "What is a wireframe?",
        options: ["A finished UI", "A prototype", "A layout skeleton", "A CSS framework"],
        correctAnswer: "A layout skeleton",
        explanation: "Wireframes represent the layout structure without design details."
      }
    ]
  },
  {
    id: 5,
    title: "Node.js Backend",
    description: "Build robust server applications",
    level: "Intermediate",
    icon: "🔙",
    color: "pink",
    route: "/exams/5/chapters",
    years: ["2012", "2013", "2014", "2015", "2016", "2017"],
    units: ["Node Basics", "Express.js", "APIs & Middleware"],
    questions: [
      {
        year: "2016",
        unit: "Node Basics",
        question: "Which module is used to create a server in Node.js?",
        options: ["net", "http", "fs", "url"],
        correctAnswer: "http",
        explanation: "`http` module helps create a basic web server."
      },
      {
        year: "2017",
        unit: "Express.js",
        question: "What does `req` stand for in Express?",
        options: ["response", "request", "require", "record"],
        correctAnswer: "request",
        explanation: "`req` represents the HTTP request in Express."
      }
    ]
  },
  {
    id: 6,
    title: "Database Design",
    description: "Learn SQL and relational databases",
    level: "Intermediate",
    icon: "🗃️",
    color: "indigo",
    route: "/exams/6/chapters",
    years: ["2012", "2013", "2014", "2015", "2016", "2017"],
    units: ["SQL Basics", "Normalization", "Joins & Queries"],
    questions: [
      {
        year: "2013",
        unit: "SQL Basics",
        question: "Which SQL command is used to retrieve data?",
        options: ["GET", "SELECT", "RETRIEVE", "FETCH"],
        correctAnswer: "SELECT",
        explanation: "`SELECT` is used to retrieve data from a database."
      },
      {
        year: "2015",
        unit: "Normalization",
        question: "What is the goal of database normalization?",
        options: ["Increase redundancy", "Improve performance", "Reduce data redundancy", "Simplify UI"],
        correctAnswer: "Reduce data redundancy",
        explanation: "Normalization reduces data redundancy and improves integrity."
      }
    ]
  }
];



export default exams;
