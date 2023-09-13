'use client'
import React from 'react'

const Footer = () => {
  const handleDownload = () => {
    // Construct the path to the PDF file in the public directory
    const pdfPath = '/assets/CVFinal.pdf';

    // Create an anchor element to trigger the download
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'CVFinal.pdf';

    // Trigger a click event on the anchor element
    link.click();
  };
  return (
    
    <React.Fragment>
        <footer >
        <div className="hidden sm:block fixed bottom-4 right-4 z-80">
          <button  onClick={handleDownload} className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-full shadow-lg">
            <div className="p-2 flex space-x-2 items-center text-center">
              <div className="w-6 h-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              </div>
              <div>CV</div>
            </div>
          </button>
        </div>
        </footer>
    </React.Fragment>
  )
}

export default Footer