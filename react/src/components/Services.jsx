import React from 'react'

function Services() {
  return (
    <div className="Services-container">
        <div className="Services-header">
            <h4 className="NeedToBeYelow NeedsUrbanFont">Our Services</h4>
        </div>
        <div className="Services-topside">
            <h3 className="NeedsToBeDarkGreen NeedsUrbanFont">Specialized Storage for Every Special Item</h3>
            <p className="NeedsToBeDarkGreen NeedsUrbanFont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
        </div>
        <div className="Services-bottomside">
            <div className="servicesgap">
                <div className="Markedtiles Service-tiles">
                    <h5 className="NeedsToBeDarkGreen NeedsUrbanFont">Diverse Unit Sizes</h5>
                    <p className="NeedsToBeDarkGreen NeedsUrbanFont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.1</p>
                </div>
                <div className="Markedtiles Service-tiles">
                    <h5 className="NeedsToBeDarkGreen NeedsUrbanFont">Moving Assistance</h5>
                    <p className="NeedsToBeDarkGreen NeedsUrbanFont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                
            </div>
            <div>
                <img className="Service-img" src="src/img/Services.png" alt="" />
            </div>
            <div className="servicesgap">
                <div className="Markedtiles Service-tiles">
                    <h5 className="NeedsToBeDarkGreen NeedsUrbanFont">Vehicle Storage</h5>
                    <p className="NeedsToBeDarkGreen NeedsUrbanFont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div className="Markedtiles Service-tiles">
                    <h5 className="NeedsToBeDarkGreen NeedsUrbanFont">Top-Notch Security</h5>
                    <p className="NeedsToBeDarkGreen NeedsUrbanFont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.4</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Services