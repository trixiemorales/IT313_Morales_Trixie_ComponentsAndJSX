# Student Roster Card Renderer (IT313 - Mobile Programming)

## Problem Overview
The objective of this project is to render a list of student roster cards dynamically using React Native and Expo. Each card displays student details and conditionally renders a "Full Load" indicator for students with full-unit loads.

## Component Structure
- **`StudentRoster` (Parent Component)**: Holds the student array, computes total dynamically using `{students.length}`, and maps over the array.
- **`StudentCard` (Child Component)**: Receives props (`name`, `course`, `units`, `isFullLoad`) via destructuring, renders UI elements, and uses short-circuit evaluation (`&&`) for conditional display.

## How to Run the App
1. Clone the repository:
   ```bash
   git clone [https://github.com/YourUsername/IT313_LastName_FirstName_ComponentsAndJSX.git](https://github.com/YourUsername/IT313_Morales_Trixie_ComponentsAndJSX.git)