import $ from 'jquery'; 
import React from 'react';
import ReactDOM from 'react-dom';
import SurveyList from './SurveyList.jsx';
import QuestionnaireImageList from './QuestionnaireImageList.jsx';
import * as csv from 'jquery-csv';

$(
  function() {
    var surveys;
    var questionnaires;
    var responses;
    var questions;
    var answers;
    
    if (window.location.pathname.includes("surveys.html")) {
      $.when(
        $.get("data/surveys.csv", data => {
          surveys = csv.toObjects(data);
          console.log("Surveys: ", surveys);
        }), 
        $.get("data/questionnaires.csv", data => {
          questionnaires = csv.toObjects(data);
          console.log("Questionnaires: ", questionnaires);
        })
      ).done(showSurveys);
    }
    
    if (window.location.pathname.includes("responses.html")) {
      $.when(
        $.get("data/surveys.csv", data => {
          surveys = csv.toObjects(data);
          console.log("Surveys: ", surveys);
        }), 
        $.get("data/questionnaires.csv", data => {
          questionnaires = csv.toObjects(data);
          console.log("Questionnaires: ", questionnaires);
        }),
        $.get("data/responses.csv", data => {
          responses = csv.toObjects(data);
          console.log("Responses: ", responses);
        }),
        $.get("data/questions.csv", data => {
          questions = csv.toObjects(data);
          console.log("Questions: ", questions);
        }),
        $.get("data/answers.csv", data => {
          answers = csv.toObjects(data);
          console.log("Answers: ", answers);
        })
      ).done(showResponses);
    }
    
    function showSurveys() {
      ReactDOM.render(
        <div>
          <h2>Surveys</h2>
          <SurveyList surveys={surveys} questionnaires={questionnaires} />
        </div>,
        document.getElementById('root')
      );
    }
    
    function showResponses() {
      ReactDOM.render(
        <div>
          <h2>Responses</h2>
          <QuestionnaireImageList surveys={surveys} questionnaires={questionnaires} responses={responses} questions={questions} responses={responses} answers={answers} />
        </div>,
        document.getElementById('root')
      );
    }
  }
)
