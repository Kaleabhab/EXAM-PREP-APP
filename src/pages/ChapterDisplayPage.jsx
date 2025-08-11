// src/pages/ChapterDisplayPage.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import notesData from "../data/notesData"; // path to the file above
import courses from "../data/courses"; // to validate course existence / titles

const BlockRenderer = ({ block, idx }) => {
  switch (block.type) {
    case "h1":
      return <h1 key={idx} className="text-3xl font-bold mb-3">{block.text}</h1>;
    case "h2":
      return <h2 key={idx} className="text-2xl font-semibold mt-4 mb-2">{block.text}</h2>;
    case "p":
      return <p key={idx} className="mb-3 text-gray-800 dark:text-gray-200">{block.text}</p>;
    case "ul":
      return (
        <ul key={idx} className="list-disc ml-6 mb-3 text-gray-800 dark:text-gray-200">
          {block.items.map((it, i) => <li key={i} className="mb-1">{it}</li>)}
        </ul>
      );
    case "ol":
      return (
        <ol key={idx} className="list-decimal ml-6 mb-3 text-gray-800 dark:text-gray-200">
          {block.items.map((it, i) => <li key={i} className="mb-1">{it}</li>)}
        </ol>
      );
    case "code":
      return (
        <pre key={idx} className="bg-gray-100 dark:bg-gray-800 p-3 rounded overflow-auto mb-3">
          <code className="whitespace-pre-wrap text-sm">{block.code}</code>
        </pre>
      );
    case "blockquote":
      return <blockquote key={idx} className="border-l-4 pl-4 italic text-gray-600 dark:text-gray-300 mb-3">{block.text}</blockquote>;
    case "img":
      return <img key={idx} src={block.src} alt={block.alt || ""} className="my-4 rounded shadow-md max-w-full" />;
    default:
      return null;
  }
};

const ChapterDisplayPage = () => {
  const { courseId, chapterIndex } = useParams();
  const navigate = useNavigate();

  // validate and convert chapterIndex (route uses 1-based numbering)
  const chapterNum = parseInt(chapterIndex, 10);
  if (isNaN(chapterNum) || chapterNum < 1) {
    return (
      <div className="p-8">
        <p>Invalid chapter index.</p>
        <button onClick={() => navigate(-1)} className="mt-4 text-blue-600">Go back</button>
      </div>
    );
  }

  // Try both "course1" and "1" style keys
  const courseKey1 = `course${courseId}`;
  const courseNotes = notesData[courseKey1] || notesData[String(courseId)];

  // Optional: check the official courses list to ensure course exists
  const courseExists = courses.some(c => String(c.id) === String(courseId));
  if (!courseExists) {
    return (
      <div className="p-8">
        <h2 className="text-xl font-bold text-red-600 mb-2">Course Not Found</h2>
        <p>The course with id <code>{courseId}</code> does not exist in your courses list.</p>
        <button onClick={() => navigate(-1)} className="mt-4 text-blue-600">Go back</button>
      </div>
    );
  }

  if (!courseNotes) {
    return (
      <div className="p-8">
        <h2 className="text-xl font-bold text-red-600 mb-2">Notes Not Found</h2>
        <p>No note data found for course <code>{courseId}</code>. Make sure notesData includes that key.</p>
        <button onClick={() => navigate(-1)} className="mt-4 text-blue-600">Go back</button>
      </div>
    );
  }

  const chapterArrayIndex = chapterNum - 1;
  const chapterBlocks = courseNotes.chapters?.[chapterArrayIndex];

  if (!chapterBlocks) {
    return (
      <div className="p-8">
        <h2 className="text-xl font-bold text-red-600 mb-2">Chapter Not Found</h2>
        <p>No chapter at index {chapterNum} for course {courseId}.</p>
        <button onClick={() => navigate(-1)} className="mt-4 text-blue-600">Go back</button>
      </div>
    );
  }

  return (
    <div className="p-8 bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen max-w-3xl mx-auto">
      <button onClick={() => navigate(-1)} className="mb-6 text-blue-600 hover:underline flex items-center gap-2">
        <FiArrowLeft /> Back to Chapters
      </button>

      <div className="prose dark:prose-invert max-w-none">
        {chapterBlocks.map((block, idx) => (
          <BlockRenderer key={idx} block={block} idx={idx} />
        ))}
      </div>
    </div>
  );
};

export default ChapterDisplayPage;
