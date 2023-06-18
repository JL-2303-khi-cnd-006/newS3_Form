import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "../index.css";
import { jsonData } from "../jsonData";
// import { SurveyPDF } from "survey-pdf";
import * as SurveyPDF from "survey-pdf";
import jsPDF from "jspdf";

function SurveyComponent() {

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
    
    const survey = new Model(jsonData);
    var doc = new jsPDF();
    doc.text(`Javeria Lodhi`, 10, 20);
    survey.onComplete.add((sender, options) => {
        // console.log(JSON.stringify(sender.data, null, 3));
        survey.data=sender.data;
        const data =createSurveyPdfModel(survey);
        const finalData = JSON.stringify(survey.data, null, 3)
        // console.log({data});
        console.log(finalData);
    });
    

    return (
    <>
    <Survey model={survey} />
   
    </>
    
    );
}

export default SurveyComponent;