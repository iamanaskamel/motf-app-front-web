import React, { useState } from "react";
import {
  Button,
  FileInput,
  TextInput,
  Card,
  Loader,
  PasswordInput,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconUpload } from "@tabler/icons";
import { registerForm, registerValues } from "../validation";
import { Link, useNavigate } from "react-router-dom";
import { _handleRegister } from "../api";

export const RegisterComponent = () => {
  const navigate = useNavigate();
  const [state, updateState] = useState({
    loading: false,
  });
  const form = useForm({
    initialValues: registerValues,
    validate: registerForm,
  });

  const handleSubmit = (data: any) => {
    _handleRegister(data, updateState, state, form, navigate);
  };

  return (
    <Card shadow="xl" p="md" w="40%" radius="md">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          withAsterisk
          label="UserName"
          pb="sm"
          required
          name="username"
          placeholder="your username..."
          {...form.getInputProps("username")}
        />
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
        <FileInput
          label="Your Image"
          withAsterisk
          pb="sm"
          required
          placeholder="Your Image"
          name="image"
          {...form.getInputProps("image")}
          icon={<IconUpload size={14} />}
        />
        <Button type="submit" variant="outline">
          {state.loading ? <Loader /> : "Register"}
        </Button>
        <Text pt={10}>
          Already Have An Account ? <Link to={"/login"}>Login </Link>
        </Text>
      </form>
    </Card>
  );
};
