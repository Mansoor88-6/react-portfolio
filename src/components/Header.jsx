
const NavContent = ()=>{
    return(
        <>
        <h2>Mansoor</h2>
        <div>
            <a href="#home">Home</a>
            <a href="#work">Work</a>
            <a href="#timeline">Experience</a>
            <a href="#services">Services</a>
            <a href="#testimonial">Testimonial</a>
            <a href="#contact">Contact</a>
        </div>
        <a href="mailto:mkniazi.886@gmail.com">
          <button>Email</button>
        </a>
        </>
    )
   
}
const Header = () => {
  return (
    <nav>
        <NavContent/>
    </nav>
  )
}



export default Header