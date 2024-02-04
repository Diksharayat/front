import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../context/AuthContext/AuthContext";




const Login=()=>{
 const {loginUserAction,userAuth}= useContext(authContext);
 
  //form data
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });
  const { Email, Password } = formData;

  //onChnage
  const onChangeInput = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log("item trigerred")
  };

  //submit
  const onSubmitHandler = e => {
    e.preventDefault();

    //dispatch action
    loginUserAction(formData);
  };
  console.log(userAuth);


 
  return(
    <>
    <h1>Login</h1>
    <form onSubmit={onSubmitHandler}>
    <div className="form-group">
          Email Address*:
          <input
           
            name="Email"
            value={Email}
            onChange={onChangeInput}
            type="email"
            className="form-control"
            placeholder="enter your email"
            required
          />
        </div>

        <div className="form-group">
          Password*:
          <input
           
            name="Password"
            value={Password}
            onChange={onChangeInput}
            type="password"
            className="form-control"
            placeholder="enter your email"
            required
          />
        </div>
        <div className="form-group">
          <input
            style={{ borderRadius: 50 }}
            className="btn btn-primary"
            type="submit"
          />
        </div>

        <div className="form-group">
          New to Application? <Link to="/"> Register</Link>
         </div>
    </form>
    </>
  )
}

export default Login;