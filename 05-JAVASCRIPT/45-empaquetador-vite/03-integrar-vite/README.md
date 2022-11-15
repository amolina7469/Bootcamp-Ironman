# Integrar Vite en un proyecto existente

1. Crear un `package.json` con `npm init -y`.
2. Instalar Vite como dependencia de desarrollo `npm i vite -D`.
3. Crear los scripts que necesita Vite.

  ```json
  {
    "scripts": {
      "dev": "vite",
      "build": "vite build",
      "preview": "vite preview"
    }
  }
  ```
4. Añadirle el atributo `type="module"` a la etiqueta `<script>`.
5. Ya puedes funcionar tranquilamente lanzando `npm run dev`.