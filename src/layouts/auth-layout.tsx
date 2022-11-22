import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks";

export const AuthLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (user) {
    return <Navigate to="/profile" />;
  }

  return (
    <main style={{ display: "flex", justifyContent: "center" }}>{outlet}</main>
  );
};
