import { FC } from "react";
import { FormTask } from "./formTask";

interface IModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const Modal: FC<IModalProps> = (props) => {
  return (
    <div
      role="dialog"
      className={`${
        props.isOpen
          ? "absolute w-full h-full grid place-content-center"
          : "hidden"
      }`}
    >
      <div className="relative p-4 rounded-md bg-slate-900 ">
        <button
          className="absolute right-2 top-1 text-gray-500"
          onClick={() => props.setIsOpen(false)}
        >
          X
        </button>
        <FormTask setIsOpen={props.setIsOpen} />
      </div>
    </div>
  );
};
