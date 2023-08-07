import { useState } from 'react';
import {View, ScrollView, Text, TextInput, Alert, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = ({users, setIsLoggedIn}) => {
    

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginBtn =()=> {
        const findUser = users.find(user => user.email === email && user.password === password)
        if (!findUser){
            console.log("Invalid Credentials")
            Alert.alert("Invalid Credentials");
            navigation.navigate("Login")
        }else{
            console.log("Welcome to Home")
            setIsLoggedIn(true)
            Alert.alert(`Hi! ${findUser.name}, Welcome to Dekar!`)
            navigation.navigate("Home")
        }
    }

    return(
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.box}>
            <Text style={styles.title}>Login Your Account</Text>
        <TextInput style={styles.text} placeholder='Enter your email' value={email} onChangeText={setEmail} />
        <TextInput style={styles.text} placeholder='Enter your password' value={password} onChangeText={setPassword}/>
        <TouchableOpacity onPress={handleLoginBtn}  style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
    </View>
        </ScrollView>  
    );
}
export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        backgroundColor: '#0A0A13',
        width: 250,
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    title: {
        color: 'white',
        marginBottom: 20
    },
    loginButton: {
        marginTop: 10,
        backgroundColor: 'royalblue',
        borderRadius: 5,
        paddingLeft: 80,
        paddingRight: 80,
        paddingTop: 10,
        paddingBottom: 10
    },
    loginButtonText: {
        color: 'white',
        textAlign: 'center'
    },
    text: {
        backgroundColor: 'white',
        width: 200,
        height: 40,
        margin: 10,
        borderRadius: 5,
    }
})