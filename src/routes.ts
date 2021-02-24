const wrap = (component: any, key = "default") => () =>
  component.then((module: any) => module[key]);

export const routes = [
  { path: "/", getComponent: wrap(import("./pages/home.tsx" as any), "Home") },
  { path: "/404", getComponent: wrap(import("./pages/404.tsx" as any), "NotFound") },
];
