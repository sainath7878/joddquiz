import { BiGithub, BiTwitter, BiLinkedin } from "../../assets/icons/Icons";
import { v4 as uuid } from "uuid";

import "./footer.css";

export function Footer() {
  const footerData = [
    { _id: uuid(), icon: BiGithub },
    { _id: uuid(), icon: BiTwitter },
    { _id: uuid(), icon: BiLinkedin },
  ];
  return (
    <footer className="footer d-flex align-center justify-center">
      <p className="fs-s">Made with ❤️ by Sainath</p>
      <div>
        {footerData.map((item) => {
          return (
            <a
              key={item._id}
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
