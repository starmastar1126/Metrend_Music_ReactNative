import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import TabBar from "fluidbottomnavigation-rn";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View />
        <TabBar
          onPress={tabIndex => {
            // eslint-disable-next-line no-console
            console.log("render component with index: ", tabIndex);
          }}
          values={[
            { title: "News", icon: require("../assets/bottomTabIcon/news.png") },
            { title: "Requests", icon: require("../assets/bottomTabIcon/requests.png") },
            { title: "Events", icon: require("../assets/bottomTabIcon/events.png") },
            { title: "Members", icon: require("../assets/bottomTabIcon/members.png") },
            { title: "Account", icon: require("../assets/bottomTabIcon/account.png") }
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#4C53DD"
  }
});