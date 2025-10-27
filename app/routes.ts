// app/routes.ts
import { type RouteConfig, index, route } from "@react-router/dev/routes";

// Remix automatically knows root.tsx is the layout.
// So we only define our internal routes here.
export default [
  // This is our homepage route (Home.tsx)
  index("routes/home.tsx"),

  // This is our article page route
  route("article", "routes/article.tsx"),
] satisfies RouteConfig;
