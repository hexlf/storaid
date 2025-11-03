function Navbar() {
  return (
    <div>
      <div className="Navbarcontainer">
        <div className="NeedsToBeDarkGreen">
          <div className="phone-mail">
            <div>
              <img className="smallimg" src="src/img/phone.png" alt="phone number" />
              <a className="whitelinks" href="X">+46 8 123 122 44</a>
            </div>
            <div>
              <img className="smallimg" src="src/img/mail.png" alt="gmail" />
              <a className="whitelinks" href="X">contact@domain.com</a>
            </div>
          </div>
          <div className="imgcontainer">
            <img className="imgneed30" src="src/img/facebook.png" alt="" />
            <img className="imgneed30" src="src/img/X.png" alt="" />
            <img className="imgneed30" src="src/img/instagram.png" alt="" />
            <img className="imgneed30" src="src/img/youtube.png" alt="" />
          </div>
        </div>
        <div className="NeedToBeWhite">
          <div className="needrow">
              <a href="X"><img className="logo" src="src/img/Logo.png" alt="Logo" /></a>
              <div>
                <a className="greenlinks NeedsUrbanFont" href="">Home</a>
                <a className="greenlinks NeedsUrbanFont" href="">About Us</a>
                <a className="greenlinks NeedsUrbanFont" href="">Services</a>
                <a className="greenlinks NeedsUrbanFont" href="">Contact Us</a>
              </div>
              <div>
                <a href="booking.jsx" className="NeedToBeYelow btn-area">Book Now</a>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar