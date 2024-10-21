import Index from "@/views/Index.vue";
import { createRouter, createWebHistory } from "vue-router";

const conceptsViews = import.meta.glob("@/views/concepts/*.vue");
const exerciseViews = import.meta.glob("@/views/exercicios/*.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    },
    ...generateRoutes(conceptsViews, "/conceitos"),
    ...generateRoutes(exerciseViews, "/exercicios"),
  ],
});

function generateRoutes(
  files,
  pathPrefix = "",
) {
  return Object.keys(files).map((key) => {
    const name = (key.match(/\/([^\/]+)\.vue$/))[1];
    const path = name === "index" ? `${pathPrefix}/` : `${pathPrefix}/${name}`;
    return {
      path: path,
      name: path,
      component: files[key],
    };
  });
}
export default router;
