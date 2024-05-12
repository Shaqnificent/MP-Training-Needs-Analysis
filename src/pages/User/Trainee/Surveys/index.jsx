import { useState } from 'react'
import { Link } from 'react-router-dom'
import './surveys.scss'
import Course from '../../../../components/Course/index.jsx';
import Survey from '../../../../components/Trainee/Survey';
function Surveys() {
  const surveys = [
    {
        title: "Trainee Feedback Survey",
        description: "A survey to gather feedback from trainees about their training experience.",
        importance: "High",
        questions: [
            "How satisfied are you with the training material?",
            "How satisfied are you with the training material?",
            "Was the pace of the course appropriate for your learning?",
            "How effective was the instructor?",
            "What improvements would you suggest?"
        ]
    },
    {
        title: "Post-Training Evaluation",
        description: "Evaluate the usefulness of the training and its applicability to your job.",
        importance: "Medium",
        questions: [
            "How relevant was the training to your current role?",
            "Have you applied the learned skills in your work?",
            "What was the most valuable part of the training?",
            "What was the most valuable part of the training?",
            "What was the most valuable part of the training?",
            "What was lacking in the training?"
        ]
    },
    {
        title: "Training Course Improvement Survey",
        description: "Survey to collect suggestions for improving future training sessions.",
        importance: "High",
        questions: [
            "How would you rate the overall structure of the course?",
            "What additional topics would you like to see included in the course?",
            "How can the interaction during the course be improved?",
            "Provide any specific feedback on course materials and resources."
        ]
    }
];
  return (
    <div className='survContainer'>
        <div className='courseContainerItems'>
          {surveys.map((survey, index) => (
              <Survey key={index} survey={survey} />
          ))}
        </div>
    </div>
  )
}

export default Surveys
