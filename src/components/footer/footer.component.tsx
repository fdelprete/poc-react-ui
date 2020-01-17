import React from "react";
import "./footer.component.styles.scss";
import { Icon } from "antd";
import { ReactComponent as Logo } from "../../assets/footer-certification-logo.svg";

import config from "../../config";

const {
  components: { footer }
} = config;

interface FooterActionProps {
  icon?: string;
  text?: string;
  theme?: string;
  url?: string;
  target?: string;
}

const FooterAction: React.FC<FooterActionProps> = ({
  url = "#!",
  icon,
  text = "",
  target = "_self",
  theme = "outlined"
}: any) => (
  <li key={`footer-${text}`} className="cg-home__footer--action">
    <a href={url} target={target}>
      {icon ? <Icon type={icon} theme={theme} /> : null}
      {text}
    </a>
  </li>
);

const FooterLeftColumn: React.FC<any> = ({ listOfElements }) => {
  const listElementsOfLeftColumn = [
    "HOME",
    "CHI SIAMO",
    "COSA OFFRIAMO",
    "SERVIZI PER TE",
    "NEWS",
    "CONTATTACI"
  ];
  return (
    <div className="cg-home__footer__left">
      <div className="cg-home__footer__left__sub-left-column">
        <ul>
          {listElementsOfLeftColumn.map((text: any) => (
            <FooterAction key={`action-${text}`} text={text} />
          ))}
        </ul>
      </div>
      <div className="cg-home__footer__left__sub-right-column">
        <div>
          <ul>
            <FooterAction icon="message" text="HAI BISOGNO DI AIUTO?" />
            <FooterAction icon="user" text="DIVENTA UN CLIENTE A VALORE" />
            <FooterAction icon="login" text="ACCEDI ALLA TUA AREA RISERVATA" />
          </ul>
        </div>
        <div className="social-links">
          <span>Seguici su</span>
          <ul>
            <FooterAction
              url={footer.social_links.facebook}
              icon="facebook"
              theme="filled"
              target="_blank"
            />
            <FooterAction
              url={footer.social_links.youtube}
              icon="youtube"
              theme="filled"
              target="_blank"
            />
            <FooterAction
              url={footer.social_links.twitter}
              icon="twitter"
              theme="outlined"
              target="_blank"
            />
            <FooterAction
              url={footer.social_links.linkedin}
              icon="linkedin"
              theme="filled"
              target="_blank"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

const FooterRightColumn: React.FC<any> = () => (
  <div className="cg-home__footer__right">
    <div className="cg-home__footer__right">
      <p className="cg-home__footer__right--copyright">{footer.copyright}</p>
      <span>
        <Logo />
      </span>
    </div>
  </div>
);

const Footer = () => {
  return (
    <div className="cg-home__footer">
      <FooterLeftColumn />
      <FooterRightColumn />
    </div>
  );
};

export default Footer;
