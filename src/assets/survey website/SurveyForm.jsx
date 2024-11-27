import React, { useRef, useState } from "react";
import Form from "./Form";
const SurveyForm = () => {
  const [userData, setUserData] = useState([]); // state to hold user data
  const nameRef = useRef(); // ref for inputs
  const emailRef = useRef();
  const contactRef = useRef();
  const handleClear = () => {     // function to clear inputs after form submit
    nameRef.current.value = "";
    emailRef.current.value = "";
    contactRef.current.value = "";
  };
const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form reloading
    let nameValue = nameRef.current.value//   Get values from refs and 
    let emailValue = emailRef.current.value
    let contactValue = contactRef.current.value
    if (!nameValue || !emailValue || !contactValue ) {  // Validation: Check if any field is empty
        alert("All fields need to be field.");
        return; // Stop execution of function if validation fails
    }
    let userDetails = { // made an object of to store data
        nameValue,
        emailValue,
        contactValue,
    };
    setUserData((prev) => [...prev, userDetails]); // Update the state with the new user data
    handleClear(); // Clear the form fields
    alert("The form has been successfully submitted!");
};

  console.log(userData); // testing
  const data = { // making a data object and store all props in it to look code clean and passs all props as objects
    nameRef,
    emailRef,
    contactRef,
    handleSubmit,
  };
  return <Form data={data} />; // pasing data object as props which store all the props value that we need in form component
};

export default SurveyForm;
