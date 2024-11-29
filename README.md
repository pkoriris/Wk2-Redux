# Employee Management System with Redux

This application allows users to manage employee information with Redux for state management. It supports adding, updating, and viewing employee details.

## Features:
- **Add Employee**: Add new employees to the system.
- **Update Employee**: Edit existing employee information.
- **Employee List**: View the list of employees.

## Technologies Used:
- **React**: Frontend framework for building the UI.
- **Redux**: State management for shared data.
- **Jest**: Testing framework for reducers.

## How to Run:

1. Clone the repository:
    ```bash
    git clone https://github.com/pkoriris/Wk2-Redux.git
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the application:
    ```bash
    npm start
    ```

## Project Structure:

- **`src/actions/`**: Contains Redux actions.
- **`src/reducers/`**: Contains Redux reducers.
- **`src/store.js`**: Configures the Redux store.
- **`src/App.js`**: Main component that connects Redux state and actions.

## Testing:

Tests are written for Redux reducers using Jest. To run the tests:
```bash
npm test
