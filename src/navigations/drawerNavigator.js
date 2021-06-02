import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
    HomeStack,
    PrivacyPolicyStack,
    TermsOfServiceStack,
    ReturnPolicyStack,
    WishlistStack,
    OrderHistoryStack,
    MyAccountStack,
    SettingsStack
} from './stackNavigator';
import DrawerContent from '../components/DrawerContent';
 
const Drawer = createDrawerNavigator();
 
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent { ...props } />} initialRouteName="Home" >
            <Drawer.Screen name='Home' component={HomeStack} />
            <Drawer.Screen name='PrivacyPolicy' component={PrivacyPolicyStack} />
            <Drawer.Screen name='ReturnPolicy' component={ReturnPolicyStack} />
            <Drawer.Screen name='TermsOfService' component={TermsOfServiceStack} />
            <Drawer.Screen name='WishList' component={WishlistStack} />
            <Drawer.Screen name='OrderHistory' component={OrderHistoryStack} />
            <Drawer.Screen name='MyAccount' component={MyAccountStack} />
            <Drawer.Screen name='Settings' component={SettingsStack} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;
