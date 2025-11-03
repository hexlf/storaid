function Navbar() {
  return (
    <div>
      <div className="Navbarcontainer">
        <div className="NeedsToBeDarkGreen">
          <div className="phone-mail">
            <div>
              <img className="smallimg" src="src/img/phone.png" alt="phone number" />
              <a href="X">+46 8 123 122 44</a>
            </div>
            <div>
              <img className="smallimg" src="src/img/mail.png" alt="gmail" />
              <a href="X">contact@domain.com</a>
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
          <a href="X"><img src="src/img/Logo.png" alt="Logo" /></a>
          <a href="">Home</a>
          <a href="">About Us</a>
          <a href="">Services</a>
          <a href="">Contact Us</a>
          <a href="booking.jsx" className="NeedToBeYelow">Book Now</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar