
const container = document.getElementById("menu-container");

let images = [[1,2,3], [4,5,6], [7,8,9]];

let gallery = Array.from(container.getElementsByClassName("gallery"));


for(let i= 0; i < images.length ; i++){
    let d = document.createElement("div")
    d.setAttribute("class", "d")
    let dots = [];
    for(let j=0; j< images[i].length; j++){
        let p = document.createElement("p")
        let dot= document.createElement("div");
        dot.setAttribute("class", "dots")
        dot.addEventListener("click", ()=> {
            changeImage(i, j);
           
        })
        dots.push(dot);
        p.innerText = images[i][j];
        if(j == 0){
            p.style.display="block";
            dot.id = 'active';
        } else {
            p.style.display ="none"
            dot.id = "inactive"
        }
        gallery[i].appendChild(p)
    }
    dots.forEach(e => {d.appendChild(e)})
    gallery[i].appendChild(d)
}






function changeImage(i,j){
    let a = Array.from(gallery[i].childNodes) 
    let b = Array.from(a[3].childNodes)
    for(let x=0; x < 3; x++) {
        if(x == j){      
            b[x].id = 'active';
            a[x].style.display= 'block';
           
        } else {
            b[x].id = 'inactive';
            a[x].style.display= 'none'
        }
    }

}

