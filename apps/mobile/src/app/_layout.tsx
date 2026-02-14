import { Slot } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PortalHost } from "@rn-primitives/portal";
import "@/global.css";
import { ThemeProvider } from "@react-navigation/native";
import { NAV_THEME } from "../lib/theme";
import { useColorScheme } from "react-native";

const client = new QueryClient();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <QueryClientProvider client={client}>
      <ThemeProvider value={NAV_THEME[colorScheme!]}>
        <Slot />
        <PortalHost />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
