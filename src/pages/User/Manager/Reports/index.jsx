import { useState } from 'react'
import { Link } from 'react-router-dom'
import Chart from '../../../../components/Chart';
import './reports.scss'
function Reports() {
  const reports = {
    trainingParticipation: {
        title: 'Training Participation',
        data: [
            ['Department', 'Number of Trainees'],
            ['Engineering', 150],
            ['Marketing', 120],
            ['Sales', 130],
            ['HR', 90],
            ['Finance', 70]
        ]
    },
    skillGapAnalysis: {
        title: 'Skill Gap Closure',
        data: [
            ['Skill', 'Pre-Training Gap', 'Post-Training Gap'],
            ['Programming', 80, 30],
            ['Project Management', 70, 20],
            ['Design', 60, 25],
            ['Communication', 90, 50],
            ['Leadership', 85, 45]
        ]
    },
    trainingEffectiveness: {
        title: 'Training Effectiveness',
        data: [
            ['Course', 'Satisfaction Rating'],
            ['Introduction to Programming', 4.5],
            ['Advanced Project Management', 4.7],
            ['Graphic Design Fundamentals', 4.2],
            ['Effective Communication Skills', 4.8],
            ['Leadership for Managers', 4.6]
        ]
    },
    areasForImprovement: {
        title: 'Areas Needing Improvement',
        data: [
            ['Course', 'Improvement Needed'],
            ['Introduction to Programming', 'Advanced Topics'],
            ['Advanced Project Management', 'Practical Exercises'],
            ['Graphic Design Fundamentals', 'More Software Tools'],
            ['Effective Communication Skills', 'Follow-up Courses'],
            ['Leadership for Managers', 'Case Studies']
        ]
    }
};
const charts = Object.keys(reports).map(key => {
  const report = reports[key];
  let type = 'ColumnChart'; // Default type
  let options = {
      title: report.title,
      width: 600,
      height: 400
  };

  if (key === 'trainingParticipation') {
      type = 'PieChart';
  } else if (key === 'skillGapAnalysis') {
      type = 'BarChart';
      // Adjust options for BarChart
      options = {
          ...options,
          chartArea: { width: '50%' },
          hAxis: {
              title: 'Skill Gap',
              minValue: 0,
              format: '0' // Ensuring number formatting
          },
          vAxis: {
              title: 'Skills'
          },
          bars: 'horizontal' // Optional: Change to 'vertical' if preferred
      };
      // Transform the data to ensure numeric values are correctly processed
      report.data = report.data.map((item, index) => {
          if (index === 0) { // Header row remains unchanged
              return item;
          }
          return [
              item[0], // Skill name remains a string
              parseFloat(item[1]), // Convert Pre-Training Gap to float
              parseFloat(item[2]) // Convert Post-Training Gap to float
          ];
      });
  } else if (key === 'trainingEffectiveness') {
      type = 'ColumnChart';
  }

  return {
      type,
      data: report.data,
      options
  };
});


  return (
    <div className='reportsContainerParent'>
       <Chart charts={charts} />
    </div>
  )
}

export default Reports
