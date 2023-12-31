// import React from "react";
// import { Model } from "survey-core";
// import { Survey } from "survey-react-ui";
// import "survey-core/defaultV2.min.css";
// import "../index.css";
// import { jsonData } from "../jsonData";
// // import { SurveyPDF } from "survey-pdf";
// import * as SurveyPDF from "survey-pdf";
// import jsPDF from "jspdf";

// function SurveyComponent() {

//     function createSurveyPdfModel(surveyModel) {
//         let pdfWidth = !!surveyModel && surveyModel.pdfWidth ? surveyModel.pdfWidth : 210;
//         let pdfHeight = !!surveyModel && surveyModel.pdfHeight ? surveyModel.pdfHeight : 297;
//         let options = {
//             fontSize: 14,
//             fontName: "Arial",
//             margins: {
//                 left: 10,
//                 right: 10,
//                 top: 10,
//                 bot: 10
//             },
            
            
//             format: [pdfWidth, pdfHeight],
//             flatten: true // Add the flatten option to make the PDF read-only
//         };
//         const surveyPDF = new SurveyPDF.SurveyPDF(jsonData, options);
//         if (surveyModel) {
//             surveyPDF.data = surveyModel.data;
//         }
        
//         return surveyPDF;
//     }
    
//     const survey = new Model(jsonData);
//     var doc = new jsPDF();
//     doc.text(`Javeria Lodhi`, 10, 20);
//     survey.onComplete.add((sender, options) => {
//         // console.log(JSON.stringify(sender.data, null, 3));
//         survey.data=sender.data;
//         const data =createSurveyPdfModel(survey);
//         const finalData = JSON.stringify(survey.data, null, 3)
//         // console.log({data});
//         console.log(finalData);
//     });
    

//     return (
//     <>
//     <Survey model={survey} />
   
//     </>
    
//     );
// }

// export default SurveyComponent;


import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "../index.css";
import { jsonData } from "../jsonData";
import * as SurveyPDF from "survey-pdf";
import jsPDF from "jspdf";
// import pdfForm from './pdfForm'
import { uploadFile } from 'react-s3';
import { Buffer } from "buffer";
// const pdfForm = require('./pdfForm')

window.Buffer = window.Buffer || Buffer;


function createSurveyPdfModel(surveyModel) {
  let pdfWidth = !!surveyModel && surveyModel.pdfWidth ? surveyModel.pdfWidth : 210;
  let pdfHeight = !!surveyModel && surveyModel.pdfHeight ? surveyModel.pdfHeight : 297;
  let options = {
    fontSize: 14,
    fontName: "Arial",
    margins: {
      left: 10,
      right: 10,
      top: 10,
      bot: 10
    },
    format: [pdfWidth, pdfHeight],
    flatten: true // Add the flatten option to make the PDF read-only
  };
  const surveyPDF = new SurveyPDF.SurveyPDF(jsonData, options);
  if (surveyModel) {
    surveyPDF.data = surveyModel.data;
  }
  return surveyPDF;
}


function SurveyComponent() {
  const survey = new Model(jsonData);

  const handleClick = async (event) => {
    event.preventDefault();

    createSurveyPdfModel(survey);
    const finalData = survey.data;
    console.log(finalData);

    const doc = new jsPDF();
    doc.setFont("Arial", "normal");

    const questions = [
      { question: "Q: Are you currently", key: "Are you currently" },
      { question: "Q: Are you currently2", key: "Are you currently2" },
      { question: "Q: Do you have any children", key: "Do you have any children" },
      { question: "Q: Primary Care Physician", key: "Primary Care Physician" },
      { question: "Q: Current Therapist / Counselor", key: "Current Therapist / Counselor" },
      { question: "Q: Therapist's Phone Number", key: "Therapist's Phone Number" },
      { question: "Q: Please list the problem(s) which you are seeking help?", key: "Please list the problem(s) which you are seeking help?" },
      { question: "Q: Current Symptoms", key: "Current Symptoms" },
      { question: "Q: Have you ever had feelings or thoughts that you didn't want to live?", key: "Have you ever had feelings or thoughts that you didn't want to live?" },
      { question: "Q: Do you currently feel that you don't want to live?", key: "Do you currently feel that you don't want to live?" },
      { question: "Q: How often do you have these thoughts?", key: "How often do you have these thoughts?" },
      { question: "Q: Do you feel hopeless and/or worthless?", key: "Do you feel hopeless and/or worthless?" },
      { question: "Q: Have you ever had feelings or thoughts that you didn't want to live?", key: "Have you ever had feelings or thoughts that you didn't want to live?" },
      { question: "Q: Outpatient Treatment", key: "Outpatient Treatment" },
      { question: "Q: Psychiatric Hospitalization", key: "Psychiatric Hospitalization" },
      { question: "Q: Do you have any allergies?", key: "Do you have any allergies?" },
      { question: "Q: Current Medical Problems", key: "Current Medical Problems" },
      { question: "Q: Past medical problems, non-psychiatric hospitalization, or surgeries?", key: "Past medical problems, non-psychiatric hospitalization, or surgeries?" },
      { question: "Q: Any medications?", key: "Any medications?" },
      { question: "Q: List down the medications", key: "List down the medications" },
      { question: "Q: Has anyone in your family been diagnosed with or treated for:", key: "Has anyone in your family been diagnosed with or treated for:" },      
     // { question: "Q: List down the medications", key: "List down the medications" },
      
      
      // Add more questions as needed
    ];

    let yPosition = 10;
    let pageHeight = doc.internal.pageSize.getHeight();

    for (let i = 0; i < questions.length; i++) {
      const { question, key } = questions[i];

      doc.text(question, 10, yPosition + 10);
      const answer = finalData[key];
      if (Array.isArray(answer)) {
        for (let j = 0; j < answer.length; j++) {
          if (yPosition + 20 <= pageHeight) {
            doc.text(`${answer[j]}`, 10, yPosition + 20);
            yPosition += 10;
          } else {
            doc.addPage();
            yPosition = 10;
            doc.text(question, 10, yPosition + 10);
            doc.text(`${answer[j]}`, 10, yPosition + 20);
            yPosition += 10;
          }
        }
      } else {
        if (yPosition + 20 <= pageHeight) {
          doc.text(`A: ${answer}` ? `${answer}` : "No answer", 10, yPosition + 20);
          yPosition += 10;
        } else {
          doc.addPage();
          yPosition = 10;
          doc.text(question, 10, yPosition + 10);
          doc.text(`A: ${answer}` ? `${answer}` : "No answer", 10, yPosition + 20);
          yPosition += 10;
        }
      }

      yPosition += 20;
    }

        const pdfData = doc.output('arraybuffer');

        const S3_BUCKET = process.env.REACT_APP_S3_BUCKET;
        const objectKey = 'again-data';

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
        console.log('PDF uploaded ');
        } catch (error) {
        console.error(error);
        }

    };

  return (
    <>
      <Survey model={survey} />
      <button onClick={handleClick}>Save</button>
    </>
  );
}

export default SurveyComponent;
