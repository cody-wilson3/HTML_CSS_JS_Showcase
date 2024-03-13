drawer = document.getElementById("navDrawer");

document.getElementById("navbar-html").innerText = `
    <div id="navBar">
        <span id="menuButton" class="material-symbols-outlined">Menu</span>
        <h3 id="navBarTitle">Cool Website Title</h3>
        <div id="links">
            <span class="navLink"><a>Link #1</a></span>
            <span class="navLink"><a>Link #2</a></span>
            <span class="navLink"><a>Link #3</a></span>
        </div>
    </div>
`;

document.getElementById("navbar-css").innerText = `
    #navBar {
        background-color: rgb(118, 80, 40);
        padding-top:5px;
        padding-bottom:10px;
        display:flex;
    }

    #menu {
        margin-left:15px;
        cursor:pointer;
        position: relative;
        top:17px;
    }

    #navBarTitle {
        padding-left:15px;
    }

    #links {
        margin-top:9px;
        width:580px;
        display:flex;
        align-self:center;
        justify-content: right;
        gap:20px;
    }

    .navLink {
        cursor:pointer;
    }
`;

document.getElementById("drawer-html").innerText = `
    <h3>Navigation Drawer</h3>
    <div id="mask"></div>
    <h4>Example</h4>
    <div id="borderBox">
        <div id="drawerContainer" class="container">
            <span id="menu2" class="material-symbols-outlined menu">Menu</span>
            <h3 id="navBarTitle">Cool Website Title</h3>
        </div>
        <div id="navDrawer">
            <a><span class="material-symbols-outlined">home</span>Home</a>
            <a><span class="material-symbols-outlined">apps</span>Apps</a>
            <a><span class="material-symbols-outlined">groups</span>People</a>
            <a><span class="material-symbols-outlined">pets</span>Pets</a>
        </div>
    </div>
`

document.getElementById("drawer-css").innerText = `
    #borderBox {
        border: 2px solid tan;
        top:0;
        height:350px;
    }

    #navDrawer {
        position: relative;
        top:0px;
        left:-650px;
        box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, .22);
        width:240px;
        background-color: rgb(46, 97, 60);
        z-index:1;
    }

    #navDrawer > a {
        display:flex;
        padding:15px;
        align-items: center;
        gap:8px;
    }

    #navDrawer[data-open="true"] {
        left:0px;
        animation: easingDrawerRight;
        animation-duration:.3s;
        animation-timing-function: ease;
    }

    #navDrawer[data-open="false"] {
        animation: easingDrawerLeft;
        animation-duration: .3s;
        animation-timing-function: ease;
    }

    @keyframes easingDrawerLeft {
        0% {left:0px;}
        99% {left:-240px}
        100% {left:-650px;}
    }

    @keyframes easingDrawerRight {
        0% {left:-650px;}
        1% {left:-240px;}
        100% {left:0px;}
    }
`

document.getElementById("navbar-js").innerText = `
    document.getElementById("menuButton").addEventListener("click", () => {
        console.log("The Menu button was clicked")
`;

document.getElementById("menuButton").addEventListener("click", () => {
    console.log("The Menu button was clicked")
})

let isNavOpen = false;
document.getElementById("menu2").addEventListener("click", () => {
    isNavOpen = !isNavOpen;
    drawer.dataset.open = `${isNavOpen}`;
})

document.getElementById("drawer-js").innerText = `
    let isNavOpen = false;
    document.getElementById("menu2").addEventListener("click", () => {
        isNavOpen = !isNavOpen;
        drawer.dataset.open = "{isNavOpen}}";
    })`


saveButton = document.getElementById("save");
saveButton.addEventListener("mousedown", (e) => {
    e.target.dataset.pressed = "true";
});
saveButton.addEventListener("mouseup", (e) => {
    e.target.dataset.pressed = "false";
})
saveButton.addEventListener("mouseleave", (e) => {
    e.target.dataset.pressed = "false"
})


saveIcon = document.getElementById("saveIcon");
saveIcon.addEventListener("mousedown", (e) => {
    e.target.dataset.pressed = "true";
});
saveIcon.addEventListener("mouseup", (e) => {
    e.target.dataset.pressed = "false";
})
saveIcon.addEventListener("mouseleave", (e) => {
    e.target.dataset.pressed = "false"
})


addButton = document.getElementById("plus");
addButton.addEventListener("mousedown", (e) => {
    e.target.dataset.pressed = "true";
});
addButton.addEventListener("mouseup", (e) => {
    e.target.dataset.pressed = "false";
})
addButton.addEventListener("mouseleave", (e) => {
    e.target.dataset.pressed = "false"
})

document.getElementById("buttons-html").innerText = `
    <div id="buttonContainer">
        <button id="save" class="buttons">Save</button>
        <button id="saveIcon" class="buttons"><span class="material-symbols-outlined">save</span>Save</button>
        <button id="plus" class="material-symbols-outlined buttons">add</button>
    </div>`

document.getElementById("buttons-css").innerText = `
    #buttonContainer {
        display:flex;
        justify-content: space-evenly;
    }

    .buttons {
        cursor:pointer;
        background-color: rgb(186, 97, 3);
        border: 2px solid rgb(100, 65, 31);
        color:white;
        padding:10px;
        width:100px;
        font-size:larger;
        border-radius:10px;
        box-shadow: 12px 12px 12px rgb(0, 0, 0, .5);
        transition: background-color .2s ease, box-shadow .3s ease;    
    }

    #plus {
        width:60px;
        height:60px;
        border-radius: 30px;
    }

    .buttons:hover {
        background-color: rgb(175, 70, 3);
    }

    .buttons[data-pressed="true"] {
        box-shadow:none;
    }

    #saveIcon {
        display:flex;
        align-items:center;
        gap:10px;
        padding-right:96px;
        padding-left: 20px;
    }`

document.getElementById("buttons-js").innerText = `
    saveButton = document.getElementById("save");
    saveButton.addEventListener("mousedown", (e) => {
        e.target.dataset.pressed = "true";
    });
    saveButton.addEventListener("mouseup", (e) => {
        e.target.dataset.pressed = "false";
    })
    saveButton.addEventListener("mouseleave", (e) => {
        e.target.dataset.pressed = "false"
    })


    saveIcon = document.getElementById("saveIcon");
    saveIcon.addEventListener("mousedown", (e) => {
        e.target.dataset.pressed = "true";
    });
    saveIcon.addEventListener("mouseup", (e) => {
        e.target.dataset.pressed = "false";
    })
    saveIcon.addEventListener("mouseleave", (e) => {
        e.target.dataset.pressed = "false"
    })


    addButton = document.getElementById("plus");
    addButton.addEventListener("mousedown", (e) => {
        e.target.dataset.pressed = "true";
    });
    addButton.addEventListener("mouseup", (e) => {
        e.target.dataset.pressed = "false";
    })
    addButton.addEventListener("mouseleave", (e) => {
        e.target.dataset.pressed = "false"
    })`

document.getElementById("left").addEventListener("click", () => {
    imgContainer = document.getElementById("imgContainer");
    imgContainer.animate([{
        transform: 'translateX(-320px)'
    }], {
        duration: 300,
        easing: "ease",
    }).onfinish = () => {
        const firstChild = imgContainer.firstElementChild;
        firstChild.remove();
        imgContainer.appendChild(firstChild.cloneNode(true));
    }
}, 3000)

document.getElementById("right").addEventListener("click", () => {
    imgContainer = document.getElementById("imgContainer");
    imgContainer.animate([{
        transform: 'translateX(320px)'
    }], {
        duration: 300,
        easing: "ease",
    }).onfinish = () => {
        const lastChild = imgContainer.lastElementChild;
        lastChild.remove();
        imgContainer.insertBefore(lastChild.cloneNode(true), imgContainer.firstChild)
    }
}, 3000)

document.getElementById("images-html").innerText = `
    <h3>Image Carousel</h3>
    <h4>Example</h4>
    <div id="masterContainer">
        <button id="left" class="material-symbols-outlined movePic">chevron_left</button>

        <div id="cutOffContainer">
            <div id="imgContainer">
                <img src="bench.jpg" class="images" alt="bench-press" width="320px">
                <img src="squat.jpg" class="images" alt="squat" width="320px">
                <img src="deadlift.jpg" class="images" alt="deadlift" width="320px">
                <img src="shoulder.jpg" class="images" alt="shoulder-press" width="320px">
                <img src="split.jpg" class="images" alt="split-squat" width="320px">
            </div>
        </div>
        <button id="right" class="material-symbols-outlined movePic">chevron_right</button>

    </div>`

document.getElementById("images-css").innerText = `
    #imgContainer {
        position:relative;
        right:320px;
        width:1120px;
        height:15em;
        display:flex;
    }

    #masterContainer {
        position:relative;
        right:100px;
        align-items:center;
        display:flex;
        width:1000px;
        justify-content: space-evenly;
    }

    #cutOffContainer {
        width: 800px;
        align-items: center;
        overflow:hidden;
    }

    .movePic {
        width:60px;
        height:60px;
        border-radius: 30px;
        cursor:pointer;
    }`

document.getElementById("images-js").innerText = `
    document.getElementById("left").addEventListener("click", () => {
        imgContainer = document.getElementById("imgContainer");
        imgContainer.animate([{
            transform: 'translateX(-320px)'
        }], {
            duration: 300,
            easing: "ease",
        }).onfinish = () => {
            const firstChild = imgContainer.firstElementChild;
            firstChild.remove();
            imgContainer.appendChild(firstChild.cloneNode(true));
        }
    }, 3000)

    document.getElementById("right").addEventListener("click", () => {
        imgContainer = document.getElementById("imgContainer");
        imgContainer.animate([{
            transform: 'translateX(320px)'
        }], {
            duration: 300,
            easing: "ease",
        }).onfinish = () => {
            const lastChild = imgContainer.lastElementChild;
            lastChild.remove();
            imgContainer.insertBefore(lastChild.cloneNode(true), imgContainer.firstChild)
        }
    }, 3000)
`

let colorArray = [
    210, 180, 150, 120, 90, 60, 30, 0

]

setInterval(() => {
    //for each oval
    for (let i = 1; i < 9; i++) {
        let idString = "oval" + i;
        ovalElement = document.getElementById(idString);
        let colorVal = colorArray[i - 1];
        ovalElement.setAttribute("style", `background-color : rgb(${colorVal}, ${colorVal}, ${colorVal}`)
        if (colorVal + 30 > 210) { colorArray[i - 1] = 0 }
        else { colorArray[i - 1] = colorVal + 30 }
    }
}, 140)

document.getElementById("loader1-html").innerText = `
    <div id="loader1Container">
        <div id="oval1" class="oval"></div>
        <div id="oval3" class="oval"></div>
        <div id="oval5" class="oval"></div>
        <div id="oval7" class="oval"></div>
        <div id="oval2" class="oval"></div>
        <div id="oval4" class="oval"></div>
        <div id="oval6" class="oval"></div>
        <div id="oval8" class="oval"></div>
    </div>`

document.getElementById("loader1-css").innerText = `
    #loader1Container {
        height:100px;
        width:100px;
    }

    .oval {
        position: relative;
        height:20%;
        width:10%;
        border-radius:50%;
    }

    #oval1 {
        left:45%;
        background-color:rgb(0, 0, 0);
    }

    #oval2 {
        transform: rotate(45deg);
        left:75%;
        bottom:70%;
        background-color:rgb(30, 30, 30);

    }

    #oval3 {
        left:85%;
        top:20%;
        transform: rotate(90deg);
        background-color:rgb(60, 60, 60);

    }

    #oval4 {
        bottom:30%;
        left:75%;
        transform: rotate(-45deg);
        background-color:rgb(90, 90, 90);

    }

    #oval5 {
        left:45%;
        top:40%;
        background-color:rgb(120, 120, 120);

    }

    #oval6 {
        bottom:50%;
        left:15%;
        transform: rotate(45deg);
        background-color:rgb(150, 150, 150);
    }

    #oval7 {
        left:5%;
        bottom:20%;
        transform: rotate(90deg);
        background-color:rgb(180, 180, 180);
    }

    #oval8 {
        left:15%;
        bottom:130%;
        transform: rotate(-45deg);
        background-color:rgb(210, 210, 210);
    }`

document.getElementById("loader1-js").innerText = `
    let colorArray = [
        210, 180, 150, 120, 90, 60, 30, 0

    ]

    setInterval(() => {
        //for each oval
    for (let i = 1; i < 9; i++){
        let idString = "oval" + i;
        ovalElement = document.getElementById(idString);
        let colorVal = colorArray[i-1];
        ovalElement.setAttribute("style", background-color : rgb({colorVal}, {colorVal}, {colorVal})
        if (colorVal + 30 > 210){colorArray[i-1] = 0}
        else{colorArray[i-1] = colorVal + 30}
    }
    }, 140)`
delay = 0;
letterList = document.getElementById("loader2Container").children;
for (let i = 0; i < letterList.length; i++) {
    letterList[i].setAttribute("style", `animation-delay: ${delay}s`)
    delay += .33;
}

document.getElementById("loader2-html").innerText = `
    <div>
        <h2>Loading Spinner #2</h2>
        <div id="loader2Container">
            <span id="letter1" class="letters">L</span>
            <span id="letter2" class="letters">O</span>
            <span id="letter3" class="letters">A</span>
            <span id="letter4" class="letters">D</span>
            <span id="letter5" class="letters">I</span>
            <span id="letter6" class="letters">N</span>
            <span id="letter7" class="letters">G</span>
        </div>
        <h4>HTML</h4>
        <pre class="content" id="loader2-html"></pre>
        <h4>CSS</h4>
        <pre class="content" id="loader2-css"></pre>
        <h4>JS</h4>
        <pre class="content" id="loader2-js"></pre>
    </div>`

document.getElementById("loader2-css").innerText = `
    #loader2Container {
        display:flex;
        gap:10px;
    }

    @keyframes letterMovement {
        50% {
            transform: rotateY(180deg);
        }

        100% {
            transform: rotateY(0deg);
        }
    }

    .letters {
        display:flex;
        justify-content:center;
        font-size:40px;
        width:40px;
        animation: letterMovement;
        animation-duration:3s;
        animation-timing-function:linear;
        animation-iteration-count: infinite;
    }`

document.getElementById("loader2-js").innerText = `
delay = 0;
letterList = document.getElementById("loader2Container").children;
for (let i = 0; i < letterList.length; i++){
    letterList[i].setAttribute("style", animation-delay: {delay}s)
    delay += .33;
}`


sensorBox = document.getElementById("sensorBox");
parent = sensorBox.parentElement;
sensorBox.addEventListener("mouseover", () => {
    let left = Math.floor(Math.random() * parent.clientWidth - sensorBox.clientWidth);
    let top = Math.floor(Math.random() * parent.clientHeight - sensorBox.clientHeight);
    sensorBox.animate(
        [{
            transform: `translate(${left}px, ${top}px)`
        }],
        {
            duration: 0,
            fill: "forwards"
        }
    )

});

document.getElementById("noBox").addEventListener("click", () => {
    noParent = document.getElementById("noBoxContainer");
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "answerBlock");
    newDiv.innerText = "sending this to all your friends now...";

    deleteExp = document.createElement("input");
    deleteExp.setAttribute("type", "button");
    deleteExp.setAttribute("value", "Try Again");
    deleteExp.setAttribute("style", "margin-left: 15px;");
    deleteExp.addEventListener("click", (e) => {
        e.target.parentElement.remove();
    })

    newDiv.appendChild(deleteExp);
    noParent.appendChild(newDiv);

})

document.getElementById("yes").addEventListener("click", () => {
    noParent = document.getElementById("noBoxContainer");
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "answerBlock");
    newDiv.setAttribute("id", "gotIt")
    newDiv.innerText = "I have no idea how you clicked that";

    deleteExp = document.createElement("input");
    deleteExp.setAttribute("type", "button");
    deleteExp.setAttribute("value", "Play Again");
    deleteExp.setAttribute("style", "margin-left: 15px;");
    deleteExp.addEventListener("click", (e) => {
        e.target.parentElement.remove();
    })

    newDiv.appendChild(deleteExp);
    noParent.appendChild(newDiv);
})

document.getElementById("loader3-html").innerText = `
    <h2>Loading Spinner #3</h2>
    <h4>While your page is loading, answer this question:</h4>
    <div id="question">Are you Smart?</div>
    <div id="loader3Container">
        <div id="sensorBox">
            <div class="yesBox">Yes, I am smart!</div>
        </div>
    </div>
    <div id="noBoxContainer">
        <div id="noBox" class="yesBox">No, I'm actually dumb.</div>
    </div>`

document.getElementById("loader3-css").innerText = `
    #loader3Container {
        left:0;
        right:0;
        height:300px;
        background-color: rgb(80, 80, 80);    
    }

    .yesBox {
        display:flex;
        font-weight:bold;
        align-items: center;
        justify-content: center;
        width: 95%;
        height:40px;
        background-color: rgb(239, 231, 231);
        color:black;
        border-radius:15px;
    }

    #sensorBox {
        display:flex;
        justify-content: center;
        align-items: center;
        width: 22%;
        height:50px;
        border-radius: 15px;
        display:flex;
    }

    #noBoxContainer {
        height: 45px;
        left:0;
        right:0;
        background-color: rgb(80, 80, 80);
        display:flex;
        justify-content: center;
    }

    #noBox {
        width:25%;
        cursor:pointer;
    }

    #tryAgainBlock{
        background-color: brown;
        padding:15px;
        border-radius:15px;
        border: 2px solid red;
    }

    #question {
        display:flex;
        justify-content: center;
        font-size:large;
        font-weight:bold;
        margin-top:20px;
        margin-bottom:20px;
    }`

document.getElementById("loader3-js").innerText = `
    sensorBox = document.getElementById("sensorBox");
    parent = sensorBox.parentElement;
    sensorBox.addEventListener("mouseover", () => {
        let left = Math.floor(Math.random() * parent.clientWidth - sensorBox.clientWidth);
        let top = Math.floor(Math.random() * parent.clientHeight - sensorBox.clientHeight);
        sensorBox.animate(
            [{
                transform: translate({left}px, {top}px)
            }],
            {
                duration:0,
                fill:"forwards"
            }
        )

    });

    document.getElementById("noBox").addEventListener("click", () => {
        noParent = document.getElementById("noBoxContainer");
        newDiv = document.createElement("div");
        newDiv.setAttribute("id", "tryAgainBlock");
        newDiv.innerText = "sending this to all your friends now..."

        deleteExp = document.createElement("input");
        deleteExp.setAttribute("type", "button");
        deleteExp.setAttribute("value", "Try Again");
        deleteExp.setAttribute("style", "margin-left: 15px;");
        deleteExp.addEventListener("click", (e) => {
            e.target.parentElement.remove();
        })

        newDiv.appendChild(deleteExp);
        noParent.appendChild(newDiv);
    })
    
    document.getElementById("yesBox").addEventListener("click", () => {
        noParent = document.getElementById("noBoxContainer");
        newDiv = document.createElement("div");
        newDiv.setAttribute("class", "answerBlock");
        newDiv.innerText = "I have no idea how you clicked that";
    
        deleteExp = document.createElement("input");
        deleteExp.setAttribute("type", "button");
        deleteExp.setAttribute("value", "Play Again");
        deleteExp.setAttribute("style", "margin-left: 15px;");
        deleteExp.addEventListener("click", (e) => {
            e.target.parentElement.remove();
        })
    
        newDiv.appendChild(deleteExp);
        noParent.appendChild(newDiv);    
    })`





