import api from "./api";
import { toast } from "react-toastify";

export const _handleRegister = (
  data: any,
  updateState: any,
  state: any,
  form: any,
  navigate: any
) => {
  const { username, email, password, image } = data;
  const formData = new FormData();
  formData.append("files", image);
  updateState({ ...state, loading: true });
  api
    .post("http://localhost:1337/api/upload", formData, {
      headers: {
        Authorization: "Bearer ",
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      const imageId = response.data[0].id;
      let data = {
        image: imageId,
        username,
        email,
        timestamp: Date.now(),
        password,
      };
      api
        .post("auth/local/register", data)
        .then((response) => {
          form.reset();
          navigate.replace("/login");
          updateState({ ...state, loading: false });
        })
        .catch((error) => {
          toast.error(error.response.data.error.message);
        });
    })
    .catch((error) => {
      //handle error
      toast.error(error);
    });
  updateState({ ...state, loading: false });
};
