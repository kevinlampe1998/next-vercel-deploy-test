'use client';

import { useState, useEffect } from "react";

const RegisterOrLogin = () => {
    const [ data, setData ] = useState();

    const checkUser = async () => {
        const res = await fetch('/api/users/login');
        const data = await res.json();

        data.success ? setData(data.message) : alert(data.message);
    };

    useEffect(() => {
        checkUser();
    }, []);

    return (
        <>
            <h1>RegisterOrLogin</h1>
            <div>{data && data}</div>
        </>
    );
};

export default RegisterOrLogin;