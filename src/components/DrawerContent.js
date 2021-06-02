import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const DrawerContent = (props) => {

  const logout = () => {
    alert('You pressed me')
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#ccc' }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.imgWrapper}>
            <Image style={styles.img} source={require('../assets/logo.png')} />
          </View>
            <View style={styles.userInfo}>
              <Text style={styles.username}>Elhamuddin</Text>
              <Text style={styles.email}>wolverine.elham@gmail.com</Text>
            </View>
        </View>

          <View style={styles.drawerSection}>
            <TouchableOpacity style={styles.drawerNav} onPress={() => props.navigation.navigate('Home')}>
              <View style={styles.navTxtWrapper}>
                <MaterialIcons name="circle" size={10} color="#333" />
                <Text style={styles.navTxt}>Home</Text>
              </View>
              <MaterialIcons name="double-arrow" size={10} color="#333" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.drawerNav} onPress={() => props.navigation.navigate('CategoryWiseProducts', {
              headerTitle: 'Fruits & Vegetables'
            } )}>
              <View style={styles.navTxtWrapper}>
                <MaterialIcons name="circle" size={10} color="#333" />
                <Text style={styles.navTxt}>Fruits & Vegetables</Text>
              </View>
              <MaterialIcons name="double-arrow" size={10} color="#333" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.drawerNav} onPress={() => props.navigation.navigate('CategoryWiseProducts', {
              headerTitle: 'Dairy & Bakery'
            })}>
              <View style={styles.navTxtWrapper}>
                <MaterialIcons name="circle" size={10} color="#333" />
                <Text style={styles.navTxt}>Dairy & Bakery</Text>
              </View>
              <MaterialIcons name="double-arrow" size={10} color="#333" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.drawerNav} onPress={() => props.navigation.navigate('CategoryWiseProducts', {
              headerTitle: 'Grocery'
            })}>
              <View style={styles.navTxtWrapper}>
                <MaterialIcons name="circle" size={10} color="#333" />
                <Text style={styles.navTxt}>Grocery</Text>
              </View>
              <MaterialIcons name="double-arrow" size={10} color="#333" />
            </TouchableOpacity>
          </View>

          <View style={styles.drawerSection}>
            <TouchableOpacity style={styles.drawerNav} onPress={() => props.navigation.navigate('PrivacyPolicy')}>
              <View style={styles.navTxtWrapper}>
                <Ionicons name="ios-document-text-sharp" size={10} color="#333" />
                <Text style={styles.navTxt}>Privacy policy</Text>
              </View>
              <MaterialIcons name="double-arrow" size={10} color="#333" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.drawerNav} onPress={() => props.navigation.navigate('ReturnPolicy')}>
              <View style={styles.navTxtWrapper}>
                <Ionicons name="ios-document-text-sharp" size={10} color="#333" />
                <Text style={styles.navTxt}>Return policy</Text>
              </View>
              <MaterialIcons name="double-arrow" size={10} color="#333" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.drawerNav} onPress={() => props.navigation.navigate('TermsOfService')}>
              <View style={styles.navTxtWrapper}>
                <Ionicons name="ios-document-text-sharp" size={10} color="#333" />
                <Text style={styles.navTxt}>Terms of service</Text>
              </View>
              <MaterialIcons name="double-arrow" size={10} color="#333" />
            </TouchableOpacity>
          </View>

          <View style={styles.drawerSection}>
            <TouchableOpacity style={styles.drawerNav} onPress={() => props.navigation.navigate('WishList')}>
              <View style={styles.navTxtWrapper}>
                <Ionicons name="heart" size={10} color="#333" />
                <Text style={styles.navTxt}>WishList</Text>
              </View>
              <MaterialIcons name="double-arrow" size={10} color="#333" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.drawerNav} onPress={() => props.navigation.navigate('OrderHistory')}>
              <View style={styles.navTxtWrapper}>
                <Ionicons name="cart" size={10} color="#333" />
                <Text style={styles.navTxt}>Order history</Text>
              </View>
              <MaterialIcons name="double-arrow" size={10} color="#333" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.drawerNav} onPress={() => props.navigation.navigate('MyAccount')}>
              <View style={styles.navTxtWrapper}>
                <FontAwesome name="user" size={10} color="#333" />
                <Text style={styles.navTxt}>My account</Text>
              </View>
              <MaterialIcons name="double-arrow" size={10} color="#333" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.drawerNav} onPress={() => props.navigation.navigate('Settings')}>
              <View style={styles.navTxtWrapper}>
                <FontAwesome name="cog" size={10} color="#333" />
                <Text style={styles.navTxt}>Settings</Text>
              </View>
              <MaterialIcons name="double-arrow" size={10} color="#333" />
            </TouchableOpacity>
          </View>

          <View style={styles.drawerSection}>
            <TouchableOpacity style={styles.drawerNav} onPress={logout}>
                <View style={styles.navTxtWrapper}>
                  <MaterialIcons name="logout" size={10} color="#333" />
                  <Text style={styles.navTxt}>Logout</Text>
                </View>
                <MaterialIcons name="double-arrow" size={10} color="#333" />
              </TouchableOpacity>
          </View>
      </DrawerContentScrollView>
    </View>
  )
}

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  imgWrapper: {
    padding: 1,
    borderWidth: 0.5,
    borderRadius: 100/2,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 100/2,
  },
  userInfo: {
    justifyContent: 'center',
    marginLeft: 5,
  },
  username: {
    fontWeight: '700',
  },
  email: {
    fontSize: 10,
    color: '#444'
  },
  drawerSection: {
    marginTop: 5,
    backgroundColor: '#fff'
  },
  drawerNav: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  navTxtWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  navTxt: {
    fontSize: 11,
    marginLeft: 5,
  }
});
