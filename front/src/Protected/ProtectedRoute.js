import  { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './Authencontext';

export default function ProtectedRoute({ children }) {
    const { authen } = useContext(AuthContext);
    const navigate = useNavigate()

    if (!authen) {
        return(
            navigate("/login")
        )
    }

    return (
        children
    );
}
