import html2pdf from 'html2pdf.js';

export const downloadResumeAsPDF = () => {
  // Get the main content element
  const element = document.querySelector('main');

  if (!element) {
    console.error('Main content not found');
    return;
  }

  const opt = {
    margin: 0.5,
    filename: 'Manish_Mitra_Resume.pdf',
    image: { type: 'jpeg' as const, quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      logging: false,
      letterRendering: true
    },
    jsPDF: {
      unit: 'in',
      format: 'a4',
      orientation: 'portrait' as const
    },
    pagebreak: {
      mode: ['avoid-all', 'css', 'legacy'],
      before: '.page-break-before',
      after: '.page-break-after'
    }
  };

  // Generate PDF
  html2pdf().set(opt).from(element).save();
};
