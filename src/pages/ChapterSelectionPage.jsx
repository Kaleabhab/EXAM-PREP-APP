import { useParams, useNavigate } from 'react-router-dom';
import courses from '../data/courses'; // Adjust path as needed

const ChapterSelectionPage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const course = courses.find(c => c.id === parseInt(courseId));

  if (!course) {
    return (
      <div className="p-6 text-red-500">
        Course not found.
        <button className="ml-4 text-blue-600 underline" onClick={() => navigate(-1)}>Go back</button>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">{course.icon} {course.title} - Chapters</h2>
      <ul className="space-y-4">
        {course.chapters.map((chapter, index) => (
          <li
            key={index}
            className="p-4 bg-white rounded shadow hover:bg-gray-100 cursor-pointer"
          >
            {chapter}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChapterSelectionPage;
