import { ITaskStore } from "@/interfaces/task";
import { create } from "zustand";

export const useTaskStore = create<ITaskStore>((set) => ({
  tasks: [],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
}));
