import Logo from "@/public/assets/logo.svg";
import avatar from "@/public/assets/image-avatar.jpg";
import ThemeSwitchBtn from "./ThemeSwitchBtn";

const Navigation = () => {
  return (
    <nav className="sticky left-0 top-0 z-50 flex justify-between bg-[#373B53] pr-6 dark:bg-VeryDarkBlue03 lg:h-[100dvh] lg:flex-col lg:rounded-r-[20px] lg:pb-6 lg:pr-0">
      <div className="relative grid h-[72px] w-[72px] place-items-center overflow-hidden rounded-r-[20px] bg-Violet01 md:h-[80px] md:w-[80px]  lg:h-[103px] lg:w-[103px]">
        <div className="absolute bottom-0 left-0 right-0 h-[36px] rounded-tl-[20px] bg-LightViolet02 lg:h-[51.5px]" />
        <Logo className="z-10 block" />
      </div>
      <div className="flex items-center gap-6 lg:flex-col">
        <ThemeSwitchBtn />
        <div className="h-full w-px bg-[#494E6E] lg:h-px lg:w-full" />
        <button
          className="h-8 w-8 overflow-hidden rounded-full lg:h-10 lg:w-10"
          aria-label="profile details"
        >
          <img src={avatar.src} alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
