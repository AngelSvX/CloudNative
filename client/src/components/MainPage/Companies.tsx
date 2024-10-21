import React from "react";
import { logos } from "../../types/logos";

const Companies: React.FC = () => {
  return (
    <article className="p-8 w-full h-auto">
      <section className="flex items-center justify-center pb-10 text-center">
        <p className="text-3xl font-monserrat">
          With the trust of more than 100 leading companies in their field.
        </p>
      </section>

      <section className="flex flex-wrap items-center justify-evenly">
        {logos.map((logo, index) => {
          const logoName = Object.keys(logo)[0];
          const logoUrl = logo[logoName];
          return (
            <div key={index} className="p-2">
              <img
                src={logoUrl}
                alt={`Logo ${logoName}`}
                className="logo-item max-w-full h-auto"
              />
            </div>
          );
        })}
      </section>
    </article>
  );
};

export default Companies;
