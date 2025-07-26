import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useParams } from "react-router-dom";
//import "react-pdf/dist/esm/Page/AnnotationLayer.css";
//import "pdfjs-dist/web/pdf_viewer.css";
//import "react-pdf/dist/esm/Page/TextLayer.css";
//import workerSrc from "pdfjs-dist/build/pdf.worker.entry";
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf-worker/pdf.worker.min.js";


// Configure worker
//pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
//pdfjs.GlobalWorkerOptions.workerSrc = workerSrc; // 👈 Use local worker

const ChapterDisplayPage = () => {
  const { courseId, chapterIndex } = useParams();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // Example: You can dynamically generate PDF path
 const pdfPath = `/pdfs/${courseId}/${chapterIndex}.pdf`;


  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const goToPrevPage = () =>
    setPageNumber((prev) => (prev > 1 ? prev - 1 : prev));
  const goToNextPage = () =>
    setPageNumber((prev) => (prev < numPages ? prev + 1 : prev));

  return (
    <div className="p-8 bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Chapter  {chapterIndex} {/* {parseInt(chapterIndex) + 1} */} </h1>

      <div className="flex justify-center mb-4">
        <button
          onClick={goToPrevPage}
          disabled={pageNumber <= 1}
          className="px-4 py-2 mr-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={goToNextPage}
          disabled={pageNumber >= numPages}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      <div className="flex justify-center">
        <Document
          file={pdfPath}
          onLoadSuccess={onDocumentLoadSuccess}
          loading="Loading PDF..."
          className="shadow-lg"
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>

      <p className="mt-4 text-center">
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};

export default ChapterDisplayPage;
