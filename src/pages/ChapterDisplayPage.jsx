import React, { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiCopy, FiMaximize2, FiMinimize2, FiBookmark, FiShare2 } from "react-icons/fi";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from 'prism-react-renderer';
import notesData from "../data/notesData";
import courses from "../data/courses";
import { useTheme } from '../context/ThemeContext';

const BlockRenderer = ({ block, index }) => {
  const { isDarkMode } = useTheme();
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const codeRef = useRef(null);

  const blockVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const handleCopy = () => {
    if (block.type === 'code' && block.code) {
      navigator.clipboard.writeText(block.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: `Note Block: ${block.type}`,
        text: block.text || block.code || '',
        url: window.location.href,
      });
    } catch (err) {
      console.log('Sharing failed:', err);
    }
  };

  switch (block.type) {
    case "h1":
      return (
        <motion.h1
          variants={blockVariants}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="text-4xl font-bold mb-8 pt-10 text-gray-900 dark:text-white border-t border-gray-200 dark:border-gray-700"
        >
          {block.text}
        </motion.h1>
      );
    case "h2":
      return (
        <motion.h2
          variants={blockVariants}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="text-2xl font-semibold mt-12 mb-6 text-gray-800 dark:text-gray-200"
        >
          {block.text}
        </motion.h2>
      );
    case "p":
      return (
        <motion.p
          variants={blockVariants}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed text-lg"
        >
          {block.text}
        </motion.p>
      );
    case 'ul':
    case 'ol':
      return (
        <motion.div
          variants={blockVariants}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className={`${block.type === 'ul' ? 'list-disc' : 'list-decimal'} ml-8 mb-8`}
        >
          {block.items.map((item, i) => (
            <motion.li 
              key={i}
              whileHover={{ x: 5 }}
              className="mb-3 text-gray-700 dark:text-gray-300 pl-2 leading-relaxed"
            >
              {item}
            </motion.li>
          ))}
        </motion.div>
      );
      case "grid":
  return (
    <motion.div
      variants={blockVariants}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={`my-6 grid gap-4 ${block.columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}
    >
      {block.items.map((item, itemIndex) => (
        <motion.div
          key={itemIndex}
          whileHover={{ scale: 1.02 }}
          className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
        >
          {item.icon && (
            <div className="text-2xl mb-2">
              {item.icon}
            </div>
          )}
          {item.title && (
            <h3 className="font-semibold text-lg mb-1 text-gray-800 dark:text-gray-200">
              {item.title}
            </h3>
          )}
          {item.content && (
            <p className="text-gray-600 dark:text-gray-400">
              {item.content}
            </p>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
    case "code":
      return (
        <motion.div
          variants={blockVariants}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="relative my-8 group"
          ref={codeRef}
        >
          <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-t-lg border-b border-gray-200 dark:border-gray-700">
            <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
              {block.language || 'code'}
            </span>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400"
                aria-label={isExpanded ? "Collapse code" : "Expand code"}
              >
                {isExpanded ? <FiMinimize2 size={16} /> : <FiMaximize2 size={16} />}
              </button>
              <button
                onClick={handleCopy}
                className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400"
                aria-label="Copy code"
              >
                <FiCopy size={16} />
              </button>
            </div>
          </div>
          <SyntaxHighlighter
            language={block.language || 'javascript'}
            code={block.code}
            className={`rounded-b-lg text-sm !bg-gray-100 dark:!bg-gray-800 ${isExpanded ? 'max-h-[500px]' : 'max-h-96'} overflow-auto`}
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={className} style={style}>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    <span className="inline-block w-8 text-right pr-4 text-gray-400 select-none">
                      {i + 1}
                    </span>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </SyntaxHighlighter>
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-12 right-12 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg"
            >
              Copied!
            </motion.div>
          )}
        </motion.div>
      );
    case "blockquote":
      return (
        <motion.div
          variants={blockVariants}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="relative my-8 pl-6 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/10 rounded-r-lg py-4"
        >
          <blockquote className="italic text-gray-700 dark:text-gray-300">
            {block.text}
          </blockquote>
          {block.caption && (
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              — {block.caption}
            </p>
          )}
        </motion.div>
      );
      case "image":
  return (
    <motion.figure
      variants={blockVariants}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="my-8 flex flex-col items-center"
    >
      <img
        src={block.src}
        alt={block.alt || ""}
        className="rounded-lg shadow-lg max-w-full h-auto border border-gray-200 dark:border-gray-700"
        loading="lazy"
      />
      {block.caption && (
        <figcaption className="mt-3 text-sm text-center text-gray-500 dark:text-gray-400">
          {block.caption}
        </figcaption>
      )}
    </motion.figure>
  );
  case "tabs":
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <motion.div
      variants={blockVariants}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="my-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
    >
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        {block.tabs.map((tab, tabIndex) => (
          <button
            key={tabIndex}
            onClick={() => setActiveTab(tabIndex)}
            className={`px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === tabIndex
                ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-500 dark:border-blue-400"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="p-4">
        {block.tabs[activeTab].content.map((content, contentIndex) => (
          <BlockRenderer key={contentIndex} block={content} index={contentIndex} />
        ))}
      </div>
    </motion.div>
  );
  case "quiz":
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  return (
    <motion.div
      variants={blockVariants}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="my-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6"
    >
      <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
        {block.question}
      </h3>
      <div className="space-y-3">
        {block.options.map((option, optionIndex) => (
          <div
            key={optionIndex}
            onClick={() => {
              setSelectedOption(optionIndex);
              setShowExplanation(false);
            }}
            className={`p-3 rounded-lg cursor-pointer transition-colors ${
              selectedOption === optionIndex
                ? optionIndex === block.correctAnswer
                  ? "bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700"
                  : "bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700"
                : "bg-gray-50 dark:bg-gray-700/30 hover:bg-gray-100 dark:hover:bg-gray-700/50"
            }`}
          >
            {option}
          </div>
        ))}
      </div>
      {selectedOption !== null && (
        <button
          onClick={() => setShowExplanation(!showExplanation)}
          className="mt-4 text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center"
        >
          {showExplanation ? "Hide explanation" : "Show explanation"}
        </button>
      )}
      {showExplanation && block.explanation && (
        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-lg text-sm text-gray-700 dark:text-gray-300">
          {block.explanation}
        </div>
      )}
    </motion.div>
  );
  case "video":
  return (
    <motion.div
      variants={blockVariants}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="my-8 rounded-lg overflow-hidden shadow-lg bg-black"
    >
      <div className="relative pt-[56.25%]"> {/* 16:9 aspect ratio */}
        <video
          controls
          className="absolute top-0 left-0 w-full h-full"
          poster={block.thumbnail || ''}
        >
          <source src={block.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {block.caption && (
        <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400 p-2">
          {block.caption}
          {block.duration && (
            <span className="ml-2 text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
              {block.duration}
            </span>
          )}
        </figcaption>
      )}
    </motion.div>
  );
  
    case "img":
      return (
        <motion.figure
          variants={blockVariants}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="my-8 flex flex-col items-center"
        >
          <img
            src={block.src}
            alt={block.alt || ""}
            className="rounded-lg shadow-lg max-w-full border border-gray-200 dark:border-gray-700"
            loading="lazy"
          />
          {block.caption && (
            <figcaption className="mt-3 text-sm text-center text-gray-500 dark:text-gray-400">
              {block.caption}
            </figcaption>
          )}
        </motion.figure>
      );
    case 'divider':
      return (
        <motion.div
          variants={blockVariants}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="my-8 h-px bg-gray-200 dark:bg-gray-700 w-full"
        />
      );
    default:
      return (
        <motion.div
          variants={blockVariants}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="my-6 p-4 bg-yellow-50 dark:bg-yellow-900/10 border-l-4 border-yellow-400 rounded-r"
        >
          <p className="text-yellow-700 dark:text-yellow-300">
            Unsupported block type: {block.type}
          </p>
        </motion.div>
      );
  }
};

const ChapterDisplayPage = () => {
  const { courseId, chapterIndex } = useParams();
  const navigate = useNavigate();
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  // Validate and convert chapterIndex
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

  // Check if course exists
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
        <p>No note data found for course <code>{courseId}</code>.</p>
        <button onClick={() => navigate(-1)} className="mt-4 text-blue-600">Go back</button>
      </div>
    );
  }

  const chapterArrayIndex = chapterNum - 1;
  const chapterBlocks = courseNotes.chapters?.[chapterArrayIndex]?.blocks;

  if (!chapterBlocks) {
    return (
      <div className="p-8">
        <h2 className="text-xl font-bold text-red-600 mb-2">Chapter Not Found</h2>
        <p>No chapter at index {chapterNum} for course {courseId}.</p>
        <button onClick={() => navigate(-1)} className="mt-4 text-blue-600">Go back</button>
      </div>
    );
  }

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // Add your bookmark logic here (e.g., save to local storage or API)
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: `${courseNotes.meta.title} - Chapter ${chapterNum}`,
        text: `Check out this chapter from ${courseNotes.meta.title}`,
        url: window.location.href,
      });
    } catch (err) {
      console.error('Sharing failed:', err);
    }
  };

  return (
    <div className="p-8 bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen max-w-3xl mx-auto">
      <button 
        onClick={() => navigate(-1)} 
        className="mb-6 text-blue-600 hover:underline flex items-center gap-2"
      >
        <FiArrowLeft /> Back to Chapters
      </button>

      <div className="flex justify-end space-x-2 mb-4">
        <button
          onClick={handleBookmark}
          className={`p-2 rounded-full ${isBookmarked ? 'text-yellow-500' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
          aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
        >
          <FiBookmark fill={isBookmarked ? 'currentColor' : 'none'} />
        </button>
        <button
          onClick={handleShare}
          className="p-2 rounded-full text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          aria-label="Share chapter"
        >
          <FiShare2 />
        </button>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        {chapterBlocks.map((block, index) => (
          <BlockRenderer key={index} block={block} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ChapterDisplayPage;