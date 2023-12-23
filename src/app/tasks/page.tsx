"use client";

import { Modal } from "@/components/modal";
import { useTaskStore } from "@/store/useTaskStore";
import { useState } from "react";

export default function TasksPage() {
  const { tasks } = useTaskStore();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid place-content-center h-full gap-4">
      <button
        className="bg-blue-600 rounded-md px-4 py-2 text-white"
        onClick={() => setIsOpen(true)}
      >
        New Task
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      {tasks.length > 0 ? (
        <ul className="grid gap-2">
          {tasks.map((task) => (
            <li className="border border-gray-500 rounded-md p-4" key={task.id}>
              {task.name}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 font-bold">No tasks yet</p>
      )}
    </div>
  );
}
