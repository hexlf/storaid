import React from 'react'

function Testimonials() {
  return (
    <div className="testimonials-container">
      <div className="testimonials-topside">
        <h4 className='NeedsUrbanFont NeedToBeYelow'>Customer Testimonials</h4>
        <h3 className='NeedsUrbanFont'>See What Our Client Have to Say</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. 
          Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. 
          Phasellus eget elit gravida.
        </p>
      </div>
      <div className="testimonials-bottomside">
        <div className="testimonial-card">
          <img className='stars' src="X" alt="Stars rating" />
          <p className='NeedsToBeDarkGreen'>
            Lorem ipsum dolor sit amet, consectetur adipis 
            cing elit. Ut libero lectus, porta nec turpis sit 
            amet, lobortis fringilla ante.
          </p>
          <div className='Userinfo'>
            <img className='profile' src="src/img/grayball.png" alt="Profile picture" />
            <div>
              <h6 className='NeedsUrbanFont NeedsToBeDarkGreen h6size'>Name</h6>
              <p className='NeedsToBeDarkGreen psize'>Customer</p>
            </div>
            <img className='Markimg' src="src/img/comenter.png" alt="Comment icon" />
          </div>
        </div>
        <div className="testimonial-card">
          <img className='stars' src="X" alt="Stars rating" />
          <p className='NeedsToBeDarkGreen'>
            Lorem ipsum dolor sit amet, consectetur adipis 
            cing elit. Ut libero lectus, porta nec turpis sit 
            amet, lobortis fringilla ante.
          </p>
          <div className='Userinfo'>
            <img className='profile' src="src/img/grayball.png" alt="Profile picture" />
            <div>
              <h6 className='NeedsUrbanFont NeedsToBeDarkGreen h6size'>Name</h6>
              <p className='NeedsToBeDarkGreen psize'>Customer</p>
            </div>
            <img className='Markimg' src="src/img/comenter.png" alt="Comment icon" />
          </div>
        </div>
        <div className="testimonial-card">
          <img className='stars' src="X" alt="Stars rating" />
          <p className='NeedsToBeDarkGreen'>
            Lorem ipsum dolor sit amet, consectetur adipis 
            cing elit. Ut libero lectus, porta nec turpis sit 
            amet, lobortis fringilla ante.
          </p>
          <div className='Userinfo'>
            <img className='profile' src="src/img/grayball.png" alt="Profile picture" />
            <div>
              <h6 className='NeedsUrbanFont NeedsToBeDarkGreen'>Name</h6>
              <p className='NeedsToBeDarkGreen'>Customer</p>
            </div>
            <img className='Markimg' src="src/img/comenter.png" alt="Comment icon" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials