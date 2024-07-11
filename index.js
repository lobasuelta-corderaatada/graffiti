const form = document.querySelector("form");

function onClick(event){
    console.log(event.target.parentElement);
    event.target.parentElement.remove();
}

function creaDiv(dataForm){
    //creo el div
    let elDiv = document.createElement("div");
    elDiv.style.backgroundColor = dataForm.color;
    elDiv.style.fontFamily = dataForm.font;
    elDiv.setAttribute("class", "ml-7 mt-16 flex h-60 w-60 flex-col bg-slate-50 text-center text-2xl font-extrabold");
    
    //creo el span
    const elDivSpan = document.createElement("span")
    elDivSpan.setAttribute("class", "pr-7 text-right text-sm font-normal");
    const elDivSpanText = document.createTextNode("x");
    elDivSpan.appendChild(elDivSpanText);
    elDiv.appendChild(elDivSpan);

    //creo el texto
    const elDivText = document.createTextNode(dataForm.text);
    elDiv.appendChild(elDivText);

    //agrego el div al container
    const container = document.getElementById("container");
    container.appendChild(elDiv);

    //agrego evento al span
    elDivSpan.addEventListener("click", onClick)
    


}

function onsubmit(event){
    event.preventDefault()
    const fontStyle = event.target[2].checked == true ? event.target[2].value : event.target[3].value;
    const dataForm = {
        text : event.target[0].value,
        color : event.target[1].value,
        font : fontStyle
    }

    creaDiv(dataForm);
}

form.addEventListener("submit", onsubmit);

