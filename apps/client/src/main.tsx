import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { routeTree } from "./routeTree.gen";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

const _5_MINUTES_IN_MILLISECONDS = 5 * 60 * 1000;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: _5_MINUTES_IN_MILLISECONDS,
    },
  },
});

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  context: {
    queryClient,
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;

if (!rootElement) {
  throw new Error("Elemento 'root' não encontrado. Verifique seu index.html.");
}
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Theme appearance="dark" accentColor="iris">
          <RouterProvider router={router} />
        </Theme>
      </QueryClientProvider>
    </StrictMode>,
  );
}
