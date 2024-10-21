import React from "react";
import wallpaper from "../lib/utils/Img/wallpaper.png";
import logo from "../lib//utils/Img/logo.png";
import cloudLogo from "../lib/utils/Img/CloudNative.png";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-gray-100">
      <img
        src={wallpaper}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <article className="relative z-10 h-[83%] w-[57%] flex flex-row items-center justify-between">
        <section className="bg-black bg-opacity-80 w-[45%] h-full flex flex-col pl-7 pt-9">
          <div className="w-full ">
            <img src={logo} alt="cloud-native-logo" />
          </div>
          <div className="w-full">
            <h2 className="text-6xl mt-8 font-medium font-mullish text-start">
              What new do you have?
            </h2>
          </div>
          <div className="mt-4">
            <p className="text-start pr-12 font-mullish text-[15px] opacity-80 tracking-wide font-regular">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              reprehenderit adipisci neque nisi natus sapiente magnam quam
              quisquam dolores recusandae voluptates, minus error provident
              dolor, eligendi, animi at ducimus numquam!
            </p>
          </div>
          <div className="w-full flex items-center justify-center mt-8">
            <img src={cloudLogo} alt="cloudNative" />
          </div>
          <div className="w-full text-start mt-10 pr-20 font-mullish text-md text-[14px]">
            if you don't have an account yet, you can
            <Link to={'/register'} className="text-blue-700 font-bold font-mullish">
              {" "}
              register here.
            </Link>
          </div>
        </section>
        <section className="bg-bgBlueOpacity bg-opacity-80 w-[55%] h-full ">
          <header className="w-full h-1/5 font-mullish text-5xl font-bold p-9 flex items-center justify-center">
            <h2>LOGIN</h2>
          </header>
          <div className="w-full h-4/6 flex items-center justify-center ">
            <form className="w-full h-full  flex items-center flex-col">
              <div className="flex flex-col items-center justify-around w-full h-4/6">
                <div className="w-full h-1/3 flex items-center justify-center">
                  <TextField
                    id="outlined-basic"
                    color="primary"
                    label="Enter your Username here"
                    variant="filled"
                    className="bg-blue-200 bg-opacity-20 rounded-md w-4/5"
                  />
                </div>
                <div className="w-full h-1/3 flex items-center justify-center">
                  <TextField
                    id="outlined-basic"
                    color="primary"
                    label="Enter your password here"
                    variant="filled"
                    className="bg-blue-200 bg-opacity-20 rounded-md w-4/5"
                  />
                </div>

                <div className="">
                  <p>Did you forget your password?</p>
                </div>
              </div>
  
              <div className="Button-create-account w-full flex items-center justify-center h-1/6 pt-5">
                  <Button variant="contained" size="large" className="w-1/2" style={{backgroundColor: 'white', color: 'black'}}>LOG IN</Button>
              </div>
            </form>
          </div>
          <div className="flex items-end justify-end w-full mt-8 pr-12">
            <Link to={'/'}>Return to main page</Link>
          </div>
        </section>
      </article>
    </section>
  );
};

export default Login;
