import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import HomeIcon from '../assets/homeNav.svg';
import FoodIcon from '../assets/foodNav.svg';
import PrintIcon from '../assets/printNav.svg';
import OrderIcon from '../assets/orderNav.svg';
import HomeIconActive from '../assets/homeNavActive.svg';
import FoodIconActive from '../assets/foodNavActive.svg';
import PrintIconActive from '../assets/printNavActive.svg';
import OrderIconActive from '../assets/orderNavActive.svg';
  
const NavBar = () => {

    const [activeTab, setActiveTab] = useState('Home');
  
    const onTabPress = (tabName) => {
      setActiveTab(tabName);
    }
  
    return (

        <View style={styles.navBar}>

            <TouchableOpacity onPress={() => onTabPress('Home')} style={styles.tab}>

                {activeTab === 'Home' ? <HomeIconActive /> : <HomeIcon />}

                <Text style={activeTab === 'Home' ? styles.activeText : styles.text}>Home</Text>

            </TouchableOpacity>
    
            <TouchableOpacity onPress={() => onTabPress('Food')} style={styles.tab}>

                {activeTab === 'Food' ? <FoodIconActive /> : <FoodIcon />}

                <Text style={activeTab === 'Food' ? styles.activeText : styles.text}>Food</Text>

            </TouchableOpacity>
    
            <TouchableOpacity onPress={() => onTabPress('Print')} style={styles.tab}>

                {activeTab === 'Print' ? <PrintIconActive /> : <PrintIcon />}

                <Text style={activeTab === 'Print' ? styles.activeText : styles.text}>Print</Text>

            </TouchableOpacity>
    
            <TouchableOpacity onPress={() => onTabPress('Order')} style={styles.tab}>
                
                {activeTab === 'Order' ? (<OrderIconActive />) : (<OrderIcon />)}

                <Text style={activeTab === 'Order'? styles.activeText : styles.text}>Order</Text>

            </TouchableOpacity>

        </View>
    );
};
  
const styles = StyleSheet.create({
    navBar: {
      flexDirection: 'row',
      position: 'absolute',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      borderTopWidth: 1,
      borderTopColor: '#eee',
      width: '100%',
      height: 64,
      bottom: 0,
    },
    tab: {
      flex: 1,
      alignItems: 'center',
    },
    text: {
        fontSize: 12,
        fontWeight: 500,
        marginTop: 4,
        color: '#999999',
    },
    activeText: {
        fontSize: 12,
        fontWeight: 500,
        marginTop: 4,
        color: '#5932E6',
    },
});
  
export default NavBar;