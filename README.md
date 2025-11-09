# 🧩 React Components Library

A modular and scalable collection of reusable components built with **React**, designed to maintain visual consistency, efficiency, and ease of integration in any modern frontend project.

---

## ✨ Features

- ⚛️ Built with **React.js** + **Vite**.

- 🧠 Fully typed with **TypeScript**.

- 🧱 Basic components: `Button`, `Input`, `Card`, `Modal`, `Dropdown`, `Alert`, etc.

- 📦 Ready-to-package and publish structure as an **NPM package**.

- 🧩 Modular and Tree-shakeable: import only what you need.

- 🔍 Includes a **Storybook** for visual documentation and testing.


---

## 🚀 Local Installation and Use

1. Clone the project:
```
git clone https://github.com/your-username/react-components-library.git
cd react-components-library`
```
2. Install dependencies:
```
npm install
```
3. Start Storybook:
```
npm run storybook
```
4. Import components into your project:
```
import { Button } from '@user/react-components-library';

export default function App() {
  return <Button flavor="success">Continue</Button>
}
```

---

## 🔧 Useful Scripts
| Command             | Description                          |
| ------------------- | ------------------------------------ |
| `npm run dev`       | Starts development environment       |
| `npm run build`     | Compiles the library for production  |
| `npm run storybook` | Opens the Storybook interface        |
| `npm run test`      | Runs the unit tests                  |
