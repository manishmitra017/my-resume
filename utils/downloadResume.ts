export const downloadResumeAsPDF = async () => {
  try {
    // Dynamic import to avoid SSR issues
    const html2pdf = (await import('html2pdf.js')).default;

    // Get the main content element
    const element = document.querySelector('main');

    if (!element) {
      console.error('Main content not found');
      alert('Unable to generate PDF. Please try again.');
      return;
    }

    const opt = {
      margin: 0.5,
      filename: 'Manish_Mitra_Resume.pdf',
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        logging: true,
        letterRendering: true,
        backgroundColor: '#111827'
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

    console.log('Starting PDF generation...');

    // Generate PDF
    await html2pdf().set(opt).from(element).save();

    console.log('PDF generated successfully');
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Failed to generate PDF. Please try again or contact support.');
  }
};
