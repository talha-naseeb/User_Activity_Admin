# Vite React Shadcn TypeScript Starter

A modern front-end boilerplate built with **Vite**, **React**, **TypeScript**, and **Shadcn/UI** — designed for fast, scalable, and maintainable web applications.

---

## 🚀 Features

- ⚡️ Blazing fast development with **Vite**
- ⚛️ **React 18** + **TypeScript** for type-safe UI development
- 🎨 Pre-configured **Tailwind CSS** + **Shadcn/UI** components
- 🧩 Modular structure with reusable components
- 🌙 Dark mode support via **next-themes**
- 🔄 Data fetching with **TanStack React Query**
- 🧠 Schema validation using **Zod**
- ✅ Form handling via **React Hook Form**
- 📊 Charting and data visualization with **Recharts**

---

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/vite_react_shadcn_ts.git
   cd vite_react_shadcn_ts
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The app will run at **http://localhost:8080** (default port can be changed in `vite.config.ts`).

---

## 🧰 Available Scripts

| Command | Description |
|----------|--------------|
| `npm run dev` | Start development server |
| `npm run build` | Build the project for production |
| `npm run build:dev` | Build in development mode |
| `npm run lint` | Run ESLint for code quality |
| `npm run preview` | Preview the production build locally |

---

## 📁 Folder Structure

```
vite_react_shadcn_ts/
│
├── src/                # Application source code
├── public/             # Static assets
├── tsconfig.json       # TypeScript configuration
├── tailwind.config.js  # Tailwind setup
├── vite.config.ts      # Vite configuration
└── package.json        # Dependencies and scripts
```

---

## ⚙️ Why it runs on Port 8080

The development server is configured to run on **port 8080** within the `vite.config.ts` file.  
This setting defines where the app will be hosted locally. You can easily change the port by updating:

\`\`\`js
export default defineConfig({
  server: {
    port: 8080
  }
})
\`\`\`

Change the number to your preferred port (e.g., `3000`) if needed.

---

## 👤 Author

**Talha Naseeb**  
MERN Stack Developer  

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

*Generated on October 20, 2025*
