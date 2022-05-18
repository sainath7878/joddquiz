import { BiGithub, BiTwitter, BiLinkedin } from "../../assets/icons/Icons";

import "./footer.css";

export function Footer() {
  const footerData = [
    { icon: BiGithub },
    { icon: BiTwitter },
    { icon: BiLinkedin },
  ];
  return (
    <footer className="footer d-flex align-center justify-center">
      <p className="fs-s">Made with ❤️ by Sainath</p>
      <div>
        {footerData.map((item) => {
          return (
            <a
              href="/"
              className="footer-link fs-l mr-sm"
              target="_blank"
              rel="noreferrer"
            >
              <item.icon />
            </a>
          );
        })}
      </div>
    </footer>
  );
}
