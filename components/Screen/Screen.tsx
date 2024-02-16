import React, { useEffect } from "react";
import { StyleSheet, BackHandler } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import type { ScreenProps } from "./Screen.types";

export const Screen: React.FC<ScreenProps> = ({
  children,
  edges = ["top", "right", "bottom", "left"],
  style,
}) => {
  useEffect(() => {
    const backAction = () => {
      return true; // Prevent navigating back
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => {
      backHandler.remove(); // Remove the event listener when the component unmounts
    };
  }, []);

  return (
    <SafeAreaView edges={edges} style={[styles.constainer, style]}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    padding: 16,
    position: "relative",
  },
});
