import ThemeSwitch from "./components/ThemeSwitch";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <ThemeSwitch />
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col items-center justify-center gap-6 p-6 transition-colors">
        <h1 className="text-4xl font-bold">Dark Mode Demo</h1>

        <div className="mt-6 p-6 rounded-xl shadow-xl bg-gray-100 dark:bg-gray-800 w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-2">Theme Aware Card</h2>
          <p>This card adapts based on the current theme.</p>
        </div>
      </div>
    </ThemeProvider>
  );
}


