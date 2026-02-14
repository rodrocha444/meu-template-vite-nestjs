import { View } from "react-native";
import { useHelloQuery } from "../graphql/generated";
import { Button } from "../lib/rn-reusables/ui/button";
import { Text } from "../lib/rn-reusables/ui/text";

export default function Page() {
  const { data } = useHelloQuery();

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-center items-center font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>

      <Text>{data?.hello}</Text>

      <Button>
        <Text>Clique aq</Text>
      </Button>
    </View>
  );
}
