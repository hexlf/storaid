

function AboutUs() {
  return (
    <div className="AboutUs-container">
        <div className="AboutUsimgside">
            <img className="aboutbigimg" src="src/img/About.png" alt="" />
        </div>
        <div className="AboutUstextside">
            <h4 className="NeedsUrbanFont NeedToBeYelow">About Us</h4>
            <h1 className="NeedsUrbanFont NeedsToBeDarkGreen">Providing a Safe Space for Your Treasured Items</h1>
            <p className="NeedsToBeDarkGreen">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui 
                lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi, non sodales augue. 
                Phasellus eget elit gravida.
            </p>
            <div className="tilesholder">
              <div className="Markedtiles abouttiles">
                  <h5 className="NeedsUrbanFont">Vision</h5>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium.</p>
              </div>
              <div className="Markedtiles abouttiles">
                  <h5 className="NeedsUrbanFont">Mission</h5>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium.</p>
              </div>
            </div>
            <div className="aboutinfo">
              <a className="About-btn NeedToBeYelowbtn btn-area NeedsUrbanFont" href="X">Discover More</a>
              <img className="aboutimg" src="src/img/aboutphone.png" alt="" />
              <div className="info">
                <h5 className="NeedsUrbanFont NeedsToBeDarkGreen">More Information</h5>
                <a className="NeedsToBeDarkGreen" href="X">+46 8 123 122 44</a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs