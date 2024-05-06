import { useState } from 'react'
import './home.scss'
import logo from '../../assets/home/logo.svg'
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
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
                                value={inputs.username || ""} 
                                onChange={handleChange}
                                style={{
                                    background: "white",
                                    margin: "5px 0",
                                    border: "1px solid lightgrey",
                                    borderRadius: "5px"
                                }}
                            />
                        </div>
                        <div>
                            <div style={{color: "grey", fontSize: "12px"}}>Email</div>
                            <input 
                                type="text" 
                                name="username" 
                                value={inputs.username || ""} 
                                onChange={handleChange}
                                style={{
                                    background: "white",
                                    margin: "5px 0",
                                    border: "1px solid lightgrey",
                                    borderRadius: "5px"
                                }}
                            />
                        </div>
                        <div>
                            <div style={{color: "grey", fontSize: "12px"}}>Password</div>
                            <input 
                                type="text" 
                                name="username" 
                                value={inputs.username || ""} 
                                onChange={handleChange}
                                style={{
                                    background: "white",
                                    margin: "5px 0",
                                    border: "1px solid lightgrey",
                                    borderRadius: "5px"
                                }}
                            />
                        </div>

                        <div>
                            <button style={{height: "30px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "12px", width: "100px"}}
                                onClick={()=>{
                                    navigate('/manager/dashboard')
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
