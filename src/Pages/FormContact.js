import React, { useState } from "react";


const FormContact = ()=>{
const [name,setname] = useState("");
const [email,setemail] = useState("");
const [phone,setphone] = useState("");

const [show,setshow] = useState(true);
const changeEmail = (event)=>{
    setemail(event.target.value)
}

const changeName = (event)=>{
    setname(event.target.value)
}
const changePhone = (event)=>{
    setphone(event.target.value)
}


const FormHandler = (event)=>{
event.preventDefault();
if(name.length && email.length == ""){
   setshow(false);
    return;
}
console.log(name);
console.log(email);
console.log(phone);
setshow(true);
}



return(
 <form onSubmit={FormHandler}>

                <div className='form-control'>
                    <input placeholder='Your name' onChange={changeName}/>
                    {!show && <p> not empty </p>} 

                </div>

                <div className='form-control'>
                    <input placeholder='Your Email' onChange={changeEmail}/>
                    {!show && <p> not empty </p>} 

                </div>

                   <div className='form-control'>
                    <input placeholder='Phone numbers' onChange={changePhone}/>
                </div>
                <select>
                    <option>Select Department</option>
                    <option>One</option>
                    <option>Two</option>
                    <option>Three</option>

                </select>

                <div className='form-control'>
                   <textarea placeholder='Message'></textarea>
                </div>

               <button>Submit</button>
              </form>

)

}
export default FormContact;