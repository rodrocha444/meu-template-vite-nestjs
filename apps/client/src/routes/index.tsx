import { useHelloQuery } from "@/graphql/generated";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: helloData } = useHelloQuery();

  return <div className="">{helloData?.hello}</div>;
}
