import { useEffect, useState } from "react";
import "./contact.css"

const Contact = () => {
     const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        message: ""
     } )

     const [errors, setErrors] = useState({})
     const [isSubmit, setIsSubmit] = useState(false)

     const handleChange = (event) => {
        const {name, value} = event.target
        setFormData(prevState => {
            return {
                ...prevState,
                [name] : value
            }
        })
     }

     const handleSubmit = (event) => {
        event.preventDefault()
        setErrors(validate(formData))
        setIsSubmit(true)
     }  


    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmit) {
            alert("Message sent successfully")
        }
     }, [errors])

     const validate = (formData) => {
        let errors= {};

        if(!formData.fullName){
            errors.fullName= "Full name is required"
        }
     
        if(!formData.phoneNumber){
            errors.phoneNumber= "Phone number is required"
        }

        if(!formData.email){
        errors.email="Email is required"
        }else if(!/\S+@\S+\.\S+/.test(formData.email)){ 
        errors.email="Email is invalid"
    }
      
        if(!formData.message){
            errors.message= "Field is empty"
     }
     return errors;
}

    return (
        <div className="contact">
            <img src="./images/cake2.jpg" alt="" className="contact--img"/>
            <div className="forms">
                <h4>CONTACT US</h4>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" 
                           placeholder="Full Name"
                           name="fullName"
                           onChange={handleChange}
                           value={formData.fullName}
                    />
                    {errors.fullName && <p className="errors">{errors.fullName}</p> }
                    <label htmlFor="tel">Phone Number</label>
                    <input type="tel" 
                           placeholder="Phone Number"
                           name="phoneNumber"
                           onChange={handleChange}
                           value={formData.phoneNumber}
                    />
                      {errors.phoneNumber && <p className="errors">{errors.phoneNumber}</p>}
                    <label htmlFor="email">Email</label>
                    <input type="email" 
                           placeholder="Email"
                           name="email"
                           onChange={handleChange}
                           value={formData.email}
                    />
                      {errors.email && <p className="errors">{errors.email}</p>}
                    <textarea type="text"
                              placeholder="Type Message..."
                              name="message"
                              onChange={handleChange}
                              value={formData.message}
                    />
                      {errors.message && <p className="errors">{errors.message}</p>}
                    <button className="form--btn">Submit</button>
                </form>
            </div>
        </div>
     );
}
 
export default Contact;