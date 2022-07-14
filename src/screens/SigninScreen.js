import React, {useContext} from 'react';
import {View, StyleSheet, Text} from "react-native";
import AuthForm from '../components/AuthForm';
import NavLink from "../components/NavLink";
import {Context as AuthContext} from "../context/AuthContext";

const SigninScreen = () => {
    const {state, signin} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <AuthForm
                headerText='Sign In to Your Accoun'
                errorMessage={state.errorMessage}
                submitButtonText='Sign In'
                onSubmit={signin}
            />
            <NavLink
                text='Dont have an account? Sign up instead.'
                routeName='Signup'
            />
        </View>
    )
};

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 220,
    }
});

export default SigninScreen;