import React from 'react';
import QuestionnaireImageList from './QuestionnaireImageList.jsx';

export default class Questionnaire extends React.Component {
  render() {
    var questionnaire = this.props.questionnaire;
    var responses = this.props.responses;
    
    return (
      <div className="questionnaire">
        <a href={"responses.html?questionnaireId=" + questionnaire.QUESTIONNAIRES_identifier}>{questionnaire.QUESTIONNAIRES_name ? questionnaire.QUESTIONNAIRES_name : "No Name"}</a>
      </div>
    )
  }
}