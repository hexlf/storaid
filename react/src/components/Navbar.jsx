const Navbar = () => {
  return (
    <div>
      <div className="Navbarcontainer">
        <div className="Navbartop NeedsToBeDarkGreen">
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
            <img src="src/img/facebook.png" alt="" />
            <img src="src/img/X.png" alt="" />
            <img src="src/img/instagram.png" alt="" />
            <img src="src/img/youtube.png" alt="" />
          </div>
        </div>
        <div className="Navbarbottom">
          <div className="needrow">
              <a href="X"><img className="logo" src="src/img/Logo.png" alt="Logo" /></a>
              <div>
                <a className="greenlinks NeedsUrbanFont" href="x">Home</a>
                <a className="greenlinks NeedsUrbanFont" href="x">About Us</a>
                <a className="greenlinks NeedsUrbanFont" href="x">Services</a>
                <a className="greenlinks NeedsUrbanFont" href="x">Contact Us</a>
              </div>
              <div>
                <a href="booking.jsx" className="NeedToBeYelow btn-area btn-navbar NeedsUrbanFont">Book Now</a>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar