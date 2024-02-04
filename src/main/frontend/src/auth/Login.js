import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setToken } from "./Auth";
import axios from "axios";

export default function Login() {
    const [Id, setId] = useState("");
    const [Password, setPassword] = useState("");
    const navigate = useNavigate();

    const onIdHandler = (event) => {
        setId(event.currentTarget.value);
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios.post('/api/authenticate', {
            username: Id,
            password: Password
        })
        .then((response) => {
            if(response.data.token) {
                setToken(response.data.token);
                navigate('/', {state : true});
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }

  return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'}}>
        <form style={{ ddisplay: 'flex', flexDirection: 'column'}} onSubmit={onSubmitHandler}>
            <label>ID</label>
            <input type='id' value={Id} onChange={onIdHandler}/>
            <label>Password</label>
            <input type='password' value={Password} onChange={onPasswordHandler}/>
            <br/>
            <button formAction=''>Login</button>
        </form>
      </div>
  );
}