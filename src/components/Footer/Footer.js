import React from "react";
import "./footer.css";
import Image from "../_misc/Image/Image";
import ServiceCategory from "../_misc/ServiceCategory/ServiceCategory";
import useFooter from "./useFooter";

export default function Footer() {
  const { footerDataTranslated } = useFooter();

  return (
    <footer className="footer pb-sxx-lrg pt-sxx-lrg">
      <div className="container">
        <div className="row">
          <div className="footer__wrap">
            <ul className="footer__col-list">
              <li className="footer__col footer__col--logo">
                <div className="footer__logo-wrap">
                  <a className="logo footer__logo" href={"."}>
                    <Image
                      src={footerDataTranslated.logoSrc}
                      alt={footerDataTranslated.translatablePart.logoAlt}
                      pictureClass={""}
                    />
                  </a>
                  <p className="footer__logo-text">
                    {footerDataTranslated.translatablePart.logoText}
                  </p>
                </div>
                <p className="footer__description">
                  {footerDataTranslated.translatablePart.logoDescription}
                </p>
              </li>
              {footerDataTranslated.servicesList.map((entry, idx) => {
                return (
                  <li key={idx} className="footer__col footer__col--services">
                    <ServiceCategory data={entry} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
