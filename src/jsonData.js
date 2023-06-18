export const jsonData = {
    "Title": "Mental Health Intake Form",
    "description": "It's okay, not to be okay",
    "logoPosition": "right",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "checkbox",
        "name": "Are you currently",
        "title": "Are you currently",
        "isRequired": true,
        "validators": [
         {
          "type": "expression"
         }
        ],
        "choices": [
         {
          "value": "Item 1",
          "text": "Working"
         },
         {
          "value": "Item 2",
          "text": "Student"
         },
         {
          "value": "Item 3",
          "text": "Unemployed"
         },
         {
          "value": "Item 4",
          "text": "Retired"
         },
         {
          "value": "Item 5",
          "text": "Disabled"
         }
        ],
        "maxSelectedChoices": 1
       },
       {
        "type": "checkbox",
        "name": "Are you currently2",
        "title": "Are you currently",
        "isRequired": true,
        "validators": [
         {
          "type": "expression"
         }
        ],
        "choices": [
         {
          "value": "Item 1",
          "text": "Engaged"
         },
         {
          "value": "Item 2",
          "text": "Married"
         },
         {
          "value": "Item 3",
          "text": "Divorced"
         },
         {
          "value": "Item 4",
          "text": "Single"
         },
         {
          "value": "Item 5",
          "text": "Widowed"
         }
        ],
        "maxSelectedChoices": 1
       },
       {
        "type": "boolean",
        "name": "Do you have any children",
        "visibleIf": "{Are you currently2} = ['Item 2']",
        "title": "Do you have any children",
        "requiredIf": "{Are you currently2} = ['Item 2']",
        "validators": [
         {
          "type": "expression"
         }
        ]
       },
       {
        "type": "text",
        "name": "Primary Care Physician",
        "title": "Primary Care Physician"
       },
       {
        "type": "text",
        "name": "Current Therapist / Counselor",
        "title": "Current Therapist / Counselor"
       },
       {
        "type": "text",
        "name": "Therapist's Phone Number",
        "useDisplayValuesInDynamicTexts": false,
        "title": "Therapist's Phone Number",
        "validators": [
         {
          "type": "numeric"
         }
        ],
        "inputType": "tel",
        "size": 11,
        "autocomplete": "tel",
        "maxLength": 11,
        "placeholder": "0331-1111111"
       },
       {
        "type": "multipletext",
        "name": "Please list the problem(s) which you are seeking help?",
        "title": "Please list the problem(s) which you are seeking help?",
        "isRequired": true,
        "items": [
         {
          "name": "text1",
          "title": "Problem 1"
         },
         {
          "name": "text2",
          "title": "Problem 2"
         }
        ]
       },
       {
        "type": "checkbox",
        "name": "Current Symptoms",
        "title": "Current Symptoms",
        "isRequired": true,
        "choices": [
         {
          "value": "Item 1",
          "text": "Depressed Mood"
         },
         {
          "value": "Item 2",
          "text": "Excessive Worry"
         },
         {
          "value": "Item 3",
          "text": "Avoidance"
         },
         {
          "value": "Item 4",
          "text": "Anxiety Attacks"
         },
         {
          "value": "Item 5",
          "text": "Racing thoughts"
         },
         {
          "value": "Item 6",
          "text": "Impulsivity"
         },
         {
          "value": "Item 7",
          "text": "Decreased need of sleep"
         }
        ],
        "showNoneItem": true
       },
       {
        "type": "boolean",
        "name": "Have you ever had feelings or thoughts that you didn't want to live?",
        "title": "Have you ever had feelings or thoughts that you didn't want to live?",
        "isRequired": true,
        "labelTrue": "No",
        "labelFalse": "Yes"
       },
       {
        "type": "boolean",
        "name": "Do you currently feel that you don't want to live?",
        "title": "Do you currently feel that you don't want to live?",
        "isRequired": true,
        "labelTrue": "No",
        "labelFalse": "Yes"
       },
       {
        "type": "dropdown",
        "name": "How often do you have these thoughts?",
        "title": "How often do you have these thoughts?",
        "isRequired": true,
        "choices": [
         {
          "value": "Item 1",
          "text": "Some times"
         },
         {
          "value": "Item 2",
          "text": "Many times"
         },
         {
          "value": "Item 3",
          "text": "Every time"
         },
         {
          "value": "Item 4",
          "text": "Never"
         }
        ]
       },
       {
        "type": "boolean",
        "name": "question9",
        "title": "Do you feel hopeless and/or worthless?",
        "isRequired": true,
        "labelTrue": "No",
        "labelFalse": "Yes"
       },
       {
        "type": "boolean",
        "name": "Have you ever tried to kill or harm yourself before?",
        "title": "Have you ever tried to kill or harm yourself before?",
        "isRequired": true,
        "labelTrue": "No",
        "labelFalse": "Yes"
       }
      ],
      "description": "Personal History"
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "boolean",
        "name": "Outpatient Treatment",
        "title": "Outpatient Treatment"
       },
       {
        "type": "boolean",
        "name": "Psychiatric Hospitalization",
        "title": "Psychiatric Hospitalization"
       },
       {
        "type": "multipletext",
        "name": "question13",
        "title": "Do you have any allergies?",
        "items": [
         {
          "name": "text1",
          "title": "1."
         },
         {
          "name": "text2",
          "title": "2."
         }
        ]
       },
       {
        "type": "comment",
        "name": "Current Medical Problems",
        "title": "Current Medical Problems"
       },
       {
        "type": "comment",
        "name": "Past medical problems, non-psychiatric hospitalization, or surgeries?",
        "title": "Past medical problems, non-psychiatric hospitalization, or surgeries?"
       },
       {
        "type": "boolean",
        "name": "Any medications?",
        "title": "Any medications?",
        "isRequired": true
       },
       {
        "type": "comment",
        "name": "List down the medications",
        "visibleIf": "{Any medications?} = true",
        "title": "List down the medications"
       },
       {
        "type": "checkbox",
        "name": "Has anyone in your family been diagnosed with or treated for:",
        "title": "Has anyone in your family been diagnosed with or treated for:",
        "choices": [
         {
          "value": "Item 1",
          "text": "Bipolar disorder"
         },
         {
          "value": "Item 2",
          "text": "Anxiety"
         },
         {
          "value": "Item 3",
          "text": "Suicide"
         },
         {
          "value": "Item 4",
          "text": "Depression"
         },
         {
          "value": "Item 5",
          "text": "Anger"
         },
         {
          "value": "Item 6",
          "text": "Schizophrenia"
         },
         {
          "value": "Item 7",
          "text": "Post-traumatic stress"
         },
         {
          "value": "Item 8",
          "text": "Alcohol abuse"
         },
         {
          "value": "Item 9",
          "text": "Other"
         }
        ],
        "showNoneItem": true
       }
      ],
      "title": "Page 2",
      "description": "Psychiatric History:"
     },
     {
      "name": "page3"
     }
    ],
    "firstPageIsStarted": true
   }