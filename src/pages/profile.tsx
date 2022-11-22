import { Box } from "@mantine/core";
import { ProfileComponent } from "../components";

export const ProfilePage = () => {
  return (
    <Box
      sx={{
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ProfileComponent />
    </Box>
  );
};
