import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "./Auth";
import axios from "axios";

export default function Profile(){
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        axios.get('/api/user', {
            headers: {
                'Authorization': `Bearer ${getToken()}`
            }
        })
        .then((response) => {
            if(response.data) {
                setUserInfo(response.data);
            }
        })
    }, []);

    const signOut = () => {
        localStorage.removeItem("token");
        navigate("/", {state : false});
    }

    return(
        <div>
            <h1>Profile</h1>
            {userInfo !== undefined ?  <div><p>{userInfo.username}</p><p>{userInfo.nickname}</p></div> : <p>Loading...</p>}
            <button type="button" onClick={signOut}>
                Sign Out
            </button>
        </div>
    )
}