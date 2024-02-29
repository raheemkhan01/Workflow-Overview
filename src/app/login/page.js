import React from 'react'

const Login = () => {
    return (
        <>
            <div className="flex flex-row justify-around items-center h-screen gap-56">
                <div className="left-card-wrapper rounded-5 bg-blue-100 gap-2 w-[625px] h-[450px] justify-center px-20 bg-primary-1 shadow-md flex flex-col ">
                    <h2 className="font-segoe-ui text-3xl  font-bold leading-32 tracking-normal text-left mb-10 text-blue-500">
                        SYNECT<span className="text-red-500">I</span>KS
                    </h2>
                    <h1 className="font-segoe-ui text-4xl font-bold leading-11 tracking-tighter text-left mb-5">
                        Workflow Management
                    </h1>
                    <p className="card-text font-segoe-ui text-2xl font-semibold leading-10 tracking-tighter text-left text-gray-400">
                        Manage your project and the team in easy way.
                    </p>
                </div>
                <form action="/main">
                    <div className="login w-96 h-72 flex flex-col justify-between">
                        <div className="login-bar w-96 h-11 bg-gray-100 p-2">
                            <h4 className="flex two gap-7 text-black no-underline items-center">
                                <a href="#" className="text-blue-400">
                                    Login
                                </a>{" "}
                                <a href="#">Signup</a>
                            </h4>
                        </div>
                        <div className="flex input-main flex-col gap-7">
                            <input
                                className="input w-80 h-10 p-2 text-center border border-blue-500 font-roboto text-base font-normal leading-6 tracking-normal"
                                placeholder="Username:admin or User"
                            ></input>
                            <input
                                type="Password"
                                className="input w-80 h-10 p-2 text-center border border-blue-500 font-roboto text-base font-normal leading-6 tracking-normal"
                                placeholder="Password:Synectiks design"
                            ></input>
                        </div>

                        <div className="flex new justify-between mt-5">
                            <div className="flex cbx gap-1">
                                <input type="checkbox" /> <span> Remember me</span>
                            </div>

                            <a href="#" className="text-blue-500">
                                Forgot your Password?
                            </a>
                        </div>
                        <input
                            type="submit"
                            value="Sign In"
                            className="cursor-pointer bg-blue-500 text-white px-3 py-2 rounded w-28"
                        />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login