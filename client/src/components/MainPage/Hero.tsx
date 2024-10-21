import React from "react";
import { Stack, Button } from "@mui/material";
import video from "../../lib/video/Dribbble.mp4";
import { BorderBeam } from "../../lib/MagicUI/border-beam";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4">
      <article className="w-full flex items-center justify-center pt-6 h-40">
        <div className="w-full md:w-[30%] flex items-center justify-center -mt-3 px-4">
          <div className="border-[1px] border-white w-full h-[44px] flex items-center justify-center rounded-3xl">
            <p className="font-monserrat font-thin text-xl text-center">
              You will find the best templates here
            </p>
          </div>
        </div>
      </article>

      <article className="w-full">
        <div className="flex items-center justify-center flex-col text-center">
          <div className="w-auto h-auto -mt-5">
            <h1 className="text-title font-medium font-maven tracking-wider -mb-5">
              Create your
            </h1>
            <h1 className="text-title font-medium font-maven tracking-wider">
              most modern websites
            </h1>
          </div>

          <div className="flex items-center justify-center">
            <h6 className="font-monserrat font-normal opacity-60 mt-3 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{" "}
              <br className="hidden md:block" /> do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </h6>
          </div>
          <div className="mt-10">
            <Stack spacing={5} direction={"row"}>
              <Button
                size="large"
                variant="contained"
                style={{ width: 150, height: 50, boxShadow: "none" }}
              >
                Get Started
              </Button>
              <Button
                size="large"
                variant="outlined"
                style={{ width: 150, height: 50 }}
              >
                Introduction
              </Button>
            </Stack>
          </div>
        </div>
      </article>
      <article className="flex items-center justify-center w-full">
        <div className="flex aspect-video w-full md:w-2/5 h-96 mt-16 relative rounded-xl mb-20">
          <BorderBeam />
          <video
            className="w-full h-full object-cover rounded-lg"
            src={video}
            loop
            autoPlay
            controls
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </article>
    </section>
  );
};

export default Hero;
