const PDFDocument = require('pdfkit');


function generatePDF(req, res, next) {
  const doc = new PDFDocument();
  var filename = 'test.pdf';
  // Setting response to 'attachment' (download).
  // If you use 'inline' here it will automatically open the PDF
  res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"');
  res.setHeader('Content-type', 'application/pdf');
  const content = 'Signed :)';
  doc.y = 300;
  doc.text(content, 50, 50);
  doc.pipe(res);
  doc.end()
}

module.exports = generatePDF;
