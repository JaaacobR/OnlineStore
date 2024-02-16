import { Image } from "react-native";
import { Screen } from "@/components";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS_QUERY } from "@/graphql/getProducts";
import { Product, Query } from "@/__generated__/graphql";
import { useEffect, useState } from "react";
import { FlashList } from "@shopify/flash-list";

const index = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { data } = useQuery<Query>(GET_PRODUCTS_QUERY);

  useEffect(() => {
    if (data?.products) setProducts([...data.products]);
  }, [data]);

  const renderProducts = (item: Product) => {
    const { images } = item;
    return (
      <Image
        key={item.id}
        style={{ width: 200, height: 200 }}
        source={{ uri: images[0] }}
      />
    );
  };

  return (
    <Screen>
      <FlashList
        data={products}
        numColumns={2}
        renderItem={({ item }) => renderProducts(item)}
      />
    </Screen>
  );
};

export default index;
