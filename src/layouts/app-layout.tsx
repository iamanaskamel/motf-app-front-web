import { FC, PropsWithChildren } from "react";
import { AppShell, Group, Header, Title } from "@mantine/core";

const headerHeight = 60;

const Flex: FC<PropsWithChildren<{ center?: boolean }>> = ({
  children,
  center,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: center ? "center" : "flex-start",
      }}
    >
      {children}
    </div>
  );
};

export const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AppShell
      sx={{ backgroundColor: "#FBFBFB" }}
      styles={{
        body: { padding: "24px", paddingTop: headerHeight + 24 },
        main: { padding: 0 },
      }}
      header={
        <Header height={headerHeight} px="lg">
          <Group position="apart" sx={{ height: "100%" }}>
            <Flex>
              <Title order={3}>Motf_Users</Title>
            </Flex>
          </Group>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
};
