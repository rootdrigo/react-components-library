# 🧩 React Components Library

Una colección modular y escalable de componentes reutilizables creados con **React**, diseñada para mantener consistencia visual, eficiencia y facilidad de integración en cualquier proyecto frontend moderno.

---

## ✨ Características

- ⚛️ Construido con **React.js** + **Vite**.  
- 🧠 Tipado completo con **TypeScript**.  
- 🧱 Componentes básicos: `Button`, `Input`, `Card`, `Modal`, `Dropdown`, `Alert`, etc.  
- 📦 Estructura lista para empaquetar y publicar como **NPM package**.  
- 🧩 Modular y Tree-shakeable: solo importás lo que necesitás.  
- 🔍 Incluye **Storybook** para documentación visual y testing.  

---

## 🚀 Instalación y uso local

1. Clonar el proyecto:
   ```
   git clone https://github.com/tu-usuario/react-components-library.git
   cd react-components-library
   ```
2. Instalar dependencias:
   ```
   npm install
   ```
3. Levantar Storybook:
   ```
   npm run storybook
   ```
4. Importar componentes en tu proyecto:
   ```
   import { Button } from '@user/react-components-library';

   export default function App() {
   return <Button flavor="success">Continue</Button>
   }
   ```
   
---

## 🔧 Scripts útiles
| Comando             | Descripción                         |
| ------------------- | ----------------------------------- |
| `npm run dev`       | Levanta entorno de desarrollo       |
| `npm run build`     | Compila la librería para producción |
| `npm run storybook` | Abre la interfaz de Storybook       |
| `npm run test`      | Corre los tests unitarios           |
