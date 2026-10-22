import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Set worker source to unpkg for correct rendering
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface Props {
  url: string;
}

export default function PDFReader({ url }: Props) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="flex flex-col items-center p-6 bg-slate-50 rounded-lg">
      <div className="mb-6 flex flex-wrap items-center justify-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-slate-200">
        <button 
          onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))} 
          disabled={pageNumber <= 1}
          className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded text-sm disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-sm font-medium">Page {pageNumber} of {numPages}</span>
        <button 
          onClick={() => setPageNumber(prev => Math.min(prev + 1, numPages))} 
          disabled={pageNumber >= numPages}
          className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded text-sm disabled:opacity-50"
        >
          Next
        </button>
        <div className="h-6 w-px bg-slate-300 mx-2" />
        <button 
          onClick={() => setScale(prev => Math.max(prev - 0.1, 0.5))}
          className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded text-sm"
        >
          Zoom Out
        </button>
        <button 
          onClick={() => setScale(prev => Math.min(prev + 0.1, 2))}
          className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded text-sm"
        >
          Zoom In
        </button>
      </div>
      <div className="border border-slate-200 shadow-lg bg-white overflow-auto max-w-full">
        <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} scale={scale} />
        </Document>
      </div>
    </div>
  );
}
