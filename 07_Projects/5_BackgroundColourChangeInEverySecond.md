# Switch Background Colour in every Second

### Created with the help of setInterval ( ) and clearInterval ( ).

## HTML CODE WITH INLINE CSS

```HTML

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Number Guessing Game</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
  </head>
  <body style="background-color: #212121; color: #fff">
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>

    <h1>Start should change the Background color every second</h1>
    <button id="start">Start</button>
    <button id="stop">Stop</button>
    <script src="chaiaurcode.js"></script>
  </body>
</html>


```

## JAVASCRIPT CODE

``` javascript 

const start = document.getElementById('start');
const stop = document.getElementById('stop');
const body = document.body;

let intervalId;

start.addEventListener('click', function () {
  if (!intervalId) {
    intervalId = setInterval(function () {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);

      body.style.backgroundColor = `rgb( ${r}, ${g}, ${b})`;
    }, 1000);
  }
});

stop.addEventListener('click', function () {
  clearInterval(intervalId);
  intervalId = null;
});



```