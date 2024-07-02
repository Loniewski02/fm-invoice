import AuthSection from "../AuthSection";
import ResetForm from "./ResetForm";

const Reset = () => {
  return (
    <AuthSection>
      <div className="mb-4 flex flex-col gap-2">
        <p className="text-2xl font-bold text-Black08 dark:text-PureWhite">
          Reset your password
        </p>
      </div>
      <ResetForm />
    </AuthSection>
  );
};

export default Reset;
