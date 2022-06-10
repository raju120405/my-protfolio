import React from 'react';
import emailjs from 'emailjs-com'
const ContactMe = () => {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_nsnie4l','template_m0o3qls',e.target,'3RUDuXfS-xTiX4qHT').then(res=>{
            console.log(res)
        }).catch(err=> console.log(err));
        e.target.reset()
    }
    return (
        <div className='container border shadow-lg p-3 mb-5 bg-body  rounded-3'
            style={{
                marginTop: "50px",
                width: '50%',
                // backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20210814/pngtree-blue-purple-simple-gradient-background-image_760572.jpg')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}>
            <h4 className='mt-3'>Contact me</h4>
            <form className='row '
             style={{ margin: "25px auto",padding:"5px" }}
             onSubmit={sendEmail}
             >
                <label>Name</label>
                <input type="text" name='name' placeholder='Your Name' className='from-control p-1' />

                <label>Email</label>
                <input type="email" name='user_name' placeholder='Enter Your Email' className='from-control p-1' />

                <label>Message</label>
                <textarea name="message" rows="4" placeholder='Write Message' className='from-control p-1' />

                <input type="submit"
                    value="Send"
                    className='from-control btn btn-primary mt-3' />
            </form>
        </div>
    );
};

export default ContactMe;