# 📸 Galeria de Imagenes  
Proyecto realizado para la materia **Lenguajes Visuales II**, cumpliendo con el Tema 6: *Galería de Imágenes*.

El objetivo es mostrar una colección de imágenes con **título**, **categoría**, **filtros dinámicos** y un **modal** para ver las imágenes ampliadas.  
El diseño está hecho con **React + Vite + TailwindCSS**.

---

## 📂 Contenido del Proyecto

El proyecto contiene:

- `/src/data/imagenes.json` → Archivo con la información de las imágenes.  
- `/src/App.jsx` → Lógica principal de renderización, filtros y modal.  
- `/src/main.jsx` → Punto de entrada de React.  
- `/public/` → Recursos públicos.  
- `tailwind.config.js` → Configuración de estilos.  
- `vite.config.js` → Configuración del entorno de desarrollo Vite.

---

## 🖼️ Funcionalidades Implementadas

### ✔ Mostrar imágenes con título y categoría  
Cada tarjeta visualiza:
- Imagen  
- Título  
- Categoría  

### ✔ Filtrar por categorías  
Botones dinámicos que permiten mostrar:
- Todas  
- Paisajes  
- Ciudades  
- Personas  
- Animales  

### ✔ Ver imagen ampliada  
Al hacer clic en una imagen:
- Se abre un **modal**  
- Muestra la imagen en mayor tamaño  
- Incluye el título y descripción correspondiente  
- Botón para cerrar  

---

## 🚀 Cómo ejecutar el proyecto

### 🔧 **Requisitos previos**
Asegúrese de tener instalado:

- **Node.js** (versión 16 o superior)  
- **npm**  

Puede verificarlo con:

```bash
node -v
npm -v
▶️ Pasos para ejecutar
Clonar el repositorio:

bash
Copiar código
git clone https://github.com/USUARIO/REPO.git
Entrar a la carpeta del proyecto:

bash
Copiar código
cd galeria-imagenes
Instalar dependencias:

bash
Copiar código
npm install
Ejecutar el servidor de desarrollo:

bash
Copiar código
npm run dev
Abrir en el navegador:

arduino
Copiar código
http://localhost:5173/
🛠️ Tecnologías Utilizadas
React

Vite

TailwindCSS

JavaScript (ES6+)

HTML5 / CSS3

👨‍💻 Autor
Dennis Brunaga
Proyecto académico para la materia Lenguajes Visuales II.
