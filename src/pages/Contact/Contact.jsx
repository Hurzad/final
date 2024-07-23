import React, { useRef } from 'react'
import swal from 'sweetalert';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_101rd65', 'template_b1n4a53', form.current, {
          publicKey: 'Kf94oBMClhRLkN0ie',
        })
        .then(
          () => {
           swal("Message successfully sended!","","success");
          },
          (error) => {
            swal("Something is wrong","","error");
          },
        );
    };
    return (
        <div>
            <h1 className='text-center my-5'>Contact Us</h1>
            <div className="d-flex align-items-center justify-content-center my-5">
                <div className="col-5">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" name='name' className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Surname</label>
                            <input type="text" name='surname' className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Number</label>
                            <input type="tel" name='phone' className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" name='email' className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Message</label>
                            <div class="form-floating">
                                <textarea class="form-control" ></textarea>
                                <label name='message' for="floatingTextarea2">Comments</label>
                            </div>
                        </div>


                        <button type="submit" className="btn btn-primary">Send</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Contact
