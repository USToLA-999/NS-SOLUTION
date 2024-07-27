import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '../components/Button';

export const ContactUs = () => {
  const form = useRef();

  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ic1qp24', 'template_dtwqvni', form.current, {
        publicKey: 'pl5YvgNVmgt5FgLqO',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} >
        <div className=" lg:w-96 md: mx-auto">
            <div className="mt-5 w-96   mx-auto justify-center items-center">
                 
                <input type="text" name="from_name" className='w-full ' placeholder='Full Name' style={{borderBottom:'2px solid', outline:'none'}} />
            </div>
            <div className="mt-5 w-96   mx-auto justify-center items-center">
                 
                <input type="email" name="to_email" className='w-full ' placeholder='Email' style={{borderBottom:'2px solid', outline:'none'}} />
            </div>
            <div className="mt-5 w-96   mx-auto justify-center items-center">
                
                <input type="tel" name="to_tel" className='w-full' placeholder='Phone No.'  style={{borderBottom:'2px solid', outline:'none'}}/>
            </div>
            
            <div className="mt-5  w-96   mx-auto justify-center items-center">
                 
                <textarea name="message" className='w-full' placeholder='Type your Message' />
            </div>
            <div className="mt-3 pb-3  mx-auto justify-center flex items-center">
                <Button >
                    <button type="submit" value="Send"  > Send</button>
                </Button>
            </div>
        </div>
        
    </form>
  );
};