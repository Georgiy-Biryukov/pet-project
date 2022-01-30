import { Navigate } from 'react-router-dom';

import { isAuth } from "../../helpers"
  
const PublicRoute = ({ component: Component }) => {
    return !isAuth() ? <Component /> : <Navigate to="/home" />;
}

export default PublicRoute;

