import React, {useState} from 'react'

const Form = () => {
    const [formdata, setFormData] = useState({name:'', email:'', phoneNumber:'', subject:'', comment:'' })
    
      const handleInputChange = (e) => {
        const {name, value } = e.target;
        setFormData({ ...formdata, [name]: value }); 
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/contact', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formdata)
        })
    };

  return (
    <>
        <div className='Form-holder'>
            <div className='Form-imgside'>
                <h4 className='NeedsUrbanFont NeedToBeYelow'>Get in Touch</h4>
                <h3 className='NeedsUrbanFont NeedsToBeDarkGreen'>Get Personalized Assistance – Contact Us</h3>
                <p className='NeedsToBeDarkGreen'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
                <img src="src/img/formgray.png" alt="nothing here Yet" />
            </div>
            <div className='Form-area'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="text">Your Name</label><br />
                    <input type="text" name="name" value={formdata.name} onChange={handleInputChange} required placeholder='Your name' /> <br />
                    <div className='form-samerow'>
                        <div>
                            <label htmlFor='email'>Email</label><br />
                            <input type="email" name="email" value={formdata.email} onChange={handleInputChange} required placeholder='Email' /><br />
                        </div>
                        <div>
                            <label htmlFor='Telephone'>Telephone</label><br />
                            <input type="text" name="phoneNumber" value={formdata.phoneNumber} onChange={handleInputChange} placeholder='Telephone' /><br />
                        </div>
                    </div>
                    <label htmlFor='Subject'>Subject</label><br />
                    <input type="text" name="subject" value={formdata.subject} onChange={handleInputChange} required placeholder='How can we help you' /><br />
                    <label htmlFor='Comment'>Comments / Questions</label><br />
                    <input className='formcomment' type="text" name="comment" value={formdata.comment} onChange={handleInputChange} required placeholder='Comments' /><br />
                    <button className='NeedToBeYelowbtn' type="submit">submit</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Form