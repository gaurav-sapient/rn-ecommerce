import React from 'react';
import AccountScreen from '../screens/Account';
import CartScreen from '../screens/Cart';
import HomeScreen from '../screens/Home';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import CustomVectorIcon from '../components/common/CustomVectorIcon';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        activeColor="#222222"
        inactiveColor="#828282"
        barStyle={{backgroundColor: '#F4F6F8'}}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <CustomVectorIcon name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({color}) => (
              <CustomVectorIcon name="account" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarLabel: 'Cart',
            tabBarIcon: ({color}) => (
              <CustomVectorIcon name="cart-variant" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Menu"
          component={AccountScreen}
          options={{
            tabBarLabel: 'Menu',
            tabBarIcon: ({color}) => (
              <CustomVectorIcon name="menu" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
