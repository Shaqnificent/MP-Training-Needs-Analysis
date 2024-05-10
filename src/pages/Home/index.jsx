import { useState } from 'react'
import './home.scss'
import logo from '../../assets/home/logo.svg'
import { useNavigate } from 'react-router-dom';
function Home() {
    const users = {
        user1: {
          username: "tracy",
          password: "123",
          role: "manager"
        },
        user2: {
          username: "tom",
          password: "123",
          role: "trainee"
        }
      };
      
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const handleNameChange = (event) => {
        const value = event.target.value;
        setUserName(value)
    }
    const handlePasswordChange = (event) => {
        const value = event.target.value;
        setPassword(value)
    }

    function handleSubmit() {
        let isValidUser = false; // Flag to check if user is valid
      
        // Loop through each user in the users object
        for (const key in users) {
          if (users[key].username === userName && users[key].password === password) {
            isValidUser = true;
            navigate('/manager/dashboard')
            break; // Exit the loop if user is found
          }
        }
      
        // If no valid user is found, display an alert
        if (!isValidUser) {
          alert("Invalid login details. Please try again.");
        }
      }
      
  return (
    <div className='homeContainer'>
        <div className='homeBackground'>
            <div className='detailsContainer'>
                <span>Training Needs Analysis </span>
                <span>System</span>
            </div>
            <div>
                <img src={logo} alt="" />
            </div>
        </div>
        <div className='loginContainer'> 
            <div className='loginHeader'>
                <span className='main'>Hello!</span>
                <span className='sub'>Sign into your account</span>
            </div>
            <div className='loginForm'>
                <form onSubmit={handleSubmit}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column", 
                            justifyContent: "space-around",
                            height:"100%"
                        }}
                    >
                        <div>
                            <div style={{color: "grey", fontSize: "12px"}}>Name</div>
                            <input 
                                type="text" 
                                name="username" 
                                value={userName || ""} 
                                onChange={handleNameChange}
                                style={{
                                    background: "white",
                                    margin: "5px 0",
                                    border: "1px solid lightgrey",
                                    borderRadius: "5px",
                                    color: "black"
                                }}
                            />
                        </div>
                        <div>
                            <div style={{color: "grey", fontSize: "12px"}}>Password</div>
                            <input 
                                type="text" 
                                name="username" 
                                value={password || ""} 
                                onChange={handlePasswordChange}
                                style={{
                                    background: "white",
                                    margin: "5px 0",
                                    border: "1px solid lightgrey",
                                    borderRadius: "5px",
                                    color: "black"
                                }}
                            />
                        </div>

                        <div>
                            <button style={{height: "30px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "12px", width: "100px", backgroundColor: "#002868", color: "white"}}
                                onClick={()=>{
                                    // handleSubmit()
                                    // // navigate('/manager/dashboard')
                                }}
                            >
                                Login
                            </button>
                        </div>
                    </div>
                    
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default Home
