import React from 'react';
import QuestionnaireImageList from './ResponseList.jsx';

export default class Questionnaire extends React.Component {
  render() {
    var questionnaire = this.props.questionnaire;
    var responses = this.props.responses;
    
    return (
      <div className="questionnaire">
        <a href={"responses.html?questionId=" + questionnaire.QUESTIONNAIRES_identifier} target="_blank">{questionnaire.QUESTIONNAIRES_name ? questionnaire.QUESTIONNAIRES_name : "No Name"}</a>
      </div>
    )
  }
}