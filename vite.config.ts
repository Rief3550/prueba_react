import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import path from "path"; // Módulo nativo para resolver las rutas

// https://vite.dev/config/
export default defineConfig({
  // 1. Unimos tus plugins de optimización de renders automáticos
  plugins: [
    react(),
    babel({
      presets: [reactCompilerPreset()],
    }),
  ],

  // 2. Agregamos el alias '@' para que tus archivos .tsx se importen de forma limpia
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // 3. Activamos el servidor para que puedas escanearlo y probarlo desde el celular
  server: {
    port: 5173,
    open: true,
    host: true, // Te permite ver la app reactiva con el compilador en tu red local
  },

  // 4. Mantenemos el empaquetado estratégico para producción
  build: {
    outDir: "dist",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
});
