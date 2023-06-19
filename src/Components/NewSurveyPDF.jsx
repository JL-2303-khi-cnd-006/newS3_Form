import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import { uploadFile } from 'react-s3';
import { Buffer } from "buffer";
import SurveyComponent from './SurveyComponent';
import { jsonData } from "../jsonData";

window.Buffer = window.Buffer || Buffer;

const SurveyPDF = () => {
    const formRef = useRef(null);

    const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    // const name = formData.get('name');
    // const lastName = formData.get('lastName');
    // const email = formData.get('email');
    
    const doc = new jsPDF();
    doc.text('Form Data', 10, 10);
    // doc.text(`Name: ${name}`, 10, 20);
    // doc.text(`Last Name: ${lastName}`, 10, 30);
    // doc.text(`Email: ${email}`, 10, 40);
    // doc.text(`${SurveyComponent.arguments} `, 10, 20);
    doc.text(`JSON Data: `, 10, 30);
    doc.text(``, 10, 40); // Add a label for the JSON data
    doc.text(JSON.stringify(jsonData, null, 2), 10, 50);

    // let yOffset = 40;
    // Object.entries(jsonData).forEach(([key, value]) => {
    //     const formattedValue = typeof value === 'object' ? JSON.stringify(value) : value;
    //     doc.text(`${key}: ${formattedValue}`, 10, yOffset);
    //     yOffset += 10;
    // });
    
    const pdfData = doc.output('arraybuffer');
    const base64PdfData = btoa(String.fromCharCode.apply(null, new Uint8Array(pdfData)));

    // const jsonData = {
    //     name: name,
    //     lastName: lastName,
    //     email: email,
    //     pdfData: base64PdfData,
    // };
      // console.log(process.env)
    const S3_BUCKET = process.env.REACT_APP_S3_BUCKET;
    const objectKey = 'survey-data';

    // const data = {
    // file: JSON.stringify(jsonData),
    // key: objectKey,
    // };

// Rest of the code remains the same
    const file = new File([pdfData], objectKey, { type: 'application/pdf' });
    
    const config = {
      bucketName: S3_BUCKET,
      region: process.env.REACT_APP_REGION,
      accessKeyId: process.env.REACT_APP_ACCESS_KEY,
      secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,

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
                {/* <button type="submit">Upload Form</button> */}
            </form>
                <SurveyComponent jsonData={jsonData} />
        </div>
    
    );
    };

export default SurveyPDF