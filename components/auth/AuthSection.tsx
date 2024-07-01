import Wrapper from "../layout/Wrapper";
import ThemeSwitchBtn from "../ui/ThemeSwitchBtn";

const AuthSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex min-h-[100dvh] flex-col items-center p-6 md:justify-center">
      <Wrapper className="relative max-w-[476px] md:rounded-lg md:bg-PureWhite md:p-10 md:shadow-sm md:dark:bg-VeryDarkBlue03">
        <ThemeSwitchBtn className="absolute right-4 top-4" />
        {children}
      </Wrapper>
    </section>
  );
};

export default AuthSection;
