import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import api from "../api/api";
import axios from "axios";
import { getBase64FromUrl } from "../util";
import { toast } from "react-toastify";
const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (data: any, image: any) => {
    const { email, password } = data;
    api
      .post("auth/local", {
        identifier: email,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.jwt);
        api
          .get("users/me?populate=*", {
            headers: {
              Authorization: `Bearer ${response.data.jwt}`,
            },
          })
          .then(async (response) => {
            const myImage = await getBase64FromUrl(
              "http://localhost:1337" + response.data.image.url
            );
            axios
              .post(
                "https://faceapi.mxface.ai/api/v2/face/verify",
                {
                  encoded_image1: myImage,
                  encoded_image2: image,
                },
                {
                  headers: {
                    subscriptionkey: "Je6WHHWlM11UE0wb1Q-weyV85acsi1138",
                  },
                }
              )
              .then((response) => {
                const { matchedFaces }: any = response.data;
                if (matchedFaces[0].confidence >= 80) {
                  let token = localStorage.getItem("token");
                  api
                    .get("users/me?populate=*", {
                      headers: {
                        Authorization: `Bearer ${token}`,
                      },
                    })
                    .then((response) => {
                      setUser(response.data);
                      navigate("/profile");
                    });
                } else {
                  logout();

                  toast.error("Not Same Person");
                }
              })
              .catch((error) => {
                console.log("error", error);
              });
          })
          .catch((error) => {
            console.log("error", error);
          });
      })
      .catch((error) => {
        console.log("error", error);
        toast.error(error.response.data.message);
      });
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    localStorage.clear();
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
