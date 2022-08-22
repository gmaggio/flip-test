# Flip Test

A Flip Transaction Application Test that consist of two pages: **Transaction List Page** and **Detail Page**.

## Requirements

- [Setting up the development environment](https://reactnative.dev/docs/environment-setup)

## How to run

Clone the app:

```
git clone https://github.com/gmaggio/flip-test.git
```

Go to the directory and install the packages:

```
cd flip-test
npm install
```

Open the Android emulator then run the app:

```
yarn android
```

## Approaches to enhance the app

- Use **Flatlist** to render the list, instead of ScrollView.
- Avoid passing inline functions as props. Instead declare the **function as a class method or as a function inside a functional component** so that the references remove any possibility of across re-renders
- **Avoid arrow functions** because they are a common culprit for wasteful re-renders.
- Using objects or arrays for styling will create new instances with each new render. Use a **StyleSheet** instead, which always passes a reference instead of a new object or array creation and allocation.
- **Memoization using useMemo()**. Memoization enables your code to re-render components only if there’s a change in the props. With this technique, developers can avoid unnecessary renderings and reduce the computational load in applications.
