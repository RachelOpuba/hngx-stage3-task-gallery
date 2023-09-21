import { FaFacebookSquare } from "react-icons/fa";
import {
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="w-full flex flex-col justify-center items-center pt-12  max-w-[1440px]  border-t-2 bg-[#d3e6f9]">
        <div className="flex gap-4 md:gap-[48px] text-2xl">
          <FaFacebookSquare />
          <AiOutlineInstagram />
          <AiOutlineTwitter />
          <AiFillYoutube />
        </div>
        <div className="flex gap-4 md:gap-[36px] font-bold text-[10px] md:text-lg text-[#111827] py-4 sm:py-6">
          <span>Conditions of Use</span>
          <span>Privacy & Policy</span>
          <span>Press Room</span>
        </div>
        <div>
          <p className="font-bold text-[#6B7280] text-[12px] sm:text-lg">
            © 2023 Gallarina Rachel Opuba{" "}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
