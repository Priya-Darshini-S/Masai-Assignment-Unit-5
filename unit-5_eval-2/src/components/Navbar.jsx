import { Link } from "react-router-dom";

export const Navbar = () => {
    return <div style={{width: "80%", margin: " 10px auto", border: "2px solid black", fontSize: "20px", padding: "4px"}}>
        <Link to="/" style={{margin: '10px', textDecoration: "none", color: "ButtonText"}}>Home</Link>
        <Link to="/login" style={{margin: '10px', textDecoration: "none", color: "ButtonText"}}>Login</Link>
        <Link to="/job-upload" style={{margin: '10px', textDecoration: "none", color: "ButtonText"}}>Upload Jobs</Link>
        <Link to="/see-jobs" style={{margin: '10px', textDecoration: "none", color: "ButtonText"}}>See-Jobs</Link>
     
    </div>
}