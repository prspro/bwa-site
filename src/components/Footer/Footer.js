import React from "react";
import "./footer.css";
import Image from "../_misc/Image/Image";
import ServiceCategory from "../_misc/ServiceCategory/ServiceCategory";

export default function Footer() {
  const footerInfo = {
    logoText: "autodrone",
    logoDescription: "Look up the sky and beautiful world easily.",
  };

  const servicesData = [
    {
      categoryTitle: "Explore",
      linksList: [
        {
          anchor: "Our Services",
          href: ".",
        },
        {
          anchor: "Specification",
          href: ".",
        },
        {
          anchor: "Refund",
          href: ".",
        },
        {
          anchor: "Playlist",
          href: ".",
        },
      ],
    },
    {
      categoryTitle: "Account",
      linksList: [
        {
          anchor: "My Account",
          href: ".",
        },
        {
          anchor: "Top Benefit",
          href: ".",
        },
        {
          anchor: "How-to Tutorials",
          href: ".",
        },
        {
          anchor: "Moment",
          href: ".",
        },
      ],
    },
    {
      categoryTitle: "Office",
      linksList: [
        {
          anchor: "+021 2208 1996",
          href: "+021 2208 1996",
        },
        {
          anchor: "SCBD, Jakarta",
          href: "",
        },
        {
          anchor: "No.2 (Autodrone)",
          href: "",
        },
        {
          anchor: "support@autodrone.id",
          href: "support@autodrone.id",
        },
      ],
    },
  ];
  return (
    <footer className="footer">
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
