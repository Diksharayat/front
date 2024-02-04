import { useContext, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { authContext } from "../context/AuthContext/AuthContext";




const Register=()=>{

const {registerUserAction,error}= useContext(authContext) 

  var navi = useNavigate();

  const sizeOptions = [
    { label: "Startup (1-10)", value: "Startup (1-10)" },
    { label: "Mid-sized (11-50)", value: "Mid-sized (11-50)" },
    { label: "Large (51-100)", value: "Large (51-100)" },
    { label: "Enterprise (100+)", value: "Enterprise (100+)" },
]


const hereAboutOptions = [
  { label: "Search engines (e.g., Bing, Google, Yahoo)", value: "Search engines (e.g., Bing, Google, Yahoo)" },
  { label: "Word of mouth", value: "Word of mouth" },
  { label: "Recommended by a friend", value: "Recommended by a friend" },
  { label: "Social media platforms", value: "Social media platforms" },
  { label: "Other", value: "Other" },
]
   




  //form data
  const [formData, setFormData] = useState({
    Role: "",
    Email: "",
    Password: "",
    OfficeNumber: "",
    BusinessName: "",
    EIN: "",
    CompanyAddress: "",
    CompanyState:"",
    WebsiteLink: "",
    CompanyLogoImage:"",
    CompanySize:"",
    CompanyCity:"",
    CompanyZip:"",
    HearAboutCollebsetgo:"",
   
  });
  //Destructure
  const {
    Role,
    Email,
    Password,
    OfficeNumber,
    BusinessName,
    EIN,
    CompanyAddress,
    WebsiteLink,
    CompanyLogoImage,
    CompanySize,
    CompanyState,
    CompanyCity,
    CompanyZip,
    HearAboutCollebsetgo,
    
  } = formData;

  //onChange
  const onChangeInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //onSubmitHandler

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!Email || !Password || !Role) {
      return alert("Please provide all details");
    } else {
      navi("/login");
    }
    registerUserAction(formData)
  };

 

  console.log(formData);
  return(
    <>
    <div className="App">
     <form  onSubmit={onSubmitHandler} encType="multipart/form-data">
        <h1 style={{"fontWeight":"bold"}}> Register Your Company With Collab set go</h1>
        <h3>Company details</h3>
        <div className=" form-group" style={{"fontWeight":"bold"}}>
          Company Name*:
          <input
            value={Role}
            onChange={onChangeInput}
            name="Role"
            type="text"
            autoComplete="off"
            className=" form-control "
            placeholder=" enter Company name"
            required
          />
        </div>
        <div className="form-group" style={{"fontWeight":"bold"}}>
          Email Address*:
          <input
            value={Email}
            onChange={onChangeInput}
            name="Email"
            type="email"
            className="form-control"
            placeholder="ex: diksha@gmail.com"
            required
          />
        </div>

        <div className="form-group" style={{"fontWeight":"bold"}}>
          Password*:
          <input
            value={Password}
            onChange={onChangeInput}
            name="Password"
            type="password"
            className="form-control"
            placeholder="*********"
            required
          />
        </div>
        <div className="form-group" style={{"fontWeight":"bold"}}>
          Office Number*:
          <input
            value={OfficeNumber}
            onChange={onChangeInput}
            name="OfficeNumber"
            autoComplete="off"
            type="number"
            className="form-control"
            placeholder="enter office no"
            required
          />
        </div>
        <div className="form-group" style={{"fontWeight":"bold"}}>
          Display name of your business*:{" "}
          <input
            value={BusinessName}
            onChange={onChangeInput}
            name="BusinessName"
            type="text"
            className="form-control"
            placeholder="enter your display name"
            required
          />
        </div>
        <div className="form-group" style={{"fontWeight":"bold"}}>
          EIN*:
          <input
            value={EIN}
            onChange={onChangeInput}
            name="EIN"
            autoComplete="off"
            type="number"
            className="form-control"
            placeholder="enter EIN"
            required
          />
        </div>
        <div className="form-group" style={{"fontWeight":"bold"}}>
          Company Address*:
          <input
            value={CompanyAddress}
            onChange={onChangeInput}
            name="CompanyAddress"
            autoComplete="off"
            type="text"
            className="form-control"
            placeholder="enter company address"
            required
          />

          
        </div>


        <div className="form-group" style={{"fontWeight":"bold"}}>
         State
          <input
            value={CompanyState}
            onChange={onChangeInput}
            name="CompanyState"
            autoComplete="off"
            type="text"
            className="form-control"
            placeholder="enter state"
            required
          />

          </div>


          <div className="form-group" style={{"fontWeight":"bold"}}>
         City
          <input
            value={CompanyCity}
            onChange={onChangeInput}
            name="CompanyCity"
            autoComplete="off"
            type="text"
            className="form-control"
            placeholder="enter city"
            required
          />

          </div>
        
         
       
        
          <div className="form-group" style={{"fontWeight":"bold"}}>
         Zip
          <input
            value={CompanyZip}
            onChange={onChangeInput}
            name="CompanyZip"
            autoComplete="off"
            type="text"
            className="form-control"
            placeholder="enter city"
            required
          />

          </div>
        

        <div className="form-group" style={{"fontWeight":"bold"}}>
          Upload Company Logo(Optional)
          <input
            name="CompanyLogoImage"
            onChange={onChangeInput}
            value={CompanyLogoImage}
            autoComplete="off"
            type="file"
            className="form-control"
            placeholder="upload company logo"
          />
        </div>

        <div className="form-group" style={{"fontWeight":"bold"}}>
          Website Link(Optional)
          <input
            name="WebsiteLink"
            value={WebsiteLink}
            onChange={onChangeInput}
            autoComplete="off"
            type="text"
            className="form-control"
            placeholder="enter website link"
          />
        </div>

        <div className="form-group" style={{"fontWeight":"bold"}}>
          What is the size of your company? <br />
          <select name="CompanySize" id="id1" value={CompanySize} onChange={onChangeInput}>
        <option value="">Select a Size of company</option>
        {sizeOptions.map(item => (
          <option key={item.value} value={item.label}>
            {item.value}
          </option>
        ))}
      </select>
        
         
        </div>

        <div className="form-group" style={{"fontWeight":"bold"}}>
          Where did you hear about collabSetGo <br />
          <select name="HearAboutCollebsetgo" id="id2" value={HearAboutCollebsetgo} onChange={onChangeInput}>
        <option value="">Select where did you here about?</option>
        {hereAboutOptions.map(item => (
          <option key={item.value} value={item.label}>
            {item.value}
          </option>
        ))}
      </select>
         
        </div>
        <div className="form-group" style={{"fontWeight":"bold"}}>
          <input
            style={{ borderRadius: 50 }}
            className="btn btn-primary"
            type="submit"
          />
        </div>
        <div className="form-group" style={{"fontWeight":"bold"}}>
          Already have account <Link to="/login"> Login</Link>
        </div>
      </form>
      </div>
    </>
  )
}

export default Register;