import React from "react";
import { services } from "../../types/services";
import { Button } from "@mui/material";

const Services: React.FC = () => {
  return (
    <article className="mb-24">
      <section className="w-full h-auto flex flex-col justify-center items-center mt-14 px-4">
        <div className="w-full md:w-2/5">
          <h2 className="font-monserrat text-5xl font-medium text-center">
            We are ready to help you with your projects
          </h2>
        </div>
        <div className="mt-14 h-auto w-full md:w-2/5 text-center">
          <h5 className="text-xl font-light font-monserrat opacity-70">
            Take a look at some of the services we offer to maximize your
            productivity
          </h5>
        </div>
      </section>

      <section className="flex flex-wrap items-center justify-evenly mt-20 gap-8">
        {services.map((service, key) => {
          return (
            <article
              key={key}
              className="flex flex-col items-center bg-card w-full md:w-[37%] h-96 rounded-xl border-b-8 border-card p-4"
            >
              <div className="w-full h-1/3 flex items-center justify-between pt-3">
                <div className="w-1/4 h-full flex items-center justify-end">
                  <div className="bg-iconCard w-3/4 h-full flex items-center justify-center border-white border-4">
                    <img src={service.icon} alt="" />
                  </div>
                </div>
                <div className="w-3/4 h-full flex items-center justify-center">
                  <h2 className="w-[80%] text-center font-medium font-maven text-5xl opacity-90">
                    {service.title}
                  </h2>
                </div>
              </div>
              <div className="flex justify-center text-justify w-[87%] h-2/3 pt-8 font-monserrat font-light text-xl">
                <p className="tracking-widest opacity-75">{service.text}</p>
              </div>
            </article>
          );
        })}
      </section>

      <section className="mt-14 w-full h-auto flex items-center justify-center px-4">
        <div className="bg-card w-full md:w-5/6 h-96 flex items-center flex-col rounded-xl border-b-8 border-card p-4">
          <div className="w-[75%] h-2/6 flex items-center justify-center text-4xl font-medium">
            <h2 className="text-center">
              To improve your experience we recommend accessing our VIP plan
            </h2>
          </div>
          <div className="w-[75%] h-4/6 font-monserrat flex flex-col items-center">
            <div className="flex items-center justify-center h-3/5">
              <h6 className="mb-6 text-center text-xl tracking-widest">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corporis fugiat animi eius blanditiis expedita repudiandae, iure
                facere vero quas ab. Rerum reiciendis expedita officiis
                molestias exercitationem fugiat quae nulla ipsa?
              </h6>
            </div>
            <div className="w-full flex items-center justify-center">
              <Button
                style={{ width: "18%", height: 55 }}
                variant="outlined"
                size="large"
              >
                Get Plan
              </Button>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Services;
