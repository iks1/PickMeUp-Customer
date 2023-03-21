import Profile from './../assets/profile.svg'
import {View, Text, StyleSheet} from 'react-native'

const header = (props)=>{
    return (
        <View style={styles.head}>
                    <Text style={styles.headTex}>
                        {props.text}
                    </Text>
                    <Profile/>
        </View>
    )
}

export default header

const styles = StyleSheet.create({
    head:{
        marginTop:48,
        marginLeft:24,
        marginRight:24,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    headTex:{
        fontSize:20,
        fontWeight:500,
        color:'white',
    },
    
})

