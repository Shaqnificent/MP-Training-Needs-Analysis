import { useState } from 'react'
import { Link } from 'react-router-dom'
import './surveys.scss'
import Course from '../../../../components/Course/index.jsx';
import Survey from '../../../../components/Survey/index.jsx';
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
            title: "Pre-Training Assessment",
            description: "Assess trainees' skills and knowledge before the training starts.",
            importance: "Low",
            questions: [
                "What is your current level of knowledge regarding the upcoming training topics?",
                "What are your expectations from this training?",
                "Are there specific areas you're interested in exploring more deeply?",
                "Are there specific areas you're interested in exploring more deeply?",
                "Are there specific areas you're interested in exploring more deeply?",
                "Are there specific areas you're interested in exploring more deeply?",
                "Are there specific areas you're interested in exploring more deeply?",
                "Are there specific areas you're interested in exploring more deeply?",
                "Do you have any prior experience with the topics covered in this training?"
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
        <div className='courseHeader'>
          <div style={{display: "flex", justifyContent: "Center", alignItems: "center", gap: "10px"}}> 
            <span style={{color: "black"}}>Create Survey</span>
            
            <span className='courseAdd'>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.84091 16.7386V0.647726H10.9091V16.7386H6.84091ZM0.829545 10.7273V6.65909H16.9205V10.7273H0.829545Z" fill="white"/>
                </svg>
            </span>
            
          </div>
        </div>
        <div className='courseContainerItems'>
          {surveys.map((survey, index) => (
              <Survey key={index} survey={survey} />
          ))}
        </div>
       
    </div>
  )
}

export default Surveys
