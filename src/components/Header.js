import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Badge} from 'react-native-paper';

const Header = ({navigation, title, showNav, showIcons}) => {
  const openMenu = () => {
    navigation.openDrawer();
  };
  const searchPress = () => {
    navigation.navigate('SearchPage');
  };
  const notificationPress = () => {
    navigation.navigate('NotificationPage');
  };
  const cartPress = () => {
    navigation.navigate('Cart');
  };

  return (
    <View style={styles.header}>
      <View style={styles.left}>
        {showNav ? (
          <Icon
            name="menu"
            size={18}
            color="#000"
            style={styles.icon}
            onPress={openMenu}
          />
        ) : null}
        <Text style={styles.headerTxt}>{title}</Text>
      </View>
      {showIcons ? (
        <View style={styles.right}>
          <TouchableOpacity style={styles.btn} onPress={searchPress}>
            <Icon name="search" size={18} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={notificationPress}>
            <Badge size={15} visible={true} style={styles.badge}>
              3
            </Badge>
            <Icon name="notifications" size={18} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={cartPress}>
            <Badge size={15} visible={false} style={styles.badge}>
              3
            </Badge>
            <Icon name="shopping-cart" size={18} color="#000" />
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
  },
  right: {
    flexDirection: 'row',
  },
  headerTxt: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#333',
    letterSpacing: 1,
    marginLeft: 10,
  },
  btn: {
    marginHorizontal: 2,
    padding: 5,
  },
  badge: {
    position: 'absolute',
    zIndex: 2,
  },

  // icon: {
  //     position: 'absolute',
  //     left: 2,
  // }
});
