
import {AiFillGithub,AiFillLinkedin,AiOutlineArrowUp,} from "react-icons/ai";
import me from "../assets/image-without-bg.png";
const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={me}
          alt="Founder"
        />

        <h2>Mansoor Khan</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/mansoor-khan-bb7822172/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/Mansoor88-6?tab=overview&from=2023-08-01&to=2023-08-14" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;