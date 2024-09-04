import { SOCIAL_MEDIA_LINKS } from "../constants";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center gap-10 pb-10">
      {SOCIAL_MEDIA_LINKS.map((social, index) => (
        <a href={social.href} key={index}>
          {social.icon}
        </a>
      ))}
    </footer>
  );
};

export default Footer;
