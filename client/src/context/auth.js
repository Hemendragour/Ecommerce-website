

import axios from "axios";
import { useState, useContext, useEffect, createContext, children } from "react";
// import axios from "axios";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [auth, setauth] = useState({
        user: "hemendra",
        token: "",
    });

    // axios.defaults.headers.common['Authorization'] = auth?.token;
    // useEffect(() => {
    //     const data = localStorage.getItem("auth")
    //     if (data) {
    //         const parse = JSON.parse(data)
    //         setauth({
    //             ...auth,
    //             user: parse.user,
    //             token: parse.token,
    //         })
    //     }
    // }, [auth]);


    //default axios
      axios.defaults.headers.common["Authorization"] = auth?.token;

    useEffect(() => {
        const data = localStorage.getItem("auth");
        if (data) {
            const parseData = JSON.parse(data);
            setauth({
                ...auth,
                user: parseData.user,
                token: parseData.token,
            });
        }
        //eslint-disable-next-line
    }, []);
    return (
        <AuthContext.Provider value={[auth, setauth]}>
            {children}
        </AuthContext.Provider>
    );
};

// custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };