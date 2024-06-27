
import localFont from "next/font/local";

const myFont = localFont({src: "fonts/ST.ttf"});


const COUNTDOWN_FROM = "2024-09-07";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const StickyCountdown = () => {
  return (
    <div className="sticky left-0 right-0 top-0 z-50 w-full bg-green px-2 py-4 text-pink text-center">
        <div className="text-4xl font-semibold">
            <span className={`${myFont.className}`}>Brescia Pride</span>
        </div>
        <span className="text-xl">
            7 settembre 2024
        </span>
    </div>
  );
};


export default StickyCountdown;
