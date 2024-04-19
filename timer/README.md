## React Timer App

This is a simple React timer application that allows users to add multiple timers with customizable durations.

### Features

- **Add Timers**: Users can add timers with a name and duration.
- **Real-time Countdown**: Timers display the remaining time dynamically, updating every 50 milliseconds.
- **Start and Stop Timers**: Users can start and stop all timers simultaneously.

### Technologies Used

- **React**: The app is built using React, a popular JavaScript library for building user interfaces.
- **Context API**: Timer data and timer control functions are managed using the Context API for state management.
- **Hooks**: Various React hooks such as useRef, useState, useEffect, useContext, and useReducer are used for managing state and side effects.
- **TypeScript**: TypeScript is used for static type-checking and enhanced tooling for JavaScript development.

### Folder Structure

- **components/**: Contains React components used in the application.
- **store/**: Contains the TimerContext and related types for managing timer state.
- **UI/**: Contains reusable UI components such as Button, Form, and Container.

### Getting Started

To run this application locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running `npm install` or `yarn install`.
4. Start the development server by running `npm run dev`.
5. Open your browser and navigate to `http://localhost:3000` to view the app.

### Usage

1. Click on the "Add Timer" button to add a new timer.
2. Enter the name and duration (in seconds) for the timer.
3. Click on the "Add Timer" button within the form to confirm.
4. The timer will start automatically and count down the specified duration.
5. You can add multiple timers and manage them simultaneously.

### Acknowledgments

- This project was inspired by the Timer app example in Maximilian Schwarzmüller's online course.
- Special thanks to Maximilian Schwarzmüller for his valuable teaching and resources.

Feel free to customize this README according to your project's specific details and requirements.
