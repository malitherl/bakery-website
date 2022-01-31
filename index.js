         //Scripting for the Image Carousel

            //Storing the images' file paths and alt texts in array allows for easy iteration over the elements 
            //We also can easily add more elements to the carousel if we wanted. 


            const container= document.getElementById("container");
            const scrollBar = document.createElement("DIV");
            scrollBar.setAttribute("id", "bar");
            

            let imagesSource = ['pexels-ali-rashidi-9419469.jpg', 
                        'pexels-anastasia-zhenina-4033592.jpg',
                            'pexels-stefan-prutsch-6449392.jpg' ]
            let imageCredits= ["Photo by Ali Rashidi from Pexels", 
                                "Photo by Stefan Prutsch from Pexels",
                                "Photo by Anastasia Zhenina from Pexels"];
            let imageCarousel =[];
            let current =0;
            
            for(let i =0; i < imagesSource.length ; i++) {
                let img= document.createElement("img");
                let dot= document.createElement("div");
                dot.dataset.id=i;
                dot.setAttribute("class", "images dot");
                img.setAttribute("class", "carousel");
                img.src=imagesSource[i];
                img.alt=imageCredits[i];
                imageCarousel.push(img);
                container.appendChild(img);
                scrollBar.appendChild(dot);
            }

            imageCarousel[current].style.display="block";

            function currentImage(i) {
                imageCarousel[current].style.display="none";
                imageCarousel[i].style.display= "block";
                current=i;
            }
            container.appendChild(scrollBar);
    
            Array.from(container.getElementsByClassName("images")).forEach(element => {
                  element.addEventListener("click", ()=> {
                    currentImage(element.dataset.id);
                  })
              })
             