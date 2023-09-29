import { ITask } from "./ITask";

export interface IProject {
  id: number;
  tasks: ITask[];
  name: string;
}
