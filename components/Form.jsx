import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    //Name
    if (!name) {
        errors.name = 'Name is required';
      }
    //Phone
    if (!phone) {
        errors.phone = 'phone is required';
      }
    // Message
    if (!message) {
        errors.message = 'Message is required';
      }
    // Email validation
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Please enter a valid email';
    }

    // Password validation
    if (!password) {
      errors.password = 'Password is required';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Form submission logic
      console.log('Form submitted!');
    }
  };

  return (
    <View style={styles.container}>
    <Text className="mb-3 text-xl text-center font-bold">Contact Property Manager</Text>
    <Text className="font-bold mb-1">Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        className="rounded-lg"
      />
      {errors.name && <Text style={styles.error}>{errors.name}</Text>}
    <Text className="font-bold mb-1">Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        className="rounded-lg"
      />
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}
    <Text className="font-bold mb-1">Phone:</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
        className="rounded-lg"
      />
      {errors.phone && <Text style={styles.error}>{errors.phone}</Text>}
    <Text className="font-bold mb-1">Message:</Text>
      <TextInput
        style={styles.textArea}
        placeholder="Message"
        value={message}
        onChangeText={setMessage}
        multiline={true}
        numberOfLines={10}
        className="rounded-lg"
      />
      {errors.message && <Text style={styles.error}>{errors.message}</Text>}
      {/* <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {errors.password && <Text style={styles.error}>{errors.password}</Text>} */}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'start',
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    
  },
  textArea: {
    height: 200,
    width: '100%',
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    textAlignVertical:'top'
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Form;
