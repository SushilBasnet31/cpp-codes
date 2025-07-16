


// let str1 = "Sushil"
// let str2 = " Basnet"


// console.log(str1 + str2)   // yesle strings lai jodne kam garxa





//  button click garda color chnage hunxa

// let btn = document.querySelector("button")







// function change() {
    //     let val = "0123456789ABCDEF"
//     let hash = "#"
//     for (let i = 0; i < 6; i++) {
    //         hash = hash + val[Math.floor(Math.random()*16)]
    //     }
    
    
//     return hash
// }



// button ko bhitra ko text ko colour change garne
// btn.addEventListener("click" , function(){
//     btn.style.color = change()
//     btn.style.fontSize = "40px"
//     btn.style.padding = "15px"
//     btn.style.backgroundColor = change()
// })




    // // button ko color change hunxa
    // btn.addEventListener("click", function(){
//     btn.style.backgroundColor = change()

// })


// // body ko color change garna
// btn.addEventListener("click", function(){
    //     document.body.style.backgroundColor = change()
    
    // })

    
 // to change the  theme of a web
    
 let btn = document.querySelector("button")
    let val = 1
    
    function change(){
         ++ val
        let bg = "#000000"
        let bg1 = "#ffffff"
        if (val % 2 == 0){
            return bg
        }
        else {
            return bg1
        }
            
    }
    
    function change2(){
       
        let text =" #ffffff"
        let text1 = "#000000"
        if (val % 2 == 0){
            return text
        }
        else {
            return text1
        }
            
    }
    
    btn.addEventListener("click",function(){
         document.body.style.backgroundColor = change()
         document.body.style.color = change2()
         console.log(val)
    
    })
