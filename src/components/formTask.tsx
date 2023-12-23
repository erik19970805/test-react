import { useTaskStore } from "@/store/useTaskStore";
import { FC, useState } from "react";
import { Toast } from "./toast";

interface IFormTaskProps {
  setIsOpen: (isOpen: boolean) => void;
}

export const FormTask: FC<IFormTaskProps> = (props) => {
  const { addTask } = useTaskStore();
  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { elements } = e.currentTarget;
    const inputName = elements.namedItem("name");
    const isInput = inputName instanceof HTMLInputElement;
    if (!isInput || inputName === null) return;
    if (inputName.value === "") return setOpenModal(true);
    addTask({ name: inputName.value, id: crypto.randomUUID() });
    inputName.value = "";
    props.setIsOpen(false);
  };

  return (
    <>
      {openModal && (
        <Toast message="Name is required" setIsOpen={setOpenModal} />
      )}
      <form
        className="max-w-sm mx-auto"
        onSubmit={handleSubmit}
        aria-label="Add tasks to the list"
      >
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Task name
          </label>
          <input
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="task name"
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add task
        </button>
      </form>
    </>
  );
};
