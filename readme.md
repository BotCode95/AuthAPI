# AUTH API

Backend proyecto de login y signUP con roles y grupos para seguridad de pantallas.

## Requisitos Previos

Asegúrate de tener instalados en tu máquina:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Configuración

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/BotCode95/AuthAPI


2. **Instala las dependencias:**
    ```bash
    npm install

## Crea un archivo .env en la raíz del proyecto y agrega las siguientes variables de entorno:

Siguiendo la plantilla de env.template (los datos se encuentran anexos en el TP)

```bash
    MONGODB_CNN = mongodb+srv://<NAME>:<PASS>@cluster0.30zkc.mongodb.net/authapi   
    PORT_DEVELOPMENT = 4001  
    PORT= 4000   
    SECRETORPRIVATEKEY=''
```

## Ejecución 
* En una terminal, ejecuta el siguiente comando para iniciar el servidor de desarrollo:
    ```bash
    npm run dev
    ```
*  En otra terminal, si necesitas compilar TypeScript automáticamente mientras desarrollas, ejecuta**
```bash
    tsc --watch
```
    
**Autor:  Patricio Bottino** ⚡️🦆