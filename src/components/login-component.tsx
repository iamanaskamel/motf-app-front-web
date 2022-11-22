import { Button, TextInput, Card, PasswordInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { loginSchema, loginValues } from "../validation";
import { useAuth } from "../hooks";
import { WebcamCapture } from "./camera-component";
import { useState } from "react";

export const LoginComponent = () => {
  const { login } = useAuth();
  const [image, setImage] = useState("");
  const form = useForm({
    initialValues: loginValues,
    validate: loginSchema,
  });

  const handleSubmit = (data: any) => {
    login(data, image.replace("data:image/jpeg;base64,", ""));
  };
  return (
    <Card
      shadow="xl"
      p="md"
      w="40%"
      radius="md"
      sx={{
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          withAsterisk
          label="Email"
          pb="sm"
          required
          name="email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          placeholder="Password"
          label="Password"
          description="Password must include at least one capital letter, It should start with special character @ or #,Length of password should be between range 8 to 14"
          withAsterisk
          name="password"
          pb="sm"
          required
          {...form.getInputProps("password")}
        />
        <WebcamCapture setImage={setImage} image={image} />
        <Button
          type="submit"
          variant="outline"
          disabled={image == "" ? true : false}
          sx={{ display: "flex", alignSelf: "center" }}
        >
          Login
        </Button>
      </form>
    </Card>
  );
};
