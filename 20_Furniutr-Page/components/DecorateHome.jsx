import Image_decorate_home from "../src/assets/decorate-home.png";
import box from "../src/assets/side-box.png";
import circleGrid from "../src/assets/circle-grid.png";
export default function DecorateHome() {
  return (
    <section className="decorate-home grid-background w-full flex mt-10 relative px-14 max-[640px]:px-7 max-[340px]:px-5">
      <div className="absolute left-0 w-8 top-14 max-md:top-5 max-sm:top-0 max-lg:h-[150px] max-sm:h-[100px] overflow-hidden max-md:w-5 max-lg:max-w-6 max-sm:max-w-4">
            <img src={box} alt="side box image"/>
          </div>
      <div className="text-items flex flex-col w-full justify-center">
        <h3 className="text-[#F7515C] font-black font-[Poppins,sans-serif] text-[1.25rem] max-md:text-[0.8rem] max-sm:pt-3">
          DECORATE HOME
        </h3>
        <p className="font-bold font-[Montserrat] text-[3.4375rem] max-[1024]:text-4xl max-[950px]:text-[33px] max-[768px]:text-3xl max-[640px]:text-2xl max-[325px]:text-xl text-[#282A30] mt-14 max-lg:mt-7 max-md:mt-4 max-w-[604px] max-lg:max-w-[403px]">
          Feel your home with a modern design space
        </p>
        <div className="buttons flex mt-11 max-[768px]:mt-9 max-[640px]:mt-5 max-[325px]:mt-0 max-[325px]:flex-col ">
          <button className="w-full max-w-[250px] max-lg:max-w-[150px] max-md:max-w-[100px] max-sm:max-w-[60px] max-h-[65px] max-md:max-h-[40px] max-md:mt-2 max-sm:mt-0 h-full bg-[#F7515C] text-[#FFFFFF] font-semibold font-[Montserrat] text-xl max-md:text-xs max-sm:text-[9px]">
            Discover
          </button>
          <button className="flex">
            <div className="w-14 h-14 max-sm:w-7 max-sm:h-7 ml-10 max-lg:ml-5 max-md:ml-1 mr-5 max-md:mr-1 rounded-full bg-[#f9f6f6] flex items-center justify-center shrink-0">
              <svg
                width="30%"
                height="40%"
                viewBox="0 0 15 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5 7.63397C15.1667 8.01888 15.1667 8.98112 14.5 9.36602L1.75 16.7272C1.08333 17.1121 0.249999 16.631 0.249999 15.8612L0.25 1.13878C0.25 0.368983 1.08333 -0.112142 1.75 0.272758L14.5 7.63397Z"
                  fill="#282A30"
                />
              </svg>
            </div>
            <div className="self-center font-semibold font-[Montserrat] text-xl max-md:text-xs max-sm:text-[9px] text-[#282A30] shrink-0">
              Watch video
            </div>
          </button>
        </div>
      </div>
      <div className="image-item w-full flex justify-end max-w-fit overflow-y-hidden relative z-20 mr-8 max-md:mr-5 max-sm:mr-0 shrink-[1.5]">
        <img src={Image_decorate_home} alt="decorate image" />
      </div>
      <div className="absolute right-8 max-sm:right-2 max-w-64 top-6 max-md:max-w-48 max-sm:max-w-28 z-10">
        <img src={circleGrid} className="" alt="circle grid image"/>
      </div>
      <div className="absolute bg-[#FFFFFF] max-w-[90px]  w-full top-0 bottom-0 right-0"></div>
    </section>
  );
}
