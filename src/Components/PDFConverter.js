import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import { uploadFile } from 'react-s3';
import { Buffer } from "buffer";
window.Buffer = window.Buffer || Buffer;

const PDFConverter = () => {
const formRef = useRef(null);

const handleSubmit = async (event) => {
event.preventDefault();

const formData = new FormData(event.target);
const name = formData.get('name');
const lastName = formData.get('lastName');
const email = formData.get('email');

const doc = new jsPDF();
doc.text('Form Data', 10, 10);
doc.text(`Name: ${name}`, 10, 20);
doc.text(`Last Name: ${lastName}`, 10, 30);
doc.text(`Email: ${email}`, 10, 40);

const pdfData = doc.output('arraybuffer');
const S3_BUCKET = 'surveyformtest';
const objectKey = 'form-data.pdf';
const file = new File([pdfData], objectKey, { type: 'application/pdf' });

const config = {
  bucketName: S3_BUCKET,
  region: 'us-east-1',
  accessKeyId: 'AKIATFEK3U2S3PZIR5UL',
  secretAccessKey: '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',
};

try {
  const response = await uploadFile(file, config);
  console.log(response);
  console.log('PDF uploaded to S3 successfully.');
} catch (error) {
  console.error(error);
}
};

return (
<div>
<form ref={formRef} onSubmit={handleSubmit}>
<label htmlFor="name">Name:</label>
<input type="text" id="name" name="name" required />

    <label htmlFor="lastName">Last Name:</label>
    <input type="text" id="lastName" name="lastName" required />

    <label htmlFor="email">Email:</label>
    <input type="email" id="email" name="email" required />

    <button type="submit">Convert to PDF</button>
  </form>
</div>
);
};

export default PDFConverter;
