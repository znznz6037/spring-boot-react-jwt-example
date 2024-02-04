import { useNavigate, useLocation } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const location = useLocation();

    const toLogin = () => {
        navigate('/login');
    }

    const toProfile = () => {
        navigate('/profile');
    }

    return(
        <div>
            {location.state ? <button onClick={toProfile}>Profile</button> : <button onClick={toLogin}>Login</button>}
        </div>
    )
}