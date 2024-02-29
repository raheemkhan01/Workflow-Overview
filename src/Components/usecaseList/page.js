import React from "react";
import style from "./usecaseList.module.css";
import search from "../../../public/assets/search2.svg";
import Image from "next/image";

const page = () => {
    return (
        <>
            <h2 className="text-3xl font-extrabold text-left w-[100%]">Procurement Solution</h2>

            <div className="w-[100%] text-left text-slate-400 flex gap-14 my-4">
                <p>Last Updated By Siddhesh.D</p>
                <p>24 Min Ago</p>
            </div>
            <p className="pb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam neque sapiente vero id veritatis, minima, quis harum inventore, labore ipsum vel suscipit magni quas exercitationem.
            </p>
            <div className={style.listTable}>
                <div className="flex justify-between">
                    <h3 className={style.heading}>Development Workflow Overview</h3>
                    <div className="flex gap-x-2">
                        <select
                            className="w-48 px-3 py-1 border border-neutral-300 bg-transparent"
                            I
                            placeholder="Sort By"
                        >
                            <option>Sort By</option>
                        </select>
                        <div className="w-48 px-3 py-1 border border-neutral-300 bg-transparent flex">
                            <input type="text" placeholder="Search Usecase" className="border-r-2 border-slate-300 w-36" />
                            <Image src={search} className="ml-2" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
