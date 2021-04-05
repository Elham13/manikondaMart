import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store/store'
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/navigations/drawerNavigator';

const App = () => {
  return (
    <Provider store={store}>
     <NavigationContainer>
           <DrawerNavigator />
      </NavigationContainer>
    </Provider>
  )
}

export default App