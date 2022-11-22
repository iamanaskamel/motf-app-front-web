import { Button, Card, Image, Text } from "@mantine/core";
import { useCallback } from "react";
import { BASE_URL } from "../constants";
import { useAuth } from "../hooks";

export const ProfileComponent = () => {
  const { logout, user } = useAuth();
  const { email, username, image } = user;
  const _handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  return (
    <Card w="40%" shadow="lg" p="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={`${BASE_URL}${image.url}`} height={160} alt="Norway" />
      </Card.Section>
      <Text size="md" sx={{ textAlign: "center" }} color="dimmed">
        {username}
      </Text>
      <Text size="md" sx={{ textAlign: "center" }} color="dimmed">
        {email}
      </Text>

      <Button
        onClick={_handleLogout}
        variant="light"
        color="blue"
        fullWidth
        mt="md"
        radius="md"
      >
        Logout
      </Button>
    </Card>
  );
};
