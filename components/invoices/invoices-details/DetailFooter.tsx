import Button from "@/components/ui/Button";

const BUTTONS = ["edit", "delete", "mark as paid"];

const DetailFooter = () => {
  return (
    <footer className="mt-7 flex w-full flex-wrap justify-center gap-2 bg-PureWhite p-6 dark:bg-VeryDarkBlue03 md:hidden">
      {BUTTONS.map((button, i) => (
        <Button
          key={i}
          className={`${button === "edit" && "bg-White11 text-Blue07 dark:bg-DarkBlue04 dark:text-PureWhite"} ${button === "delete" && "bg-Red09 text-PureWhite"} ${button === "mark as paid" && "bg-Violet01 text-PureWhite"}`}
        >
          {button}
        </Button>
      ))}
    </footer>
  );
};

export default DetailFooter;
