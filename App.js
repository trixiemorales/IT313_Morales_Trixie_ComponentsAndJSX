import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import StudentRoster from './components/StudentRoster'; // Based on your code snippet

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StudentRoster />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}