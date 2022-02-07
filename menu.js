
const container = document.getElementById("menu-container");
//We change these to img urls pulled from a folder 
let images = [[1,2,3], [4,5,6], [7,8,9]];
let imageURL = [['/menu pictures/pexels-daria-shevtsova-1580464.jpg', '/menu pictures/pexels-foodie-factor-539451.jpg', '/menu pictures/pexels-pixabay-434258.jpg'],
                ['/menu pictures/pexels-denys-gromov-4669304.jpg', '/menu pictures/pexels-sebastian-coman-photography-3606800.jpg', '/menu pictures/pexels-sebastian-coman-photography-3791089.jpg'],
                ['/menu pictures/pexels-suzy-hazelwood-1126359.jpg',  '/menu pictures/pexels-quang-nguyen-vinh-2144112.jpg','/menu pictures/pexels-pixabay-45202.jpg'  ]]
let imageCredits = [["Photo by Daria Shevtsova from Pexels", "Photo by Foodie Factor from Pexels", "Photo by Pixabay from Pexels"],
                    ["Photo by Denys Gromov from Pexels", "Photo by Sebastian Coman Photography from Pexels", "Photo by Sebastian Coman Photography from Pexels"],
                    ["Photo by Suzy Hazelwood from Pexels", "Photo by Quang Nguyen Vinh from Pexels", "Photo by Pixabey from Pexels"]]
let gallery = Array.from(container.getElementsByClassName("gallery"));

for(let i= 0; i < imageURL.length ; i++){
    let d = document.createElement("div")
    d.setAttribute("class", "d")
    let dots = [];
    for(let j=0; j< imageURL[i].length; j++){
        //To begin working towards this being an image gallery, we need to these elements appearing a class name that specifies their height and width 
        //another factor to consider is that we're going to need to make a background image class for these divs
        let menuItem = document.createElement("img")
        menuItem.setAttribute("class", "menu-image")
        menuItem.src = imageURL[i][j];
        menuItem.alt = imageCredits[i][j];
        let dot= document.createElement("div");
        dot.setAttribute("class", "dots")
        dot.addEventListener("click", ()=> {
            changeImage(i, j);
        })
        dots.push(dot);
        menuItem.innerText = images[i][j];
        if(j == 0){
            menuItem.style.display="block";
            dot.id = 'active';
        } else {
            menuItem.style.display ="none"
            dot.id = "inactive"
        }
        gallery[i].appendChild(menuItem)
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

