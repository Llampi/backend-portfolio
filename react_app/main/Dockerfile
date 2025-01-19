# Usa la imagen de Node.js
FROM node:20-slim AS builder

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de tu proyecto React al contenedor
COPY . /app/

#COPY react_app/main/package*.json ./

# Instala las dependencias de React
RUN npm install

#COPY react_app/main ./

# Expone el puerto en el que React servirá la aplicación
EXPOSE 5173

# Inicia el servidor de desarrollo de React
CMD ["npm", "run", "dev"]