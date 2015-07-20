# lichterwahn
So Coded balloon lights control library.

## Install
To use the REPL just install 'lichterwahn'.

```bash
npm install -g lichterwahn
```

or add it to your package.json

```bash
npm install lichterwahn --save
```

## API

We also encourage you to use the library programmatically, like:

```javascript
var LED_COUNT = 70

var lights = require('lichterwahn')

for (var i = 0; i < LED_COUNT; i++) {
  lights(i, 150, 200, 120)
}
```

All LEDs have numbers 0 - 70 and you can set the color in RGB values

```javascript
lights(led_id, red, green, blue)
```

## Have fun and happy hacking!
