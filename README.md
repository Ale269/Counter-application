# Counter application project

![Project Image](https://imgur.com/I6pzoKE)

> Test basic skills on javascript.

---

### Table of Contents
project analysis.

- [Description](#description)
- [How To Use](#how-to-use)
- [References](#references)
- [Author Info](#author-info)

---

## Description

The project required to create a counter which, starting from the number 0 when the page is loaded, would allow the user to increase or decrease the value by one unit after pressing one of the two buttons present..

#### Built with

- Visual Studio Code

[Back To The Top](#Counter-application-project)

---

## How To Use

#### Installation

Copy this lines of code to get the application.

This is the html lines of code.

```html
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset='UTF-8'/>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&family=Roboto+Mono:wght@700&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="scss/main.css">
            <meta name='viewport'
                content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />
            <meta http-equiv="X-UA-compatible" content="ie=edge">
        </head>
        <body>
            <div class="center-container">
                <h1>Counter</h1>
                <div class="conteiner-counter">
                    <h2 id="counter-number">0</h2>
                </div>
                <button id="botton-increment">Increase</button>
                <button id="botton-decrement">Decrease</button>
            </div>
            <script src="script/main.js"></script>
        </body>
    </html>
```
This is the scss lines of code, please pay attention to the link in the html head.
```scss
    * {
    box-sizing: border-box;
    }

    body {
        height:100vh;
        background-color: #F0F0F0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: 'Poppins', sans-serif;

        .center-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 10px;
            background-color: #F5F5F5;
            padding: 1.5em 1.5em 0.5em 1.5em;
            box-shadow: -8px -8px 10px #fff,
                            5px 5px 13px #A6A6A6; 

            .conteiner-counter{
                padding: 0.3em 1em;;
                border-radius: 20px;
                width: 100%;
                box-shadow:inset -8px -8px 10px #fff,
                        inset  5px 5px 13px #A6A6A6; 
                margin-bottom: 4em;

                h2 {
                    color: #B3B3B3;
                    font-family: 'Roboto Mono', monospace;
                    font-size: 20px;
                    font-weight: 700;
                    margin: 0 auto 0 auto;
                }
            }

            h1 {
                font-size: 25px;
                font-weight: 300;
                color: #B3B3B3;
                margin: 0 auto 2em auto;
            }

            button {
                padding: 1em; 
                width: 220px;
                background-color: #F5F5F5;
                color: #B3B3B3;
                font-size: 20px;
                font-weight: 300;
                border-radius: 10px;
                border: none;
                margin: 0 auto 1em auto;
                box-shadow: -8px -8px 10px #fff,
                            5px 5px 13px #A6A6A6;
            }

            button:active {
                box-shadow:inset -5px -5px 10px #fff,
                            inset 3px 3px 10px #A6A6A6;
                color: #C6C6C6;
            }

            #bottom-increment {
                margin-bottom: 1em;
            }

        }

    }
```
This is the javascript lines of code, please pay attention to the link in the html head.

```javascript
    //variable list
    let counter = document.getElementById('counter-number');
    let incrementBtn = document.getElementById('botton-increment');
    let decrementBtn = document.getElementById('botton-decrement');

    //function that increment number by one
    function increment() {
        console.log('entrata');
        let numberCount = Number(counter.textContent);
        numberCount += 1; 
        counter.textContent = numberCount;
    }

    //function that decrement number by one
    function decrement() {
        console.log('entrata');
        let numberCount = Number(counter.textContent);
        numberCount -= 1; 
        counter.textContent = numberCount;
    }

    //Function call
    incrementBtn.addEventListener("click", increment);
    decrementBtn.addEventListener("click", decrement);
```

[Back To The Top](#Counter-application-project)

---

## References

- Start2Impact - [link to the website](https://www.start2impact.it/?utm_source=google&utm_medium=cpc&utm_campaign=Search_Brand&gclid=Cj0KCQiAieWOBhCYARIsANcOw0w5QK43cTLhwCWpsKfugzdnDB3c2GLK78gn2BA0thbsMWDFx5T7NRwaAp8XEALw_wcB)
- FreeCodeCamp - [link to the video](https://www.youtube.com/watch?v=jS4aFq5-91M&t=15115s)

[Back To The Top](#Counter-application-project)

---

## Author Info

- My website - [My website link](https://ale269.github.io/website/)

[Back To The Top](#Counter-application-project)
