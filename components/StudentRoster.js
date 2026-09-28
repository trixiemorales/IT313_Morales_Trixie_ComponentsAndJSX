import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import StudentCard from './StudentCard';

// Starter data provided in requirements
const initialStudents = [
  { id: "s1", name: "Ana Cruz", course: "IT313", units: 21, isFullLoad: true },
  { id: "s2", name: "Bea Santos", course: "IT313", units: 15, isFullLoad: false },
  { id: "s3", name: "Cid Ramos", course: "IT313", units: 18, isFullLoad: true },
  { id: "s4", name: "Dex Alonzo", course: "IT313", units: 12, isFullLoad: false },
];

export default function StudentRoster() {
  const [students, setStudents] = useState(initialStudents);

  // Helper function to satisfy Requirement #6 (Reversing order test)
  const reverseRoster = () => {
    setStudents([...students].reverse());
  };

  return (
    <ScrollView style={styles.container}>
      {/* Dynamic Header using JSX template literal */}
      <Text style={styles.header}>
        {`Total Enrolled Students: ${students.length}`}
      </Text>

      {/* Button to test array order reversal for Requirement #6 */}
      <View style={styles.buttonContainer}>
        <Button title="Reverse Order" onPress={reverseRoster} />
      </View>

      {/* Rendering dynamic list using .map() */}
      {students.map((student) => (
        <StudentCard
          key={student.id} // Standard ID key requirement
          name={student.name}
          course={student.course}
          units={student.units}
          isFullLoad={student.isFullLoad}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 20,
    textAlign: 'center',
    color: '#1a1a1a',
  },
  buttonContainer: {
    marginBottom: 16,
  },
});