import { Navigate } from 'react-router-dom';

import { isAuth } from "../../helpers"
  
const PrivateRoute = ({ component: Component }) => {
    return isAuth() ? <Component /> : <Navigate to="/login" />;
}

export default PrivateRoute;

