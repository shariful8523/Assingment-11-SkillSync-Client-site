import React, {  useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivetRouter = ({Children}) => {

    const {user} = useContext(AuthContext);

    if(user) {
        return Children
    }
    return <Navigate to="/singIn" ></Navigate>
};

export default PrivetRouter;