import { BottomGradient } from "./ui/bottomGradient";
import { FC } from "react";

export const ButtonAuth: FC<{ formType: string }> = ({ formType }) => {
  return (
    <button
      className="bg-linear-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
      type="submit"
    >
      {formType} &rarr;
      <BottomGradient />
    </button>
  );
};
