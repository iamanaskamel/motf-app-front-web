export const registerForm = {
  email: (value: any) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
  password: (value: any) =>
    /[A-Z]/.test(value) &&
    /[0-9]/.test(value) &&
    /^[@#][A-Za-z0-9]{7,13}$/.test(value)
      ? null
      : "Weak password",
  image: (value: any) => (value ? null : "Image Required"),
};
export const registerValues = {
  email: "",
  username: "",
  password: "",
  image: null,
};
