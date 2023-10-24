// import { useState, useEffect } from "react";
// import { useAuth } from "../../context/auth";
// import { Outlet } from "react-router-dom";
// import axios from "axios";
// import Spinner from "./Spinner";

// export default function PrivateRoute() {
//     const [ok, setOk] = useState(false);
//     const [auth, setAuth] = useAuth();

//     useEffect(() => {


//         const authCheck = () => {

//             try {
//                 const res = axios.get(`${process.env.REACT_APP_API}/api/v1/auth/user-auth`);
//                 if (res.data.ok) {
//                     setOk(true);
//                 } else {
//                     setOk(false);
//                 }
//             } catch (error) {
//                 console.log("qwertyui")
//                 console.error("Error fetching authentication:", error);
//                 setOk(false); // Set ok to false in case of an error
//             }
//         };
//         if (auth?.token) authCheck();
//     }, [auth?.token]);

//     return ok ? <Outlet /> : <Spinner />;
// }




import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner";
// import Spinner from "./Spinner";

export default function PrivateRoute() {
    const [ok, setOk] = useState(false);
    const [auth, setAuth] = useAuth();

    useEffect(() => {
        const authCheck = async () => {
            const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/user-auth`);

            if (res.data.ok) {
                setOk(true);
            } else {
                setOk(false);
            }
        };
        if (auth?.token) authCheck();
    }, [auth?.token]);

    return ok ? <Outlet /> : <Spinner />;
}