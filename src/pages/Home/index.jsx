import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../UserContext';
import './home.scss';
import logo from '../../assets/home/logo.svg';

function Home() {
    const { login, user, users } = useUserContext();
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleNameChange = (event) => setUserName(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    function handleSubmit(event) {
        event.preventDefault();
        const role = login(userName, password);
        if (role) {
            navigate(role === "Manager" ? '/manager/dashboard' : '/trainee/dashboard');
        } else {
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
                                    name="password" 
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
                                <button style={{height: "30px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "12px", width: "100px", backgroundColor: "#002868", color: "white"}}>
                                    Login
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;
