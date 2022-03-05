import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import API from "../API";

//Components
import Button from "./Button";

//styles
import { Wrapper } from "./Login.styles";

//context
import { Context } from "../Context";

const Login = () => {
   const [username, setUserName] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState(false);
   const [user, setUser] = useContext(Context);
   const navigate = useNavigate();
   const woman = true;

   const handleSubmit = async () => {
      setError(false);
      try {
         const requestToken = await API.getRequestToken();
         const sessionId = await API.authenticate(
            requestToken,
            username,
            password
         );
         // eslint-disable-next-line no-lone-blocks
         {
            woman || console.log(user + " logged in");
         }
         setUser({ sessionId: sessionId.session_id, username });

         navigate("/");
      } catch (error) {
         setError(true);
      }
   };

   const handleInput = (e) => {
      const name = e.currentTarget.name;
      const value = e.currentTarget.value;

      if (name === "username") setUserName(value);
      if (name === "password") setPassword(value);
   };

   return (
      <Wrapper>
         {error && <div className="error">There was an error!</div>}
         <label>Username</label>
         <input
            type="text"
            value={username}
            name="username"
            onChange={handleInput}
         />
         <label>Password</label>
         <input
            type="password"
            value={password}
            name="password"
            onChange={handleInput}
         />
         <Button text="Login" callback={handleSubmit} />
      </Wrapper>
   );
};
export default Login;
