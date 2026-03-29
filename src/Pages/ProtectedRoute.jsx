import { Navigate, useLocation } from 'react-router-dom';
//import { useAuth } from '../context/AuthContext';
import { useAuth } from '../context/AuthContext';
function ProtectedRoute({ children }) {
 const { user } = useAuth();
 const location = useLocation();
 if (!user) {
 // Save the intended destination in navigation state
 return <Navigate to='/login' state={{ from: location }} replace />;
 }
 return children;
}
export default ProtectedRoute;
