import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
const Contact = ({darkMode}) => {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "12caeef4-8cb9-49f4-9537-8fc0ca7297a9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div 
  id='contact' 
  className='w-full min-h-[400px] px-[12%] py-10 scroll-mt-20 bg-cover bg-no-repeat bg-center bg-[length:90%_auto]' 
  style={{ backgroundImage: "url('/footer-bg-color.png')" }}
>
  <h4 className='text-center mb-2 text-lg'>Contact Me</h4>
  <h2 className='text-center text-5xl'>Get In Touch</h2>
  <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>
    I would love to hear from you! Whether you have a question, want to discuss a project, or just want to say hello, feel free to reach out to me through the form below.
  </p>
  <form onSubmit={onSubmit} className='max-w-2xl mx-auto '>
   
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
      <input type='text' placeholder='Enter your name' name='name' required className={`flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md ${darkMode?"bg-gray-700 text-white":"text-black bg-white"} `}></input>
      <input type='email' placeholder='Enter your email' name='email' required className={`flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md  ${darkMode?"bg-gray-700 text-white":"text-black bg-white"} `}></input>
    </div>
    <textarea rows='6' placeholder='Enter your message' name='message' required className={`w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md mb-6 ${darkMode?"bg-gray-700 text-white":"text-black bg-white"} `}></textarea>
    <button type='submit' className={`py-3 px-4 w-max  flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 text-center ${darkMode?"bg-gray-700 text-white":""} `}>Submit now <Image src={assets.right_arrow_white} alt='' className='w-4' /></button>
    <p className='mt-4'>{result}</p> 
  </form>

</div>


  )
}

export default Contact
