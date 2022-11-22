export const loginSchema = {
  email: (value: any) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
  password: (value: any) => (value ? null : "Password Required"),
};
export const loginValues = {
  email: "",
  password: "",
};
