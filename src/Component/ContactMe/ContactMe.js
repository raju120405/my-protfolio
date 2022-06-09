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
        <div className='container border'
            style={{
                marginTop: "50px",
                width: '50%',
                backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20210814/pngtree-blue-purple-simple-gradient-background-image_760572.jpg')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}>
            <h2 className='mt-3'>Contact me</h2>
            <form className='row'
             style={{ margin: "25px 85px 75px 100px" }}
             onSubmit={sendEmail}
             >
                <label>Name</label>
                <input type="text" name='name' placeholder='Your Name' className='from-control' />

                <label>Email</label>
                <input type="email" name='user_name' placeholder='Enter Your Email' className='from-control' />

                <label>Message</label>
                <textarea name="message" rows="4" placeholder='Write Message' className='from-control' />

                <input type="submit"
                    value="Send"
                    className='from-control btn btn-primary mt-3' />
            </form>
        </div>
    );
};

export default ContactMe;