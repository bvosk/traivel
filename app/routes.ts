import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/trips.tsx"),
  route("trips/:id", "routes/trips.$id.tsx"),
] satisfies RouteConfig;
