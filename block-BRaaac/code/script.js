let input = document.querySelector(`input`);
let rootElm = document.querySelector(`.movie-list`);

console.log(input, "input")

let allMovies = [
    { 
        name: `Forest Gump`,
        watched: false,
    },
    { 
        name: `LOTR`,
        watched: true,
    },
];

input.addEventListener(`keyup`, (event) => {
    if(event.keyCode === 13){
        allMovies.push({
            name: event.target.value,
            watched: false,
        })
        event.target.value = "";
        createUI(allMovies, rootElm)
    }
   
})



function handleChange (event) {
    let id = event.target.id;
    console.log("handlechange trigged")
    allMovies[id].watched = !allMovies[id].watched;
    createUI(allMovies, rootElm)
}

function elm(element, attr = {}, ...children){
    let ele = document.createElement(element);
    for(let key in attr){
        if(key.startsWith(`data-`)){
            ele.setAttribute(key, attr[key])
        } else {
            ele[key] = attr[key]
        }
    } 
    children.forEach((child) => {
        if(typeof child === "object"){
            ele.prepend(child)
        }
        if(typeof child === "string"){
            let node = document.createTextNode(child);
            ele.append(node)
        }
    })
    return ele
}

function createUI(data, root) {
    root.innerHTML = "";
    data.forEach((movie, i) => {
        let li = elm(
            "li", 
            {}, 
            elm("button", {
                id:i,
                onclick: handleChange,
            }, movie.watched ? `Watched` : `To Watch`),
            elm("label", {
                for: i, 
            },movie.name),
            );
        
        // document.createElement(`li`);
        // li.classList.add("list")
        // let button = document.createElement(`button`);
        // button.id = i;
        // button.innerText = movie.watched ? `Watched` : `To Watch`
        // button.addEventListener(`click`, handleChange);
        // let label = document.createElement(`label`)
        // label.for = i;
        // label.innerText = movie.name
        // li.append(label, button)

        rootElm.append(li);
    })
}

createUI(allMovies, rootElm)