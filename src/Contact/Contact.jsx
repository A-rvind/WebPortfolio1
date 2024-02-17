import React, {useState} from 'react'
import "./Contact.css"


const Contact = () => {
  const [user, setUSer] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  let name, value;
    const getUserData = (event) =>{
      name =  event.target.name;
      value = event.target.value;

        setUSer({ ...user, [name]: value})
    };

    const postData = async(e) => {
        e.preventDefault();

        const {  name, email, phone, location, message,
        } = user;

        if (name && email && phone && location && message){
          const resp = await fetch("https://portfolio-responses-6afe7-default-rtdb.firebaseio.com/connectform.json",
          {
            method :"POST",
            headers: {
              "Content-Type": "application/json",
    
            },
            body: JSON.stringify({
              name,
              email,
              phone,
              location,
              message,
            })
          }
          )
    
          if (resp) {
            setUSer({
              name: "",
              email: "",
              phone: "",
              location: "",
              message: "",
            });
    
            alert("Your response is sent successfully")
          }

        } else {
          alert("Form need all required data")

        }


      
    };


  return (
    <>
    <div className="container-contact" id='Contact'>
      <div className="wrap-contact100">
        <span className="contact100-form-title">Contact Me</span>
        <p>This form is Working, Your response is valuable</p>
        <form className="contact100-form" method="POST">
          
          
          <div className="wrap-input100">
            
            <input
            className="input100"
            type="text"
            name="name"
            placeholder="Full Name"
            value={user.name}
            onChange={getUserData}
            autoComplete="off"
            required />
            <span className="focus-input100"></span>
          </div>

          <div className="wrap-input100">
        
            <input
            className="input100"
            type="text"
            name="email"
            placeholder="Email ID"
            value={user.email}
            onChange={getUserData}
            autoComplete="off"
            required />
            <span className="focus-input100"></span>
          </div>

          <div className="wrap-input100">
      
            <input
            className="input100"
            type="text"
            name="phone"
            placeholder='Phone Number'
            value={user.phone}
            onChange={getUserData}
            autoComplete="off"
            required />
            <span className="focus-input100"></span>
          </div>

          <div className="wrap-input100">
            
            <input
            className="input100"
            type="text"
            name="location"
            placeholder='Enter your location'
            value={user.location}
            onChange={getUserData}
            autoComplete="off"
            required />
            <span className="focus-input100"></span>
          </div>

          <div className="wrap-input100">
      
            <textarea
            className="input100"
            name="message"
            placeholder='Enter your message...'
            value={user.message}
            onChange={getUserData}></textarea>
            <span className="focus-input100"></span>
          </div>

          
          </form><div className="container-contact100-form-btn">
          <button className="contact100-form-btn" onClick={postData}>
          
           <span className='submit1'>Submit</span>
          
          
          </button>
          </div>

          <span className='contact100-more'>
            
            <span className='contact100-more-highight'>For Any Question Contact Me : arvindgsharma9850@gmail.com</span>
          </span>
          
                  

        </div>
      </div>
    </>
  );
};

export default Contact;