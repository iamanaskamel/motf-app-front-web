import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks";
export const HomeLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div
      style={{
        height: "100vh",
        overflowY: "scroll",
        backgroundColor: "#fff",
        position: "relative",
      }}
    >
      <main>{outlet}</main>
    </div>
  );
};
