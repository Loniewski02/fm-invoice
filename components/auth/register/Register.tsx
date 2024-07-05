import AuthSection from "../AuthSection";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <AuthSection>
      <div className="mb-10 flex flex-col gap-2">
        <p className="text-2xl font-bold text-Black08 dark:text-PureWhite">
          Create account
        </p>
        <p className="text-15 text-GraylishBlue06 dark:text-VeryLightBlue05">
          Add your details below to get started!
        </p>
      </div>
      <RegisterForm />
    </AuthSection>
  );
};

export default Register;
