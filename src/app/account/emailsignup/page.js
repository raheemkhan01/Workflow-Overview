import React from "react";
import signupbg from "../../../../public/assets/signupBg.svg"
import Image from "next/image";
import Link from "next/link";


const Signup = () =>  {
    return (
      <>
        <div className="flex pl-6 pb-8 flex-row  justify-center h-[100%]  pb-6">
          <div className="flex  flex-col h-[100%] px-5">
            <div className="left-card-wrapper rounded-5  w-[500px] h-[150px] mt-10  bg-primary-1 flex flex-col ">
              <h2 className="font-segoe-ui text-3xl font-bold leading-32 tracking-normal text-left mb-10 text-blue-500">
                SYNECT<span className="text-red-500">I</span>KS
              </h2>
              <h1 className="font-segoe-ui text-4xl font-bold leading-11 tracking-tighter text-left mb">
                Workflow Management
              </h1>
              <p className="card-text font-segoe-ui text-l  leading-10 tracking-tighter text-left text-gray-400">
              Manage your project and the team in easy way
              </p>
            </div>
            <form action="/main">
              <div className="login w-96 py-6 h-72 flex flex-col justify-between">
                <div>
                  <h2 className="font-segoe-ui text-3xl font-bold leading-11 tracking-tighter text-left mb">
                  Sign up as an User
                  </h2>
                  <p className="card-text font-segoe-ui text-sm  leading-10 tracking-tighter text-left text-gray-400">
                  Create Your Account
                  </p>
                </div>
                <div className="flex input-main flex-col gap-7 ">
                 
                  <input
                    type="text"
                    className="input w-[100%] h-10 p-2  border border-blue-500 font-roboto text-base font-normal leading-6 tracking-normal"
                    placeholder="Email"
                  ></input>
                  <input
                    type="Password"
                    className="input w-[100%] h-10 p-2  border border-blue-500 font-roboto text-base font-normal leading-6 tracking-normal"
                    placeholder="Password(6 digits at least, case sensitive)"
                  ></input>
                  <input
                    type="Password"
                    className="input w-[100%] h-10 p-2  border border-blue-500 font-roboto text-base font-normal leading-6 tracking-normal"
                    placeholder="Comfirm password"
                  ></input>
                </div>
                <div className="mt-8 flex flex-col gap-2 items-center">
                <input
                  type="button"
                  value="Create Account"
                  className="cursor-pointer w-[100%] bg-blue-500 text-white px-3 py-2 rounded w-28"
                />
                <p><span className="text-blue-500"><Link href="/account/login">Have an account ? Sign in</Link></span></p>
                </div>
              </div>
            </form>
          </div>
          <Image src={signupbg} className=" w-[650px] mt-4"></Image>
          
        </div>
      </>
    );
  };
  

export default Signup;
