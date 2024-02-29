import React from "react";
import style from "./usecaseList.module.css";
import Check from "../../../public/assets/Check.svg";
import Image from "next/image";

const UsecaseList = () => {
    return (
        <>
            <div className={style.listTable}>

                {/* <div className={style.headingRow}>
            <div className="flex justify-evenly">
              <div className="w-full border-2 ">
                <h4>Usecase</h4>
              </div>
              <div className="w-full border-2 headings">
                <h4>Requirement</h4>
              </div>
              <div className="w-full border-2 headings">
                <h4>Mock Development</h4>
              </div>
              <div className="w-full border-2 headings">
                <h4>Actual Development</h4>
              </div>
              <div className="w-full border-2 headings">
                <h4>CI/CD Test</h4>
              </div>
              <div className="w-full border-2 headings">
                <h4>Staging/Release</h4>
              </div>
              <div className="w-full border-2 headings">
                <h4>Publish/Operate</h4>
              </div>
            </div>
          </div> */}

                <div className={style.tableContainer}>
                    {/* Loop through rows */}
                    <div className={style.listHeading}>
                        <div className={style.tableRow}>
                            <div className={style.tableCell}>
                                <h4>Usecse</h4>
                            </div>
                            <div className={style.tableCell}>
                                <h4>Requirement</h4>
                            </div>
                            <div className={style.tableCell}>
                                <h4>Mock Development</h4>
                            </div>
                            <div className={style.tableCell}>
                                <h4>Actual Development</h4>
                            </div>
                            <div className={style.tableCell}>
                                <h4>CI/CD Test</h4>
                            </div>
                            <div className={style.tableCell}>
                                <h4>Staging/Release</h4>
                            </div>
                            <div className={style.tableCell2}>
                                <h4>Publish/Operate</h4>
                            </div>
                        </div>
                    </div>
                    <div className={style.listBody}>
                        <div className={style.bodyRow}>
                            <div className={style.tableCell}>
                                <h4 className={style.usecaseNo}>Usecse1</h4>
                            </div>
                            <div className={style.tableCell}>
                                <Image src={Check} alt="" />
                            </div>
                            <div className={style.tableCell}>
                                <Image src={Check} alt="" />
                            </div>
                            <div className={style.tableCell}>
                                <Image src={Check} alt="" />
                            </div>
                            <div className={style.tableCell}>
                                {/* <Image src={Check} alt="" /> */}
                            </div>
                            <div className={style.tableCell}>
                                {/* <Image src={Check} alt="" /> */}
                            </div>
                            <div className={style.tableCell2}>
                                {/* <Image src={Check} alt="" /> */}
                            </div>

                            <div className={style.tableCell}>
                                <h4 className={style.usecaseNo}>Usecse2</h4>
                            </div>
                            <div className={style.tableCell}>
                                <Image src={Check} alt="" />
                            </div>
                            <div className={style.tableCell}>
                                <Image src={Check} alt="" />
                            </div>
                            <div className={style.tableCell}>
                                <Image src={Check} alt="" />
                            </div>
                            <div className={style.tableCell}>
                                <Image src={Check} alt="" />
                            </div>
                            <div className={style.tableCell}>
                                {/* <Image src={Check} alt="" /> */}
                            </div>
                            <div className={style.tableCell2}>
                                {/* <Image src={Check} alt="" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UsecaseList;
