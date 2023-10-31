import "./Formstyle.css"
import React, {useState} from "react"
import "./App.css"
 function App() {
  const [values, setValues] = useState({
    firstName: "",
    middleName:"",
    lastName: "",
    gender:"",
    birth:"",
    matrialstatus:"",
    address:"",
    phonenumber:"",
    insurancenumber :"",
    email: "",
    password:"",
    confirmpassword:"",
    
  });
 
  const handleInputChange = (event) => {
    
    event.preventDefault();

    const { name, value } = event.target;
    setValues((values) => ({
      ...values,
      [name]: value
    }));
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.firstName && values.lastName && values.middleName && values.birth && values.address && values.phonenumber && values.insurancenumber && values.email && values.password && values.confirmpassword) {
      setValid(true);
    }
    setSubmitted(true);
  };
 

  return (
   <div className="form-container">
      <h1 style={{color:"red"}}>Patient Registration</h1>
      <h2 style={{color:"blue"}}>Identification Details</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid && (
          <div className="success-message">
            <h3>
              {" "}
              Welcome {values.firstName} {values.lastName}{" "}
            </h3>
            <div> Your registration was successful! </div>
          </div>
        )}
        {!valid && (
          <input 
            class="form-field"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={values.firstName}
            onChange={handleInputChange}
          />
        )}
        

        {submitted && !values.firstName && (
          <span id="first-name-error">Please enter first name</span>
        )}

       {!valid && (
          <input
            class="form-field"
            type="text"
            placeholder="Middle Name"
            name="lastName"
            value={values.middleName}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.middleName && (
          <span id="Middle-name-error">Please enter  middle name</span>
        )}


        {!valid && (
          <input
            class="form-field"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={values.lastName}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.lastName && (
          <span id="last-name-error">Please enter  last name</span>
        )}

       
         <div style={{marginTop:'10px',marginLeft:'10px'}}>
            <label style={{fontSize:'20px',marginRight:'40px',color:'grey'}}>Gender</label><br />
            <input id="Male" name='gender' type="radio" value={'Male'} />
            <label htmlFor="sname">Male</label>
            <input id="Female" name='gender' type="radio" value={'Female'} />
            <label htmlFor="sname">Female</label>
            <input id="Others" name='gender' type="radio" value={'Others'} />
            <label htmlFor="sname">Others</label>
          </div>

        {!valid && (
          <input
            class="form-field"
            type="phonenumber"
            placeholder="Phonenumber"
            name="phonenumber"
            value={values.phonenumber}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.birth && (
          <span id="phonenumber-error">Enter your phone number</span>
        )}


        {!valid && ( 
          <input 
            class="form-field"
            type="birth"
            placeholder="Birth" 
            name="birth"
            value={values.birth}
            onChange={handleInputChange}
          />
             
        )}

       
        {submitted && !values.birth && (
          <span id="birth-error">Please enter your birth date</span>
        )}
        

       <div style={{marginTop:'10px',marginLeft:'10px'}}>
            <label style={{fontSize:'20px',marginRight:'40px', color:'grey'}}>Matrial Status</label><br />
             <input id="Single" name='Single' type="radio" value={'Single'} />
            <label htmlFor="sname">Single</label>
            <input id="Married" name='Married' type="radio" value={'Married'} />
            <label htmlFor="sname">Married</label>
            <input id="Divorced" name='Divorced' type="radio" value={'Divorced'} />
            <label htmlFor="sname">Divorced</label>
            <input id="Widow" name='Widow' type="radio" value={'Widow'} />
            <label htmlFor="sname">Widow</label>
        </div>



       {!valid && (
          <input
            class="form-field"
            type="address"
            placeholder="Address"
            name="address"
            value={values.address}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.birth && (
          <span id="address-error">Enter your Street Address</span>
        )}
  
      
        
       {!valid && (
          <input
            class="form-field"
            type="insurancenumber"
            placeholder="Insurancenumber"
            name="insurancenumber"
            value={values.insurancenumber}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.birth && (
          <span id="insurancenumber-error">Enter your insurance number</span>
        )}

        
          <div style={{marginTop:'10px',marginLeft:'10px'}}>
            <label style={{fontSize:'20px',marginRight:'40px',color:'grey'}}>Past Medical History</label><br/>
            <input id="Anemia" name='Anemia' type="radio" value={'Anemia'} />
            <label htmlFor="sname">Anemia</label>
            <input id="Asthma" name='Asthma' type="radio" value={'Ashtma'} />
            <label htmlFor="sname">Asthma</label>
            <input id="Bronchitis" name='Bronchitis' type="radio" value={'Bronchitis'} />
            <label htmlFor="sname">Bronchitis</label>
            <input id="Chickenpox" name='Chickenpox' type="radio" value={'Chickenpox'} />
            <label htmlFor="sname">Chickenpox</label>
          </div>

        {!valid && (
          <input
            class="form-field"
            type="email"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.email && (
          <span id="email-error">Please enter an email address</span>
        )}

        {!valid && (
          <input
            class="form-field"
            type="password"
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.password && (
          <span id="email-error">at least need 8 characters</span>
        )}

        
        {!valid && (
          <input
            class="form-field"
            type="confirmpassword"
            placeholder="Confirm Password"
            name="confirmpassword"
            value={values.confirmpassword}
            onChange={handleInputChange}
          />
        )}    

        {!valid && (
          <button class="form-field" type="submit">
            Register
          </button>
        )}

      </form>
    </div>
  );
}
export default App;