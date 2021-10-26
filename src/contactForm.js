import React from 'react';
import { useForm } from "react-hook-form";


const ContactForm = () => {
const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data =>{

    const formData = {
        name: data.name,
        age: data.age,
        salary: data.salary,
        hobby: data.hobby
    }; 
    console.log("form-data:", formData)
    fetch("https://sheet.best/api/sheets/0a90b162-e1cb-47da-a7f0-a9a8c2d8bd7a", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((r) => r.json())
        .then((data) => {
          console.log('Successfully-saved', data);
        })
        .catch((error) => {
          console.log(error);
        });
        alert(`Hello ${formData.name}..! Your data was successfully updated.`)
};
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="form-container">
              <h1 className='title'>React Google Sheets API</h1>
              <a style={{color: 'green', textDecoration: 'none'}} href="https://docs.google.com/spreadsheets/d/1h2W_XTQBGg2Ej8MFDDo1b74gX0d2k7SALg7Ht7KANcs/edit#gid=0" alt='#' target="_blank" rel="noreferrer">Check The Sheet Updating</a>
              <br/>
              <input {...register("name", { required: true })} type="text" placeholder="Type your name"/>
              <br/>
              <input {...register("age", { required: true })} type="number" placeholder="Type your age" />
              <br/>
              <input {...register("salary", { required: true })} type="number" placeholder="Type your salary"/>
              <br/>
              <input {...register("hobby", { required: true })} type="text" placeholder="Type your hobby"/>
              <br/>
              <input type="submit" id="submit-button" />
            </form>
        </>
    );
};

export default ContactForm;