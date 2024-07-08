import Wrapper from "../layout/Wrapper";
import ThemeSwitchBtn from "../ui/ThemeSwitchBtn";

import Logo from "@/public/assets/logo.svg";

const AuthSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="relative p-6">
      <Wrapper className="relative max-w-[476px] md:rounded-lg md:bg-PureWhite md:p-10 md:shadow-sm md:dark:bg-[rgb(27,30,51)]">
        <ThemeSwitchBtn className="absolute right-4 top-4" />
        <div className="mb-16 flex items-start gap-2 md:mx-auto md:mb-12 md:w-max">
          <div className="relative grid h-8 w-8 place-content-center overflow-hidden rounded-md bg-Violet01">
            <Logo width={20} height={20} className="z-10" />
            <span className="absolute bottom-0 left-0 right-0 h-5 rounded-tl-xl bg-LightViolet02" />
          </div>
          <h1 className="text-3xl font-bold text-Black08 first-letter:uppercase dark:text-PureWhite">
            invoices
          </h1>
        </div>
        {children}
      </Wrapper>
    </section>
  );
};

export default AuthSection;
