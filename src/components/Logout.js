import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//context
import { Context } from "../Context";
const Logout = () => {
   const [setUser] = useContext(Context);

   const navigate = useNavigate();
   useEffect(() => {
      setUser(undefined);
      navigate("/login");
      console.log("loggged out successful");
   });
   return null;
};
export default Logout;
