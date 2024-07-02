import AuthSection from "../AuthSection";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <AuthSection>
      <div className="mb-10 flex flex-col gap-2">
        <p className="text-2xl font-bold text-Black08 dark:text-PureWhite">
          Login
        </p>
        <p className="text-15 text-GraylishBlue06 dark:text-VeryLightBlue05">
          Add your details below to get back into the app
        </p>
      </div>
      <LoginForm />
    </AuthSection>
  );
};

export default Login;
