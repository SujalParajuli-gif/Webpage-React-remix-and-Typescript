// app/routes.ts
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("article", "routes/article.tsx"),             // /article  (list)
  route("article/:paths", "routes/article.$paths.tsx"),// /article/:paths (detail)
  route("privacy-policy", "routes/privacy-policy.tsx"),

  route("accessibility_statement", "routes/accessibility_statement.tsx"),
route("ContactUsV2","routes/ContactUsV2.tsx"),

] satisfies RouteConfig;
