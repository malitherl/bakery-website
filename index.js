         //Scripting for the Image Carousel

            //Storing the images' file paths and alt texts in array allows for easy iteration over the elements 
            //We also can easily add more elements to the carousel if we wanted. 


            const container= document.getElementById("container");
            const scrollBar = document.createElement("DIV");
            scrollBar.setAttribute("id", "bar");

            //file paths and attributions

            let imagesSource = ['pexels-tom-balabaud-1579739.jpg', 
                        'pexels-creative-vix-370984.jpg',
                            'pexels-kaboompics-com-6267.jpg' ]
            let imageCredits= ["Photo by tom balabaud from Pexels", 
                                "Photo by Creative Vix from Pexels",
                                "Photo by Kaboompics .com from Pexels"];
            let imageCarousel =[];
            let current =0;
            
            //For each file path given, we create a new image element. 
            //We also create another 'dot' for the navigation at the bottom of the wheel and append the dot to the wheel for each iteration.
            //Giving the dots data-attributes gives the currentImage(prop) function below a means of transitioning between images. 
            
            for(let i =0; i < imagesSource.length ; i++) {
                let img= document.createElement("img");
                img.dataset.id=i;
                img.setAttribute("class", "carousel");
                img.src=imagesSource[i];
                img.alt=imageCredits[i];
                imageCarousel.push(img);
                container.appendChild(img);
            }

            document.getElementById("back").addEventListener("click", ()=> {
                if(current-1 < 0){
                    currentImage(imageCarousel.length-1);
                } else {
                    currentImage(current-1)
                }
            })

            document.getElementById("forward").addEventListener("click", ()=> {
                if(current+1 == imageCarousel.length){
                    currentImage(0);
                } else {
                    currentImage(current+1)
                }
            })


            imageCarousel[0].style.display="flex";

            function currentImage(i) {
                imageCarousel[current].style.display="none";

                imageCarousel[i].style.display= "flex";
                current=i;
            }

    
            
           
             