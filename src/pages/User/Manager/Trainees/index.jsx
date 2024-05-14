import { useState } from 'react'
import { Link } from 'react-router-dom'
import elipsis from '../../../../assets/trainee/elipsis.svg'
import search from '../../../../assets/trainee/search.svg'
import './trainees.scss'
import AddTraineeModal from '../../../../components/Trainee/AddTraineeModal'
import OptionsModal from '../../../../components/Trainee/OpenModal'
function Trainees() {
  const [courses, setCourses] = useState([
    {
        title: "Introduction to Programming",
        difficulty: "Beginner",
        hours: 30,
        topic: ["Programming Basics", "Python", "Problem Solving"], 
        link: "https://www.youtube.com/watch?v=Tn6-PIqc4UM"
    },
]);
  const [surveys, setSurveys] = useState([
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
]);

  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [trainees, setTrainees] = useState([
    { name: "Gary Black", role: "Manager", position: "Developer", projectCode: "Web1080", status: "Pending", priority: "High" },
    { name: "Anna Smith", role: "Trainee", position: "Designer", projectCode: "Design360", status: "Active", priority: "Medium" },
    { name: "Tom Brown", role: "Manager", position: "Project Manager", projectCode: "PM900", status: "Completed", priority: "Low" },
    { name: "Lisa Green", role: "Trainee", position: "Developer", projectCode: "Web1120", status: "Active", priority: "High" },
    { name: "Mark Lee", role: "Manager", position: "UI/UX Designer", projectCode: "UX1000", status: "Pending", priority: "High" },
    { name: "Jane Doe", role: "Trainee", position: "QA Analyst", projectCode: "QA1040", status: "Active", priority: "Medium" },
    { name: "John Davis", role: "Manager", position: "Data Scientist", projectCode: "Data20", status: "Completed", priority: "Low" },
    { name: "Sarah Miller", role: "Admin", position: "System Administrator", projectCode: "Sys500", status: "Pending", priority: "Medium" },
    { name: "Carlos Gomez", role: "Trainee", position: "Backend Developer", projectCode: "Dev300", status: "Active", priority: "High" },
    { name: "Emily Howard", role: "Admin", position: "Product Manager", projectCode: "PM950", status: "Completed", priority: "Low" }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTrainee, setSelectedTrainee] = useState(null);

    const openModal = (trainee) => {
      setSelectedTrainee(trainee);
      setIsModalOpen(true);
  };

  const closeModal = () => {
      setIsModalOpen(false);
      setSelectedTrainee(null);
  };

  const handleAssign = (type, item) => {
      console.log(`Assigning ${type} to ${selectedTrainee.name}:`, item.title);
      closeModal();
  };
  // Function to filter trainees based on input
  const filterTrainees = (search) => {
    return trainees.filter(trainee =>
        trainee.name.toLowerCase().includes(search.toLowerCase())
    );
};

  // Function to handle search input changes
  const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
  };
  const addTrainee = (trainee) => {
    setTrainees([...trainees, trainee]);
  };

  return (
    
    <div className='traineesContainer'>
      {isModalOpen && (
          <OptionsModal
            isOpen={isModalOpen}
            onClose={closeModal}
            surveys={surveys}
            courses={courses}
            onAssign={handleAssign}
          />
      )}
      <AddTraineeModal addTrainee={addTrainee} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <div className='filterContainer'>
        <div className="searchContainer">
          <input 
            type="text"
            id="myInput"
            onChange={handleSearchChange}
            placeholder="Search for names..."
            title="Type in a name"
          />
          <span className="searchIcon">
              <img src={search} alt="" />
          </span>
        </div>
        <div onClick={() => setIsOpen(true)} style={{display: "flex", justifyContent: "Center", alignItems: "center", gap: "10px"}}> 
            <span className='traineeAdd'>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.84091 16.7386V0.647726H10.9091V16.7386H6.84091ZM0.829545 10.7273V6.65909H16.9205V10.7273H0.829545Z" fill="white"/>
                </svg>
            </span>
            
          </div>
      </div>
      <div className='tableContainer'>
        <div
            style={
                {
                    display: "grid",
                    color: "black",
                    gridTemplateColumns: "25% 25% 25% 25%",
                    padding: "10px 5%",
                    fontSize: "14px", 
                    fontWeight: "bold",
                    boxSizing: "border-box"
                }
            }
        >
            <span>Name</span>
            <span>Position</span>
            <span>Course</span>
            <span>Status</span>
        </div>  
        {filterTrainees(searchTerm).map((trainee, index)  => (
          <div
              style={
                  {
                      display: "grid",
                      color: "black",
                      fontSize: "12px",
                      gridTemplateColumns: "25% 25% 25% 25%",
                      padding: "10px 5%",
                      // borderBottom: "0.5px solid lightgrey"
                  }
              }
          >
            <span style={{ color: "#002868", }}>{trainee.name}</span>
            <span>{trainee.position}</span>
            <span>{trainee.projectCode}</span>
            <span style={{display: "flex", justifyContent: "space-between"}}>{trainee.status} <img style={{cursor: "pointer"}}  onClick={() => openModal(trainee)} src={elipsis} alt="" /></span>
          </div>  
        ))}
      </div>
      
    </div>
  )
}

export default Trainees
