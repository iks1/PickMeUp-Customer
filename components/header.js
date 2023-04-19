import Profile from './../assets/profile.svg'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { useNavigation } from "@react-navigation/native";

const header = (props)=>{
  const navigation = useNavigation();
    return (
        <View style={styles.head}>
                    <Text style={styles.headTex}>
                        {props.text}
                    </Text>
                    <TouchableOpacity onPress={()=>{navigation.navigate("Profile");}}>
                        <Profile/>
                    </TouchableOpacity>
        </View>
    )
}

export default header

const styles = StyleSheet.create({
    head:{
        marginTop:48,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'90%'
    },
    headTex:{
        fontSize:20,
        fontWeight:500,
        color:'white',
    },
    
})

