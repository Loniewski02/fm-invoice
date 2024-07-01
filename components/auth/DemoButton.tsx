"use client";

const DemoButton = () => {
  const demoHandler = () => {
    sessionStorage.setItem("auth", "demo");
  };

  return (
    <button
      onClick={demoHandler}
      className="rounded-md bg-Violet01 px-6 py-3 text-15 font-bold text-PureWhite transition hover:bg-LightViolet02 active:scale-95 "
    >
      Demo
    </button>
  );
};

export default DemoButton;
