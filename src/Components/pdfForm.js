import jsPDF from "jspdf";

const pdfForm = (finalData) => {
    const doc = new jsPDF();
    doc.text("Are you currently", 10, 10);
    doc.text(`${finalData["Are_you_currently"][0]}`, 10, 20);
    doc.text("Are you currently2", 10, 10);
    doc.text(`${finalData["Are_you_currently2"][0]}`, 10, 20);
    doc.text("Primary Care Physician", 10, 10);
    doc.text(`${finalData["Primary Care Physician"]}`, 10, 20);
    doc.text("Please list the problem(s) which you are seeking help?", 10, 10, 
    `${finalData["Please list the problem(s) which you are seeking help?"]["Problem1"]}`, 10, 20);
    return doc.output('arraybuffer');
}

module.export = pdfForm