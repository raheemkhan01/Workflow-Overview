import Image from "next/image";
import greenArrow from "../../../public/assets/greenRight.svg";
import oneImage from "../../../public/assets/1.svg";
import twoImage from "../../../public/assets/2.svg";
import threeImage from "../../../public/assets/3.svg"
import rightarrowImage from "../../../public/assets/rightArrow.svg"
import fourImage from "../../../public/assets/5.svg";
import fiveImage from "../../../public/assets/5.svg";
import sixImage from "../../../public/assets/6.svg";
export default function AssestView() {
  return (
    <>
      <main className="flex flex-wrap justify-start items-center  gap-7">
        <section className="w-[278px] h-[233px] flex-shrink-0 flex flex-col shadow-sm border rounded-sm bg-white relative overflow-hidden">
          <div className="w-278 h-10.379 flex-shrink-0 border-t-2 border-green-500"></div>
          <div className="w-138 text-blue-950 font-sans text-xl font-semibold text-center bg-slate-50 h-16 flex justify-center items-center">
            Requirement
          </div>
          <div className="flex flex-col justify-center items-start gap-1 px-2 py-2">
            <p className="flex justify-start items-center gap-[7px] text-slate-500 font-sans text-[17px] not-italic font-normal leading-normal">
              <span>
                <Image src={greenArrow} />
              </span>
              Usecase Development
            </p>
            <p className="flex justify-start items-center gap-[7px] text-slate-500 font-sans text-[17px] not-italic font-normal leading-normal">
              <span>
                <Image src={greenArrow} />
              </span>
              Design Specs
            </p>
          </div>
          <div className="relative flex justify-center items-center mt-2">
            <div
              style={{
                backgroundImage: `url(${oneImage.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "50%", // Adjusted to center the image vertically
                left: 0,
                transform: "translateY(-50%)", // Center the image perfectly
              }}
            />
            <div className="absolute w-full h-full flex justify-center items-center">
              <Image src={oneImage} />
            </div>
          </div>
        </section>
        <div>
          <Image src={rightarrowImage} />
        </div>
        <section className="w-[278px] h-[233px] flex-shrink-0 flex flex-col shadow-sm border rounded-sm bg-white relative overflow-hidden">
          <div className="w-278 h-10.379 flex-shrink-0 border-t-2 border-green-500"></div>
          <div className="w-138 text-blue-950 font-sans text-xl font-semibold text-center bg-slate-50 h-16 flex justify-center items-center">
            Mock Development
          </div>
          <div className="flex flex-col justify-center items-start gap-1 px-2 py-2">
            <p className="flex justify-start items-center gap-[7px] text-slate-500 font-sans text-[17px] not-italic font-normal leading-normal">
              <span>
                <Image src={greenArrow} />
              </span>
              API Specification
            </p>
            <p className="flex justify-start items-center gap-[7px] text-slate-500 font-sans text-[17px] not-italic font-normal leading-normal">
              <span>
                <Image src={greenArrow} />
              </span>
              UI Code
            </p>
          </div>
          <div className="relative flex justify-center items-center mt-2">
            <div
              style={{
                backgroundImage: `url(${oneImage.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "50%", // Adjusted to center the image vertically
                left: 0,
                transform: "translateY(-50%)", // Center the image perfectly
              }}
            />
            <div className="absolute w-full h-full flex justify-center items-center">
              <Image src={twoImage} />
            </div>
          </div>
        </section>
        <div>
          <Image src={rightarrowImage} />
        </div>
        <section className="w-[278px] h-[233px] flex-shrink-0 flex flex-col shadow-sm border rounded-sm bg-white relative overflow-hidden">
          <div className="w-278 h-10.379 flex-shrink-0 border-t-2 border-blue-300"></div>
          <div className="w-138 text-blue-950 font-sans text-xl font-semibold text-center bg-slate-50 h-16 flex justify-center items-center">
            Actual Development
          </div>
          <div className="flex flex-col justify-center items-start gap-1 px-2 py-2">
            <p className="flex justify-start items-center gap-[7px] text-slate-500 font-sans text-[17px] not-italic font-normal leading-normal">
              <span>
                <Image src={greenArrow} />
              </span>
              Data Design
            </p>
            <p className="flex justify-start items-center gap-[7px] text-slate-500 font-sans text-[17px] not-italic font-normal leading-normal">
              <span>
                <Image src={greenArrow} />
              </span>
              API Code
            </p>
          </div>
          <div className="relative flex justify-center items-center mt-2">
            <div
              style={{
                backgroundImage: `url(${oneImage.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "50%", // Adjusted to center the image vertically
                left: 0,
                transform: "translateY(-50%)", // Center the image perfectly
              }}
            />
            <div className="absolute w-full h-full flex justify-center items-center">
              <Image src={threeImage} />
            </div>
          </div>
        </section>
        <div>
          <Image src={rightarrowImage} />
        </div>
        <section className="w-[278px] h-[233px] flex-shrink-0 flex flex-col shadow-sm border rounded-sm bg-white relative overflow-hidden">
          <div className="w-278 h-10.379 flex-shrink-0 border-t-2 border-blue-300"></div>
          <div className="w-138 text-blue-950 font-sans text-xl font-semibold text-center bg-slate-50 h-16 flex justify-center items-center">
            CI/CD Tests
          </div>
          <div className="flex flex-col justify-center items-start gap-1 px-2 py-2">
            <p className="flex justify-start items-center gap-[7px] text-slate-500 font-sans text-[17px] not-italic font-normal leading-normal">
              <span>
                <Image src={greenArrow} />
              </span>
              Build Pipeline
            </p>
            <p className="flex justify-start items-center gap-[7px] text-slate-500 font-sans text-[17px] not-italic font-normal leading-normal">
              <span>
                <Image src={greenArrow} />
              </span>
              Test environment
            </p>
          </div>
          <div className="relative flex justify-center items-center mt-2">
            <div
              style={{
                backgroundImage: `url(${oneImage.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "50%", // Adjusted to center the image vertically
                left: 0,
                transform: "translateY(-50%)", // Center the image perfectly
              }}
            />
            <div className="absolute w-full h-full flex justify-center items-center">
              <Image src={fourImage} />
            </div>
          </div>
        </section>
        <div>
          <Image src={rightarrowImage} />
        </div>
        <section className="w-[278px] h-[233px] flex-shrink-0 flex flex-col shadow-sm border rounded-sm bg-white relative overflow-hidden">
          <div className="w-278 h-10.379 flex-shrink-0 border-t-2 border-blue-300"></div>
          <div className="w-138 text-blue-950 font-sans text-xl font-semibold text-center bg-slate-50 h-16 flex justify-center items-center">
            Staging/Release
          </div>
          <div className="flex flex-col justify-center items-start gap-1 px-2 py-2">
            <p className="flex justify-start items-center gap-[7px] text-slate-500 font-sans text-[17px] not-italic font-normal leading-normal">
              <span>
                <Image src={greenArrow} />
              </span>
              Prod environment
            </p>
            <p className="flex justify-start items-center gap-[7px] text-slate-500 font-sans text-[17px] not-italic font-normal leading-normal">
              <span>
                <Image src={greenArrow} />
              </span>
              staging environment
            </p>
          </div>
          <div className="relative flex justify-center items-center mt-2">
            <div
              style={{
                backgroundImage: `url(${oneImage.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "50%", // Adjusted to center the image vertically
                left: 0,
                transform: "translateY(-50%)", // Center the image perfectly
              }}
            />
            <div className="absolute w-full h-full flex justify-center items-center">
              <Image src={fiveImage} />
            </div>
          </div>
        </section>
        <div>
          <Image src={rightarrowImage} />
        </div>
        <section className="w-[278px] h-[233px] flex-shrink-0 flex flex-col shadow-sm border rounded-sm bg-white relative overflow-hidden">
          <div className="w-278 h-10.379 flex-shrink-0 border-t-2 border-blue-300"></div>
          <div className="w-138 text-blue-950 font-sans text-xl font-semibold text-center bg-slate-50 h-16 flex justify-center items-center">
            Publish/Operate
          </div>
          <div className="flex flex-col justify-center items-start gap-1 px-2 py-2">
            <p className="flex justify-start items-center gap-[7px] text-slate-500 font-sans text-[17px] not-italic font-normal leading-normal">
              <span>
                <Image src={greenArrow} />
              </span>
              Ops Readiness
            </p>
            <p className="flex justify-start items-center gap-[7px] text-slate-500 font-sans text-[17px] not-italic font-normal leading-normal">
              <span>
                <Image src={greenArrow} />
              </span>
              Ops Central
            </p>
          </div>
          <div className="relative flex justify-center items-center mt-2">
            <div
              style={{
                backgroundImage: `url(${oneImage.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "50%", // Adjusted to center the image vertically
                left: 0,
                transform: "translateY(-50%)", // Center the image perfectly
              }}
            />
            <div className="absolute w-full h-full flex justify-center items-center">
              <Image src={sixImage} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
 