import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase"; // Corrected relative path

const courses = [
  {
    id: 1,
    title: "Intro to Web Dev",
    description: "Build your first website with HTML, CSS & JavaScript",
    level: "Beginner",
    icon: "🌐",
    color: "blue",
    route: "/courses/1/chapters",
    completed: 10,
    total: 10,
    chapters: ["Intro to HTML", "Styling with CSS", "JavaScript Basics"]
  },
  {
    id: 2,
    title: "React Fundamentals",
    description: "Master components, hooks, and state management",
    level: "Intermediate",
    icon: "⚛️",
    color: "purple",
    route: "/courses/2/chapters",
    completed: 3,
    total: 10,
    chapters: ["JSX & Components", "React Hooks", "State Management"]
  },
  {
    id: 3,
    title: "JavaScript Mastery",
    description: "Deep dive into ES6+ and advanced concepts",
    level: "Advanced",
    icon: "📜",
    color: "orange",
    route: "/courses/3/chapters",
    completed: 3,
    total: 10,
    chapters: ["ES6+", "Async JS", "Design Patterns"]
  },
  {
    id: 4,
    title: "UI/UX Design",
    description: "Create beautiful, intuitive interfaces",
    level: "Beginner",
    icon: "🎨",
    color: "green",
    route: "/courses/4/chapters",
    completed: 3,
    total: 10,
    chapters: ["UX Principles", "Wireframing", "Design Systems"]
  },
  {
    id: 5,
    title: "Node.js Backend",
    description: "Build robust server applications",
    level: "Intermediate",
    icon: "🔙",
    color: "pink",
    route: "/courses/5/chapters",
    completed: 3,
    total: 10,
    chapters: ["Node Basics", "Express.js", "APIs & Middleware"]
  },
  {
    id: 6,
    title: "Database Design",
    description: "Learn SQL and relational databases",
    level: "Intermediate",
    icon: "🗃️",
    color: "indigo",
    route: "/courses/6/chapters",
    completed: 3,
    total: 10,
    chapters: ["SQL Basics", "Normalization", "Joins & Queries"]
  }
];

async function uploadCourses() {
  try {
    for (const course of courses) {
      await addDoc(collection(db, "courses"), course);
      console.log(`✅ Added course: ${course.title}`);
    }
  } catch (error) {
    console.error("❌ Failed to upload courses:", error);
  }
}

//Run this only ONCE, or comment it out after uploading to avoid duplicates
//uploadCourses();

export default courses;
