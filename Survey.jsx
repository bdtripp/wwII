import React from 'react';
import QuestionnaireList from './QuestionnaireList.jsx';

export default class Survey extends React.Component {
  render() {
    var survey = this.props.survey;
    var questionnaires = this.props.questionnaires;
    
    return (
        <div className="survey col-sm-6">
          <div className="nwidget ncontainer nlarge_box">
            <div className="panel panel-default box box-lg clearfix">
              <div className="panel-heading">
                <h3>{survey.SURVEYS_topics ? survey.SURVEYS_topics : "No Topic"}</h3>
              </div>
              <div className="panel-body">
                <p><b>Location: </b>{survey.SURVEYS_location}</p>
                <p><b>Date: </b>{survey.SURVEYS_date}</p>
                <p><b>Designation: </b>{survey.SURVEYS_designation}</p>
                <QuestionnaireList questionnaires={questionnaires} />
              </div>
            </div>
          </div>
        </div>
    )
  }
}