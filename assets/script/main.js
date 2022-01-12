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