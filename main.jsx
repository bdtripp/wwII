import $ from 'jquery'; 
import React from 'react';
import ReactDOM from 'react-dom';
import SurveyList from './SurveyList.jsx';
import ResponseList from './ResponseList.jsx';
import * as csv from 'jquery-csv';

$(
  function() {
    var surveys;
    var questionnaires;
    var responses;
    
    if (window.location.pathname.includes("surveys.html")) {
      $.when(
        $.get("data/survey_sample_data.csv", data => {
          surveys = csv.toObjects(data);
          console.log("Surveys: ", surveys);
        }), 
        $.get("data/questionnaire_sample_data.csv", data => {
          questionnaires = csv.toObjects(data);
          console.log("Questionnaires: ", questionnaires);
        })
      ).done(showSurveys);
    }
    
    if (window.location.pathname.includes("responses.html")) {
      $.when(
        $.get("data/survey_sample_data.csv", data => {
          surveys = csv.toObjects(data);
          console.log("Surveys: ", surveys);
        }), 
        $.get("data/questionnaire_sample_data.csv", data => {
          questionnaires = csv.toObjects(data);
          console.log("Questionnaires: ", questionnaires);
        }),
        $.get("data/response_images_sample_data.csv", data => {
          responses = csv.toObjects(data);
          console.log("Responses: ", responses);
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
          <ResponseList surveys={surveys} questionnaires={questionnaires} responses={responses} />
        </div>,
        document.getElementById('root')
      );
    }
  }
)
