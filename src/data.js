export const users = [{ id: "u1", uname: "test@123", pass:"pass@123" }];

export const boards = [
  {
    id: "b1",
    name: "important tasks",
    user: "u1",
  },
  {
    id: "b2",
    name: "Youtube",
    user: "u1",
  },
  {
    id: "b3",
    name: "Projects",
    user: "u1",
  },
];

export const columns = [
  {
    id: "c1",
    boardId: "b2",
    title: "todo",
  },
  {
    id: "c2",
    boardId: "b2",
    title: "ongoing",
  },
  {
    id: "c3",
    boardId: "b2",
    title: "completed",
  },
  {
    id: "c4",
    boardId: "b1",
    title: "New Column"
  }
];

export const tasks = [
  {
    id: "t1",
    colId: "c1",
    title: "Create Video",
    desc: "random data",
    priority: "High",
    order: 1,
  },
  {
    id: "t2",
    colId: "c1",
    title: "Editing video",
    desc: "random data",
    priority: "High",
    order: 2,
  },
  {
    id: "t3",
    colId: "c2",
    title: "Content writing",
    desc: "random data",
    priority: "Low",
    order: 1,
  },
  {
    id: "t4",
    colId: "c3",
    title: "Research",
    desc: "random data",
    priority: "Med",
    order: 1,
  },
];

export const subt = [
  {
    id: "s1",
    title: "Research on GPT",
    taskId: "t4",
  },
  {
    id: "s2",
    title: "Research on Socails",
    taskId: "t4",
  },
];
