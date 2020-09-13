import React from 'react';
import ReactDOM from 'react-dom';
import QuestionnaireImage from './QuestionnaireImage.jsx';

export default class QuestionnaireImageList extends React.Component {
  
  render() {
    var params = new URLSearchParams(location.search);
    var questionnaireId = params.get('questionnaireId');
    
    var filteredQuestions = this.props.questions.filter(question => {
      if (question.QUESTIONS_parent_id == questionnaireId) {
        return true;
      }
    });
    
    var filteredQuestionsIds = filteredQuestions.map(question => question.QUESTIONS_identifier);
    
    var filteredResponses = this.props.responses.filter(response => {
      return (filteredQuestionsIds.indexOf(response.RESPONSES_question_id) > -1);
    });
    
    var filteredImages = Array.from(new Set(filteredResponses.map(response => response.RESPONSES_image)));
        
    var filteredAnswers = this.props.answers.filter(answer => {
      return (filteredQuestionsIds.indexOf(answer.ANSWER_question_id) > -1);
    });
    
    var filteredQuestionnaire = this.props.questionnaires.filter(questionnaire => {
      if (questionnaire.QUESTIONNAIRES_identifier == questionnaireId) {
        return true;
      }
    })[0];
    
    var filteredSurvey = this.props.surveys.filter(survey => {
      if (survey.SURVEYS_identifier == filteredQuestionnaire.QUESTIONNAIRES_survey_identifier) {
        return true;
      }
    })[0];
    
    var images = filteredImages.map(image => {
      return (
        <QuestionnaireImage key={image} image={image} />
      );
    });
    
    console.log("Filtered Survey: ", filteredSurvey);
    console.log("Filtered Questionnaire: ", filteredQuestionnaire);
    console.log("Filtered Questions: ", filteredQuestions);
    console.log("Filtered Answers: ", filteredAnswers);
    console.log("Filtered Responses: ", filteredResponses);
    console.log("Images: ", filteredImages);
    
    if(images.length > 0) {
      return (
        <div>
          <h3>{filteredSurvey.SURVEYS_topics} ({filteredQuestionnaire.QUESTIONNAIRES_name})</h3>
          <div className="response_list">
            {images}
          </div>   
        </div>                               
      ); 
    } else {
      return (
        <div>
          <h3>{filteredSurvey.SURVEYS_topics} ({filteredQuestionnaire.QUESTIONNAIRES_name})</h3>
          <div className="response_list">
            <p>Sorry, there are currently no responses to view for these questions.</p>
          </div>   
        </div>                               
      ); 
    }
    
    
  }
}