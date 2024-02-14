import { Stack } from "expo-router";

import { ApolloProvider } from "@apollo/client";
import { client } from "@/utils";

export default function RootLayout() {
  return (
    <ApolloProvider client={client}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ApolloProvider>
  );
}
