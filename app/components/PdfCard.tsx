'use client';

import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

export default function PdfCard({ file }: { file: string }) {
  return (
    <div className="border-2 border-black rounded-lg p-4">
      <Document
        file={file}
        loading="Loading..."
        error="Failed to load PDF file."
      >
        <Page pageNumber={1} width={420} />
      </Document>
    </div>
  );
}
