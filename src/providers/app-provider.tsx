import { FC, PropsWithChildren } from "react";
import { MantineProvider } from "@mantine/core";
import { AppLayout } from "../layouts/app-layout";

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppLayout>{children}</AppLayout>
    </MantineProvider>
  );
};
