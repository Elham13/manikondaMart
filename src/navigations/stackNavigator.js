import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Home from '../screens/Home';
import Wishlist from '../screens/Wishlist';
import OrderHistory from '../screens/OrderHistory';
import MyAccount from '../screens/MyAccount';
import Settings from '../screens/Settings';
import PrivacyPolicy from '../screens/others/PrivacyPolicy';
import TermsOfService from '../screens/others/TermsOfService';
import ReturnPolicy from '../screens/others/ReturnPolicy';
import Header from '../components/Header';
import CategoryWiseProducts from '../screens/partials/CategoryWiseProducts';
import SingleProduct from '../screens/partials/SingleProduct';
import SearchPage from '../screens/partials/SearchPage';
import NotificationPage from '../screens/partials/NotificationPage';
import Cart from '../screens/partials/Cart';
import Profile from '../screens/partials/Profile';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={({navigation}) => ({
          headerTitle: () => (
            <Header
              navigation={navigation}
              title="Home"
              showNav={true}
              showIcons={true}
            />
          ),
        })}
      />
      <Stack.Screen
        name="CategoryWiseProducts"
        component={CategoryWiseProducts}
        options={({navigation}) => ({
          headerTitle: () => (
            <Header
              navigation={navigation}
              title="Something"
              showNav={false}
              showIcons={true}
            />
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome5 name="angle-left" size={20} style={styles.icon} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="SingleProduct"
        component={SingleProduct}
        options={({navigation}) => ({
          headerTitle: () => (
            <Header
              navigation={navigation}
              title="Something1"
              showNav={false}
              showIcons={true}
            />
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome5 name="angle-left" size={20} style={styles.icon} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="NotificationPage"
        component={NotificationPage}
        options={({navigation}) => ({
          headerTitle: () => (
            <Header
              navigation={navigation}
              title="Notifications"
              showNav={false}
              showIcons={true}
            />
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome5 name="angle-left" size={20} style={styles.icon} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={({navigation}) => ({
          headerTitle: () => (
            <Header
              navigation={navigation}
              title="Cart"
              showNav={false}
              showIcons={true}
            />
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome5 name="angle-left" size={20} style={styles.icon} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={({navigation}) => ({
          headerTitle: () => (
            <Header
              navigation={navigation}
              title="Profile"
              showNav={false}
              showIcons={true}
            />
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome5 name="angle-left" size={20} style={styles.icon} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="SearchPage"
        component={SearchPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const PrivacyPolicyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={({navigation}) => ({
          headerTitle: () => (
            <Header
              navigation={navigation}
              showNav={true}
              title="Privacy Policy"
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};
const TermsOfServiceStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Grocery1"
        component={TermsOfService}
        options={({navigation}) => ({
          headerTitle: () => (
            <Header
              navigation={navigation}
              showNav={true}
              title="Terms of Service"
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};
const ReturnPolicyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Grocery2"
        component={ReturnPolicy}
        options={({navigation}) => ({
          headerTitle: () => (
            <Header
              navigation={navigation}
              showNav={true}
              title="Return Policy"
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};
const WishlistStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Wishlist"
        component={Wishlist}
        options={({navigation}) => ({
          headerTitle: () => (
            <Header navigation={navigation} showNav={true} title="Wishlist" />
          ),
        })}
      />
    </Stack.Navigator>
  );
};
const OrderHistoryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OrderHistory"
        component={OrderHistory}
        options={({navigation}) => ({
          headerTitle: () => (
            <Header
              navigation={navigation}
              showNav={true}
              title="Order History"
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};
const MyAccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyAccount"
        component={MyAccount}
        options={({navigation}) => ({
          headerTitle: () => (
            <Header
              navigation={navigation}
              showNav={false}
              title="My Account"
              showIcons={false}
            />
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome5 name="angle-left" size={20} style={styles.icon} />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};
const SettingsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={({navigation}) => ({
          headerTitle: () => (
            <Header navigation={navigation} showNav={true} title="Settings" />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export {
  HomeStack,
  PrivacyPolicyStack,
  TermsOfServiceStack,
  ReturnPolicyStack,
  WishlistStack,
  OrderHistoryStack,
  MyAccountStack,
  SettingsStack,
};

const styles = StyleSheet.create({
  icon: {
    // backgroundColor: 'orange',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
