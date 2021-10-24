import React from "react";
import "./footer.css";
import Image from "../_misc/Image/Image";
import ServiceCategory from "../_misc/ServiceCategory/ServiceCategory";
import { footerInfo } from "../../data/initialData";
import { servicesData } from "../../data/initialData";

export default function Footer() {
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
                      src={"/img/svg/logo.svg"}
                      alt={"logo"}
                      pictureClass={""}
                    />
                  </a>
                  <p className="footer__logo-text">{footerInfo.logoText}</p>
                </div>
                <p className="footer__description">
                  {footerInfo.logoDescription}
                </p>
              </li>
              {servicesData.map((entry, idx) => {
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
