import { useState } from "react";
import validation from "./validation";


const Form = ({login}) => {
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
        username: "",
        password: "",
    });
    
    const handleInputChange = (event) =>{        
        setUserData({...userData, [event.target.name]: event.target.value});
        setErrors(validation({...userData, [event.target.name]: event.target.value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    };
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" 
                name="username" 
                value={userData.username}
                onChange={handleInputChange}/>
                {errors.username && <p>{errors.username}</p>}
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="text" 
                name="password" 
                value={userData.password}
                onChange={handleInputChange}/>
                {errors.password && <p>{errors.password}</p>}
            </div>
            <button type="submit">LOGIN</button>
        </form>
    );
};


export default Form;