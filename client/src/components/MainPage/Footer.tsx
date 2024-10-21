import React from "react";
import Logo from "../../lib/utils/Img/logo.png";
import { iconNetwork } from "../../types/logoNetworks";

const Footer: React.FC = () => {
  return (
    <article className="bg-footerColor flex flex-col items-center w-full h-auto pt-8 font-maven px-4">
      <section className="sup flex flex-wrap w-full md:w-5/6 h-auto justify-between p-2">
        <article className="logo-text flex flex-col items-start mb-4 md:mb-0">
          <div className="mb-3">
            <img src={Logo} alt="CloudNativeLogo" />
          </div>
          <div>
            WE IMPROVE YOUR EXPERIENCE <br />
            WE HELP YOUR IMAGINATION
          </div>
        </article>
        <article className="mb-4 md:mb-0">
          <div className="mb-1">MORE TEMPLATES</div>
          <div className="mb-1">OUR SELLS</div>
          <div className="mb-1">SUBMIT A REQUEST</div>
        </article>
        <article className="sect-two flex flex-col justify-between mb-4 md:mb-0">
          <div className="mb-1">SERVICES</div>
          <div className="mb-1">PRIVACY POLICIES</div>
        </article>
        <article className="sect-three mb-4 md:mb-0">
          <div className="mb-1">COMING SOON</div>
          <div className="mb-1">SUPPORT</div>
        </article>
        <article className="sect-four mb-4 md:mb-0">
          <div className="mb-1">ABOUT US</div>
          <div className="mb-1">CONTACT US</div>
          <div className="mb-1">AFFILIATES</div>
          <div className="mb-1">RESOURCES</div>
        </article>
      </section>

      <div className="line bg-white opacity-40 w-full md:w-5/6 h-[2px] mb-4"></div>

      <section className="bot flex flex-col w-full md:w-5/6 p-3">
        <article className="social-networks w-full flex items-center justify-center mt-4">
          <div className="flex flex-row justify-around w-2/3 md:w-1/3">
            {iconNetwork.map((icon, key) => {
              return (
                <div
                  key={key}
                  className="border-white border-[1px] rounded-full w-12 h-12 flex items-center justify-center hover:scale-110 ease-linear duration-150"
                >
                  <img src={icon.icon} alt="" />
                </div>
              );
            })}
          </div>
        </article>
        <article className="copyxd flex items-center justify-center mt-4">
          <div>© COPYRIGHT ALL RIGHTS RESERVED</div>
        </article>
      </section>
    </article>
  );
};

export default Footer;
