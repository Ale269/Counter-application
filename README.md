# Counter application project

![Project Image](https://github.com/Ale269/Counter-application/blob/main/assets/images/counter.png?raw=true)

> Test basic skills on javascript.

---

### Table of Contents
Project analysis.

- [Description](#description)
- [How To Use](#how-to-use)
- [References](#references)
- [Author Info](#author-info)

---

## Description

The project required to create a counter which, starting from the number 0 when the page is loaded, would allow the user to increase or decrease the value by one unit after pressing one of the two buttons present.

- Try the application - [link to the application](https://counter-ale269.netlify.app/)

#### Built with

- Visual Studio Code

[Back To The Top](#Counter-application-project)

---

## How To Use

#### Installation

Copy this lines of code to get the application.

This are the html lines of code.

```html
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset='UTF-8'/>

            <title>Counter application</title>

            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&family=Roboto+Mono:wght@700&display=swap" rel="stylesheet">

            <meta name='viewport'
                content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />
            <meta http-equiv="X-UA-compatible" content="ie=edge">

        </head>
        <body>
            <script src="assets/script/main.js"></script>
        </body>
    </html>
```

This are the javascript lines of code, please pay attention to the link in the html head.

```javascript
    //creation of html elements,insertion and styling
        document.body.style.cssText = (
            `height:100vh;
            background-color: #F0F0F0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-family: 'Poppins', sans-serif;`
        );


        let centerContainer = document.createElement('div');
        centerContainer.style.cssText = (
            `display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 10px;
            background-color: #F5F5F5;
            padding: 1.5em 1.5em 0.5em 1.5em;
            box-shadow: -8px -8px 10px #fff,
                            5px 5px 13px #A6A6A6;`
        );
        document.body.prepend(centerContainer);


        let nameH1 = document.createElement('h1');
        nameH1.style.cssText = (
            `font-size: 25px;
            font-weight: 300;
            color: #B3B3B3;
            margin: 0 auto 2em auto;`
        );
        nameH1.textContent = 'Counter';
        centerContainer.prepend(nameH1);


        let conteinerCounter = document.createElement('div');
        conteinerCounter.style.cssText = (
            `padding: 0.3em 1em;;
            border-radius: 20px;
            width: 100%;
            box-shadow:inset -8px -8px 10px #fff,
                    inset  5px 5px 13px #A6A6A6; 
            margin-bottom: 4em;`
        )
        nameH1.after(conteinerCounter);


        let counter = document.createElement('h2');
        counter.style.cssText = (
            `color: #B3B3B3;
            font-family: 'Roboto Mono', monospace;
            font-size: 20px;
            font-weight: 700;
            margin: 0 auto 0 auto;`
        );
        counter.textContent = '0';
        conteinerCounter.prepend(counter);


        let incrementBtn = document.createElement('button');
        incrementBtn.style.cssText = (
            `padding: 1em; 
            width: 220px;
            background-color: #F5F5F5;
            color: #B3B3B3;
            font-size: 20px;
            font-weight: 300;
            border-radius: 10px;
            border: none;
            margin: 0 auto 1em auto;
            box-shadow: -8px -8px 10px #fff,
                        5px 5px 13px #A6A6A6;`
        );
        incrementBtn.textContent = 'Increase';
        conteinerCounter.after(incrementBtn);


        let decrementBtn = document.createElement('button');
        decrementBtn.style.cssText = (
            `padding: 1em; 
            width: 220px;
            background-color: #F5F5F5;
            color: #B3B3B3;
            font-size: 20px;
            font-weight: 300;
            border-radius: 10px;
            border: none;
            margin: 0 auto 1em auto;
            box-shadow: -8px -8px 10px #fff,
                        5px 5px 13px #A6A6A6;`
        );
        decrementBtn.textContent = 'Decrease';
        incrementBtn.after(decrementBtn);


    //function section 
        //function that increment number by one
        function increment() {
            let numberCount = Number(counter.textContent);
            numberCount += 1; 
            counter.textContent = numberCount;
            incrementBtn.style.cssText = (
                `padding: 1em; 
                width: 220px;
                background-color: #F5F5F5;
                color: #C6C6C6;
                font-size: 20px;
                font-weight: 300;
                border-radius: 10px;
                border: none;
                margin: 0 auto 1em auto;
                box-shadow:inset -5px -5px 10px #fff,
                                inset 3px 3px 10px #A6A6A6;`
            );
        }


        //function that decrement number by one
        function decrement() {
            let numberCount = Number(counter.textContent);
            numberCount -= 1; 
            counter.textContent = numberCount;
            decrementBtn.style.cssText = (
                `padding: 1em; 
                width: 220px;
                background-color: #F5F5F5;
                color: #C6C6C6;
                font-size: 20px;
                font-weight: 300;
                border-radius: 10px;
                border: none;
                margin: 0 auto 1em auto;
                box-shadow:inset -5px -5px 10px #fff,
                                inset 3px 3px 10px #A6A6A6;`
            );
        }

        //function that restores the style of the buttons
        function pressRelease() {
            incrementBtn.style.cssText = (
                `padding: 1em; 
                width: 220px;
                background-color: #F5F5F5;
                color: #B3B3B3;
                font-size: 20px;
                font-weight: 300;
                border-radius: 10px;
                border: none;
                margin: 0 auto 1em auto;
                box-shadow: -8px -8px 10px #fff,
                            5px 5px 13px #A6A6A6;`
            );

            decrementBtn.style.cssText = (
                `padding: 1em; 
                width: 220px;
                background-color: #F5F5F5;
                color: #B3B3B3;
                font-size: 20px;
                font-weight: 300;
                border-radius: 10px;
                border: none;
                margin: 0 auto 1em auto;
                box-shadow: -8px -8px 10px #fff,
                            5px 5px 13px #A6A6A6;`
            );
        }


    //Function call
        incrementBtn.addEventListener("mousedown", increment);
        incrementBtn.addEventListener("mouseup", pressRelease);

        decrementBtn.addEventListener("mousedown", decrement);
        decrementBtn.addEventListener("mouseup", pressRelease);
```

[Back To The Top](#Counter-application-project)

---

## References

I have studied mainly from these sources.

- Start2Impact - [link to the website](https://www.start2impact.it/?utm_source=google&utm_medium=cpc&utm_campaign=Search_Brand&gclid=Cj0KCQiAieWOBhCYARIsANcOw0w5QK43cTLhwCWpsKfugzdnDB3c2GLK78gn2BA0thbsMWDFx5T7NRwaAp8XEALw_wcB)
- FreeCodeCamp - [link to the video](https://www.youtube.com/watch?v=jS4aFq5-91M&t=15115s)

[Back To The Top](#Counter-application-project)

---

## Author Info

Hi, I am a 22 year old boy who recently decided to undertake a path to learn UX design and Full Stack web developing.
If you like, visit my website.

- My website - [My website link](https://ale269.github.io/website/)

[Back To The Top](#Counter-application-project)
