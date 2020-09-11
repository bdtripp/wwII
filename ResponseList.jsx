import React from 'react';
import ReactDOM from 'react-dom';
import Response from './Response.jsx';

export default class ResponseList extends React.Component {
  
  render() {
    var params = new URLSearchParams(location.search);
    var questionId = params.get('questionId');

    var responses = this.props.responses.filter(response => {
      if (response.QUESTIONS_parent_id == questionId) {
        return true;
      }
    });
    
    var questionnaire = this.props.questionnaires.filter(questionnaire => {
      if (questionnaire.QUESTIONNAIRES_identifier == questionId) {
        return true;
      }
    })[0];
    
    var survey = this.props.surveys.filter(survey => {
      if (survey.SURVEYS_identifier == questionnaire.QUESTIONNAIRES_survey_identifier) {
        return true;
      }
    })[0];
    
    responses = responses.map(response => {
      return (
        <Response key={response.RESPONSES_identifier} response={response} />
      );
    });
    
    return (
      <div>
        <h3>{survey.SURVEYS_topics} ({questionnaire.QUESTIONNAIRES_name})</h3>
        <div className="response_list">
          {responses}
        </div>   
      </div>                               
    ); 
  }
}