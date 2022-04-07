import { Routes, Route, Navigate } from "react-router-dom";
import { Catalog, Home } from "../pages";

export enum RouteNames {
  HOME = '/',
  CATALOG = '/catalog',
}

export const Routers = () => {
  const { HOME, CATALOG } = RouteNames;

  return (
    <Routes>
      <Route path={HOME} element={<Home />} />
      <Route path={CATALOG} element={<Catalog />} />
      <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
    </Routes>
  );
}