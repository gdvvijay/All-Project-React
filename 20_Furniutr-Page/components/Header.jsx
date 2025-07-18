import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex max-w-6xl w-full justify-between gap-7  max-[1250px]:px-16 max-sm:px-8">
      <h1 className="font-[SF_Pro_Display,sans-serif] text-[2.5rem] max-md:text-[2rem] max-sm:text-[1.5rem] font-black">
        Furniutr.
      </h1>
      <div className="flex justify-between w-full max-w-sm items-center text-[#282A30] max-sm:hidden">
        <Link to="/">Home</Link>
        <Link to="#about">About</Link>
        <Link to="#collection">Collection</Link>
        <Link to="#shop">Shop</Link>
      </div>
      <div className="flex w-full max-w-20 justify-between items-center">
        <svg
          width={18}
          height={22}
          viewBox="0 0 20 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          
        >
          <path
            d="M4 1.2001L1 5.4989V20.5447C1 21.1148 1.21071 21.6615 1.58579 22.0646C1.96086 22.4676 2.46957 22.6941 3 22.6941H17C17.5304 22.6941 18.0391 22.4676 18.4142 22.0646C18.7893 21.6615 19 21.1148 19 20.5447V5.4989L16 1.2001H4Z"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 5.4989H19"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 9.7977C14 10.9378 13.5786 12.0312 12.8284 12.8374C12.0783 13.6436 11.0609 14.0965 10 14.0965C8.93913 14.0965 7.92172 13.6436 7.17157 12.8374C6.42143 12.0312 6 10.9378 6 9.7977"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          width={23}
          height={27}
          viewBox="0 0 27 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
         
        >
          <path
            d="M26.5862 27.0803L20.4654 20.5023C21.939 18.394 22.7345 15.8278 22.7318 13.191C22.7318 6.45568 17.633 0.976013 11.3659 0.976013C5.09879 0.976013 0 6.45568 0 13.191C0 19.9262 5.09879 25.4059 11.3659 25.4059C13.8195 25.4088 16.2073 24.5539 18.1691 22.9702L24.2898 29.5482C24.5997 29.8458 25.0038 30.0047 25.4192 29.9922C25.8346 29.9797 26.2298 29.7968 26.5237 29.481C26.8175 29.1652 26.9877 28.7405 26.9994 28.294C27.011 27.8476 26.8631 27.4133 26.5862 27.0803ZM3.24741 13.191C3.24741 11.4653 3.72355 9.77845 4.61562 8.34364C5.5077 6.90882 6.77563 5.79052 8.2591 5.13015C9.74256 4.46978 11.3749 4.29699 12.9498 4.63365C14.5246 4.9703 15.9712 5.80127 17.1066 7.02148C18.242 8.24169 19.0152 9.79633 19.3284 11.4888C19.6417 13.1813 19.4809 14.9356 18.8664 16.5299C18.252 18.1241 17.2114 19.4868 15.8763 20.4455C14.5412 21.4042 12.9716 21.9159 11.3659 21.9159C9.21355 21.9132 7.15007 20.993 5.62812 19.3574C4.10616 17.7217 3.24999 15.5041 3.24741 13.191Z"
            fill="black"
          />
        </svg>
      </div>
    </header>
  );
}
