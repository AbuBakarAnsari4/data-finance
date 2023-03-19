import React from 'react'

const Contact = () => {

    const submit = () =>{
        let name = document.getElementById("name").value;
        alert("Hello " + name + "! Your Message has been send.");
    }

  return (
    <div className=''>
            <div className='mb-24 bg-[#00df9a] py-12'>
                <h1 className='text-black text-center text-5xl font-bold uppercase'>Contact</h1>
            </div>
        <div className='max-w-[1240px] mx-auto my-4'>
            <form className='mx-auto max-w-[400px]'>
                <span className='text-white'>Name</span><br /> 
                <input id='name' className='px-4 py-2 border-none outline-none rounded-md w-[100%] my-1' type="text" placeholder='Enter Name'/><br />
                <span className='text-white'>Email</span><br /> 
                <input id='email' className='px-4 py-2 border-none outline-none rounded-md w-[100%] my-1' type="email" placeholder='Enter Email'/><br />
                <span className='text-white'>Message</span><br /> 
                <textarea className='h-[100px] w-[100%] my-1 px-2 py-2 rounded-md' name="" id="" cols="30" rows="10"></textarea>
                <button onClick={submit} className='bg-[#00df9a] w-[100%] rounded-md font-medium  mx-auto py-3 text-black'>Submit</button>
            </form>
        </div>      
    </div>
  )
}

export default Contact
