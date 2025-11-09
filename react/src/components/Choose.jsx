import React from 'react'

function Choose() {
  return (
    <div className='Choose-container'>
        <div className='Choose-toptext'>
          <h4 className='NeedToBeYelow NeedsUrbanFont'>Why Choose Us</h4>
          <div className='topundertext'>
            <h3 className='NeedsUrbanFont NeedsToBeDarkGreen'>Choose Us for Exceptional Storage Solutions</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
          </div>
        </div>
        <div className='Choose-bottomside'>
          <div className='Choose-textside'>
            <div className='Choose-textcontainer'>
              <img src="src/img/lock.png" alt="Security" />
              <div className='textholder'>
                <h5>Security and Safety</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              </div>
            </div>
            <div className='Choose-textcontainer'>
              <img src="src/img/moneybag.png" alt="Security" />
              <div className='textholder'>
                <h5>Flexible and Affordable</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              </div>
            </div>
            <div className='Choose-textcontainer'>
              <img src="src/img/brush.png" alt="Security" />
              <div className='textholder'>
                <h5>Clean and Well-Maintained Facilities</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              </div>
            </div>
            <div className='Choose-textcontainer'>
              <img src="src/img/clock.png" alt="Security" />
              <div className='textholder'>
                <h5>24/7 and Convenient Access</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              </div>
            </div>
          </div>
          <div className='Choose-imgside'>
            <img src="src/img/whyus.png" alt="X" />
          </div>
        </div>
    </div>
  )
}

export default Choose