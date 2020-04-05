import React from "react";
import { StyleSheet } from "react-native";
import { Block, Text, theme} from "galio-framework";
import Icon from 'react-native-vector-icons/FontAwesome5';

import argonTheme from "../constants/Theme";

class DrawerItem extends React.Component {
  renderIcon = () => {
    const { title, focused } = this.props;

    switch (title) {
      case "Home":
        return (
          <Icon
            name="home"
            family="Gibson"
            size={16}
            color={focused ? "white" : 'rgb(102,176,253)'}
          />
        );


      case "Lets Talk":
        return (
          <Icon
            name="comments"
            family="Gibson"
            size={16}
            color={focused ? "white" : 'rgb(102,176,253)'}
          />
        );

      case "Product Page":
        return (
          <Icon
            name="taxi"
            family=""
            size={16}
            color={focused ? "white" : 'rgb(102,176,253)'}
          />
        );
    

      case "Log Out":
        return( 
        <Icon
        name="sign-out-alt"
        family="Gibson"
        size={16}
        color={focused ? "white" : 'rgb(102,176,253)'}
      />
      );
      default:
        return null;
    }
  };

  render() {
    const { focused, title } = this.props;

    const containerStyles = [
      styles.defaultStyle,
      focused ? [styles.activeStyle, styles.shadow] : null
    ];

    return (
      <Block flex row style={containerStyles}>
        <Block middle flex={0.1} style={{ marginRight: 7 }}>
          {this.renderIcon()}
        </Block>
        <Block row center flex={0.9}>
          <Text
            size={15}
            bold={focused ? true : false}
            color={focused ? "white" : "rgb(69,79,99)"}
          >
            {title}
          </Text>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 20,
    paddingHorizontal: 14
  },
  activeStyle: {
    backgroundColor: argonTheme.COLORS.DEFAULT,
    borderRadius: 4
  },
  shadow: {
    shadowColor: 'rgb(69,79,99)',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.1
  },
  containerStyles:{
    justifyContent: 'space-between',
  },

});

export default DrawerItem;
