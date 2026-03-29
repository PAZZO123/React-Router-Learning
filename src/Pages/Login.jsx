import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login(){
    const navigate=useNavigate()
    const location =useLocation()

    const [error, setError]=useState('');
    const [loading, setLoading]=useState(false);
    const from=location.state?.from?.pathname || '/dashboard'

    async function handleSubmit(e){
        e.preventDefault()
        setLoading(true); setError('');
        try{
            //await fakeAuthCall(e.target.email.value);
            navigate(from, {replace:true});
            
        } catch{
            setError('Invalid credentials . Please try again.');  
        }
        finally{
            setLoading(false)
        }
    }

    return (
        <div>
        
            <h1>Login</h1>
            {error && <p style={{color:'red'}}>{error}</p>}

            <form action="" onSubmit={handleSubmit}>
                <input type="email" name="email" required className="border-1 border-gray-700" />
                <input type="password" name="password" id="" required  className="border-1 border-gray-700"/>
                <button className={!loading?"bg-blue-700 text-white p-3":"bg-blue-400 text-white p-3"} disabled={loading}>
                    {loading?"Logging in...":"login"}
                </button>
            </form>
        
        </div>
    );
} 