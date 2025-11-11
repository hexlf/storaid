import React from 'react'

function Subscribe() {
  return (
    <div className='Subscribe-area'>
      <div className='Subscribe-textside'>
        <h3 className='NeedsUrbanFont NeedsToBeDarkGreen'>Subscribe Our Newsletter</h3>
        <p className='NeedsToBeDarkGreen'>Subscribe to our newsletter to receive early discount offers, updates and info</p>
      </div>
      <div className='Subscribe-submit'> 
        <form action="">
          <span className='red'>*</span>
          <input className='textinput' type="text" required placeholder="Enter your email" />
          <button className='NeedToBeYelowbtn' type="submit">submit</button>
        </form>
      </div>
    </div>
  )
}

export default Subscribe