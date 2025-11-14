import React, {useState} from 'react'

export default function Subscribe() {
  const [data, setData] = useState({email:''})

  const handleInputChange = (e) => {
    const {name, value } = e.target;
    setData({ ...data, [name]: value }); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/subscribe', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

  };

  return (
    <div className='Subscribe-area'>
      <div className='Subscribe-textside'>
        <h3 className='NeedsUrbanFont NeedsToBeDarkGreen'>Subscribe Our Newsletter</h3>
        <p className='NeedsToBeDarkGreen'>Subscribe to our newsletter to receive early discount offers,
           updates and info</p>
      </div>
      <div className='Subscribe-submit'> 
        <form onSubmit={handleSubmit}>
          <input className='textinput' name='email' type="email" value={data.email} onChange={handleInputChange} required placeholder="Enter your email" />
          <button className='NeedToBeYelowbtn' type="submit">submit</button>
        </form>
      </div>
    </div>
  )
}