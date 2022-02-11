//Variable Declarations 
const container = document.getElementById("menu-container");
let imageURL = [['./menu pictures/pexels-daria-shevtsova-1580464.jpg', '/menu pictures/pexels-foodie-factor-539451.jpg', '/menu pictures/pexels-pixabay-434258.jpg'],
                ['./menu pictures/pexels-denys-gromov-4669304.jpg', '/menu pictures/pexels-sebastian-coman-photography-3606800.jpg', '/menu pictures/pexels-sebastian-coman-photography-3791089.jpg'],
                ['./menu pictures/pexels-suzy-hazelwood-1126359.jpg',  '/menu pictures/pexels-quang-nguyen-vinh-2144112.jpg','/menu pictures/pexels-pixabay-45202.jpg'  ]]
let imageCredits = [["Photo by Daria Shevtsova from Pexels", "Photo by Foodie Factor from Pexels", "Photo by Pixabay from Pexels"],
                    ["Photo by Denys Gromov from Pexels", "Photo by Sebastian Coman Photography from Pexels", "Photo by Sebastian Coman Photography from Pexels"],
                    ["Photo by Suzy Hazelwood from Pexels", "Photo by Quang Nguyen Vinh from Pexels", "Photo by Pixabey from Pexels"]]
let gallery = Array.from(container.getElementsByClassName("gallery"));


//These loops append the images to their respective DIVs, 
//and the navigation is created alongside this process. 

for(let i= 0; i < imageURL.length ; i++){
    let d = document.createElement("div")
    d.setAttribute("class", "d")
    let dots = [];
    for(let j=0; j< imageURL[i].length; j++){
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

