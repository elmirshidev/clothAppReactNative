// @ts-nocheck
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {EyeIcon, EyeSlashIcon} from 'react-native-heroicons/solid';
import {FormikErrors, FormikTouched} from 'formik';

const textTypeObject = {
  username: 'username',
  email: 'emailAddress',
  password: 'password',
  confirmPassword: 'password',
};

interface InputComponentProps {
  values: {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
  errors: FormikErrors<{
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  }>;
  type: 'username' | 'email' | 'password' | 'confirmPassword';
  handleChange: (
    type: 'username' | 'email' | 'password' | 'confirmPassword',
  ) => (text: string) => void;
  setFieldTouched: (
    type: 'username' | 'email' | 'password' | 'confirmPassword',
  ) => void;
  touched: FormikTouched<{
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  }>;
}
function InputComponent({
  values,
  handleChange,
  setFieldTouched,
  touched,
  errors,
  type,
}: InputComponentProps): React.JSX.Element {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  return (
    <>
      <View style={styles.inputWrapper}>
        <TextInput
          value={values[type]}
          onChangeText={handleChange(type)}
          onBlur={() => setFieldTouched(type)}
          textContentType={textTypeObject[type]}
          keyboardType={type === 'email' ? 'email-address' : 'default'}
          secureTextEntry={
            type === 'password' || type === 'confirmPassword'
              ? !showPassword
              : undefined
          }
          style={[styles.textInput, styles.smallText, styles.semiBoldText]}
        />
        {(type === 'password' || type === 'confirmPassword') && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.iconWrapper}>
            {showPassword ? (
              <EyeIcon color={'black'} size={18} />
            ) : (
              <EyeSlashIcon color={'black'} size={18} />
            )}
          </TouchableOpacity>
        )}
      </View>
      {touched[type] && errors[type] && (
        <Text style={styles.errorText}>{errors[type]}</Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    position: 'relative',
  },
  iconWrapper: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 40,
    height: 40,
    zIndex: 10,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    padding: 0,
  },
  smallText: {
    fontSize: 15,
  },
  semiBoldText: {
    fontWeight: '500',
  },
  errorText: {
    color: '#FF0D10',
    fontSize: 12,
    marginTop: 5,
  },
});

export default InputComponent;
