export interface ITask {
  id?: string;
  name?: string;
}

export interface ITaskStore {
  tasks: ITask[];
  addTask: (task: ITask) => void;
}
