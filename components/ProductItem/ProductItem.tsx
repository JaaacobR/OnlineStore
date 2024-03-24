import { Product } from "@/__generated__/graphql";
import { FC } from "react";
import { Pressable, StyleSheet, Image } from "react-native";

export const ProductItem: FC<{ product: Product }> = ({ product }) => {
  console.log(product.images[0]);
  return (
    <Pressable key={product.id} style={styles.container}>
      <Image
        source={{ uri: product.images[0] }}
        style={{ width: 200, height: 150 }}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
});
