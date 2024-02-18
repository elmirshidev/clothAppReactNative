// @ts-nocheck
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Formik} from 'formik';
import {SafeAreaView} from 'react-native-safe-area-context';
import React from 'react';
import InputComponent from '../components/RegisterPage/InputComponent.tsx';
import {validation} from '../helpers/YupSchema.js';
import {userStore} from '../zustandStore.ts';
function RegisterPage({navigation}: {navigation: any}): React.JSX.Element {
  const {setUsername} = userStore();
  const inputFields = [
    {id: 1, type: 'username', label: 'User Name'},
    {id: 2, type: 'email', label: 'Email'},
    {id: 3, type: 'password', label: 'Password'},
    {id: 4, type: 'confirmPassword', label: 'Confirm Password'},
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.imgContainer}>
          <Image source={require('../assets/logo.png')} />
        </View>

        <View style={styles.signUpContainer}>
          <Text style={[styles.boldText, styles.bigText]}>Sign Up</Text>
          <TouchableOpacity>
            <Text style={[styles.lowOpacityText, styles.smallText]}>
              Create a new account
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.full}>
          <Formik
            initialValues={{
              username: '',
              email: '',
              password: '',
              confirmPassword: '',
              checkbox: false,
            }}
            validateOnMount={true}
            validationSchema={validation}
            onSubmit={({username}) => {
              setUsername(username);
              setTimeout(() => {
                navigation.navigate('MainPage');
              }, 0);
            }}>
            {({
              values,
              handleChange,
              errors,
              setFieldTouched,
              touched,
              isValid,
              handleSubmit,
              setFieldValue,
            }) => (
              <View style={styles.full}>
                <View style={styles.formContainer}>
                  {inputFields.map(field => {
                    return (
                      <View key={field.id}>
                        <Text style={[styles.boldText, styles.midText]}>
                          {field.label}
                        </Text>
                        <InputComponent
                          values={values}
                          errors={errors}
                          type={field.type}
                          handleChange={handleChange}
                          setFieldTouched={setFieldTouched}
                          touched={touched}
                        />
                      </View>
                    );
                  })}
                </View>
                <View style={styles.checkBoxContainer}>
                  <CheckBox
                    disabled={false}
                    value={values.checkbox}
                    style={[
                      styles.checkBox,
                      touched.checkbox && errors.checkbox && styles.errCheckBox,
                    ]}
                    onValueChange={newValue => {
                      setFieldTouched('checkbox');
                      setFieldValue('checkbox', newValue);
                    }}
                  />
                  <Text
                    style={[
                      styles.smallText,
                      styles.lowOpacityText,
                      styles.semiBoldText,
                    ]}>
                    By creating an account you have to agree with our terms &
                    conditions
                  </Text>
                </View>
                <View style={styles.btnWrapper}>
                  <TouchableOpacity
                    disabled={!isValid}
                    style={[styles.btn, !isValid && styles.btnDisabled]}
                    onPress={handleSubmit}>
                    <Text
                      style={[styles.midText, styles.boldText, styles.btnText]}>
                      Login
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default RegisterPage;

const styles = StyleSheet.create({
  full: {
    // flexGrow: 1,
    flex: 1,
    // height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: StatusBar.currentHeight,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  imgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpContainer: {
    flex: 1,
    gap: 10,
    marginBottom: 50,
  },
  boldText: {
    fontWeight: 'bold',
    color: 'black',
  },
  lowOpacityText: {
    opacity: 0.5,
    color: 'black',
  },
  bigText: {
    fontSize: 20,
  },
  midText: {
    fontSize: 17,
  },
  smallText: {
    fontSize: 15,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    padding: 0,
  },
  formContainer: {
    flex: 1,
    gap: 15,
  },
  semiBoldText: {
    fontWeight: '500',
  },
  checkBoxContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
    marginTop: 20,
  },
  checkBox: {
    opacity: 0.9,
    height: 25,
    width: 25,
  },
  errCheckBox: {
    opacity: 0.5,
  },
  btn: {
    backgroundColor: 'black',
    borderRadius: 20,
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
  },
  btnDisabled: {
    backgroundColor: '#EEEEEE',
  },
  btnText: {
    color: 'white',
  },
  errorText: {
    color: '#FF0D10',
    fontSize: 12,
    marginTop: 5,
  },
  btnWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
