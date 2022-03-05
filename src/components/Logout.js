import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//context
import { Context } from "../Context";
const Logout = () => {
   const [user, setUser] = useContext(Context);
   const man = true;

   const navigate = useNavigate();
   useEffect(() => {
      setUser(undefined);
      navigate("/login");
   });
   // eslint-disable-next-line no-lone-blocks
   {
      man || console.log(user + " logged out");
   }
   return null;
};
export default Logout;
