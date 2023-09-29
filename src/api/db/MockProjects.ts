import {IProject} from "../interfaces/IProject";

export const projectList: IProject[] = [
  {
    id: 1,
    name: "Website Redesign",
    tasks: [
      {
        id: 1,
        taskName: "Create wireframes",
        dueDate: new Date("2023-10-15"),
        priority: "High",
      },
      {
        id: 2,
        taskName: "Design mockups",
        dueDate: new Date("2023-10-20"),
        priority: "Medium",
      },
      {
        id: 3,
        taskName: "Develop frontend",
        dueDate: new Date("2023-11-01"),
        priority: "High",
      },
    ],
  },
  {
    id: 2,
    name: "Marketing Campaign",
    tasks: [
      {
        id: 4,
        taskName: "Plan campaign strategy",
        dueDate: new Date("2023-09-30"),
        priority: "High",
      },
      {
        id: 5,
        taskName: "Create ad creatives",
        dueDate: new Date("2023-10-05"),
        priority: "Medium",
      },
      {
        id: 6,
        taskName: "Launch campaign",
        dueDate: new Date("2023-10-15"),
        priority: "High",
      },
    ],
  },
  {
    id: 3,
    name: "Product Launch",
    tasks: [
      {
        id: 7,
        taskName: "Market research",
        dueDate: new Date("2023-09-25"),
        priority: "Medium",
      },
      {
        id: 8,
        taskName: "Build product prototype",
        dueDate: new Date("2023-10-10"),
        priority: "High",
      },
      {
        id: 9,
        taskName: "Launch product",
        dueDate: new Date("2023-10-25"),
        priority: "High",
      },
    ],
  },
  // Add more projects here...
];
