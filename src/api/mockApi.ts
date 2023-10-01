import {projectList as defaultProjectList} from "./db/MockProjects";
import {IProject} from "./interfaces/IProject";

const projectList: IProject[] =
  JSON.parse(localStorage.getItem("projectList") || "0") || defaultProjectList;

function injectInLocalstorage() {
  localStorage.setItem("projectList", JSON.stringify(projectList));
}

const api = {
  async getProject(id: number) {
    return projectList.find((e) => e.id === id);
  },
  async updateProject(project: IProject) {
    const existentProject = projectList.find((e) => e.id === project.id);
    if (existentProject) {
      existentProject.name = project.name;
      existentProject.tasks = project.tasks;
    }
    injectInLocalstorage();

    return existentProject;
  },
  async getAllProjects() {
    return projectList;
  },

  async createProject(data: IProject) {
    data.id = findLargestProjectId(projectList) + 1;
    projectList.push(data);
    injectInLocalstorage();
    return data;
  },

  async deleteProject(id: number) {
    const indexToDelete = projectList.findIndex((e) => e.id === id);
    if (indexToDelete !== -1) {
      projectList.splice(indexToDelete, 1);
      injectInLocalstorage();
      return true;
    } else {
      return false;
    }
  },
};

export default api;

function findLargestProjectId(projects: IProject[]): number {
  if (projects.length === 0) {
    return 0; // Return undefined if the list is empty
  }

  let largestIdProject = projects[0];

  for (const project of projects) {
    if (project.id > largestIdProject.id) {
      largestIdProject = project;
    }
  }

  return largestIdProject.id;
}
