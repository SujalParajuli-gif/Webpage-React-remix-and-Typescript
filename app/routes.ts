// app/routes.ts
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("article", "routes/article.tsx"),             // /article  (list)
  route("article/:paths", "routes/article.$paths.tsx")// /article/:paths (detail)
] satisfies RouteConfig;
