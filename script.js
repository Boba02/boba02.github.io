let headers=["Poori", "Samosa", "Panipuri", "Chicken Pakora", "Poppadoms", "Veg Pakora", "Masala", "Jalfrezi", "Bhuna", "Vindaloo", "Korma", "Paneer"];
let images=["Poori.jpg", "samosa.jpg", "panipuri.jpg", "chickpakora.jpg", "poppadoms.jpg", "vegpakora.jpg", "masala.jpg", "jalfrezi.jpg", "bhuna.jpg", 
            "Lamb-Vindaloo.jpg", "korma.jpg", "paneer.jpg"];
let content=[];
let ingredients=[];

function getIndex(index){
    localStorage.setItem("value", index)
};

document.getElementById("content").innerHTML = `
<p id="first">overview text</p>
<p id="ingreed">ingredients</p>
<img id="mains" src="images/${images[localStorage.getItem("value")]}" alt="down">`;

document.getElementById("headers").innerHTML = headers[localStorage.getItem("value")];

