# telegram_bot_template

## Template para crear bot de telegram con la librería telegram

Dependencias:
```
LIBRERÍA:   VERSIÓN:
telegraf  - ^4.12.2
axios     - ^1.4.0
mongodb   - ^5.4.0
```

Dependencias de desarrollo:
```
LIBRERÍA:   VERSIÓN:
chai      - ^4.3.7
mocha     - ^10.2.0
nodemon   - ^2.0.22
```

Inslatarlas con: `npm i`

## Levantar el bot:
```bash
npm run start  # Modo Producción
npm run dev    # Modo Desarrollo
```

## Config.js
En este archivo se definen configuraciónes y variables globales.
Entre ellas, esta el token que necesita Telegraf para levantar el bot.

Crear una variable de entorno y asignarle el token:
```bash
# Forma 1:
export TELEGRAM_BOT_TOKEN="XXXXXXXX"

# Forma 2: (para que quede guardada al cerrar la terminal)
echo 'export TELEGRAM_BOT_TOKEN="XXXXXXXX"' >> ~/.bashrc
```

### ¿Cómo creo el token para mi bot?
Ir a `https://t.me/botfather` (loguearse con una cuenta de telegram) y seguir las instrucciónes.

