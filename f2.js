// checkbox submit functions
document.getElementById("filtCate").addEventListener('click', (e) => {
    e.preventDefault()
    check()
    document.querySelector('.filt-cate').style.display = "none";
    document.querySelector('#output').style.display = "none";
})


// event listener to filter out the selected categories by user
// tooo lazy to start assign new variable name NOTE ogunHouse in this function has no
// connection with previous functions 
function check(){
    if (document.getElementById('tile').checked) {
        let ogunHouse = house.filter(ogun => ogun.tiling === 'tiled');
        let elemString = ""
        for (ogunHouse of ogunHouse) {
            elemString += `
            <div class="cards">
            <img src="${ogunHouse.image}" alt="" class="h-img">
               <div class="prop">
                   <p>Type: ${ogunHouse.type}</p>
                   <p>Location: ${ogunHouse.location}</p>
                   <p class="redLag">Tiling: ${ogunHouse.tiling}</p>
               </div>
            </div>
`;
        }
        document.getElementById('utput').innerHTML = elemString;
        document.getElementById("utput").style.display="flex"
    } else{
        document.getElementById("utput").style.display="none"
    } if (document.getElementById('type').checked) {
        let ogunHouse = house.filter(ogun => ogun.type === "1 Bedroom");
        let elemString = ""
        for (ogunHouse of ogunHouse) {
            elemString += `
            <div class="cards">
            <img src="${ogunHouse.image}" alt="" class="h-img">
               <div class="prop">
                   <p class="redLag">Type: ${ogunHouse.type}</p>
                   <p>Location: ${ogunHouse.location}</p>
                   <p>Tiling: ${ogunHouse.tiling}</p>
               </div>
            </div>
`;
        }
        document.getElementById("outpu").style.display="flex"
        document.getElementById('outpu').innerHTML = elemString;

    }  else{
        document.getElementById("outpu").style.display="none"
    } 
    if (document.getElementById('type2').checked) {
        let ogunHouse = house.filter(ogun => ogun.type === "2 Bedroom");
        let elemString = ""
        for (ogunHouse of ogunHouse) {
            elemString += `
            <div class="cards">
            <img src="${ogunHouse.image}" alt="" class="h-img">
               <div class="prop">
                   <p class="redLag">Type: ${ogunHouse.type}</p>
                   <p>Location: ${ogunHouse.location}</p>
                   <p>Tiling: ${ogunHouse.tiling}</p>
               </div>
            </div>
`;
        }
        document.getElementById('outp').innerHTML = elemString;
        document.getElementById("outp").style.display="flex"
    } else{
        document.getElementById("outp").style.display="none"
    }  
    if (document.getElementById('typeR').checked) {
        let ogunHouse = house.filter(ogun => ogun.type === "Room");
        let elemString = ""
        for (ogunHouse of ogunHouse) {
            elemString += `
            <div class="cards">
            <img src="${ogunHouse.image}" alt="" class="h-img">
               <div class="prop">
                   <p class="redLag">Type: ${ogunHouse.type}</p>
                   <p>Location: ${ogunHouse.location}</p>
                   <p>Tiling: ${ogunHouse.tiling}</p>
               </div>
            </div>
`;
        }
        document.getElementById('out').innerHTML = elemString;
        document.getElementById("out").style.display="flex"
    } else{
        document.getElementById('out').style.display="none"
    } 
     if (document.getElementById('typeD').checked) {
        let ogunHouse = house.filter(ogun => ogun.type === "Duplex");
        let elemString = ""
        for (ogunHouse of ogunHouse) {
            elemString += `
            <div class="cards">
            <img src="${ogunHouse.image}" alt="" class="h-img">
               <div class="prop">
                   <p class="redLag">Type: ${ogunHouse.type}</p>
                   <p>Location: ${ogunHouse.location}</p>
                   <p>Tiling: ${ogunHouse.tiling}</p>
               </div>
            </div>
`;
        }
        document.getElementById("ou").style.display="flex"
        document.getElementById('ou').innerHTML = elemString;
    } else{
        document.getElementById('ou').style.display="none"
    } 
     if (document.getElementById('typeH').checked) {
        let ogunHouse = house.filter(ogun => ogun.type === "Hall");
        let elemString = ""
        for (ogunHouse of ogunHouse) {
            elemString += `
            <div class="cards">
            <img src="${ogunHouse.image}" alt="" class="h-img">
               <div class="prop">
                   <p class="redLag">Type: ${ogunHouse.type}</p>
                   <p>Location: ${ogunHouse.location}</p>
                   <p>Tiling: ${ogunHouse.tiling}</p>
               </div>
            </div>
`;
        }
        document.getElementById('o').innerHTML = elemString;
        document.getElementById("o").style.display="flex"
    } else{
        document.getElementById('o').style.display="none"
    }  
    if (document.getElementById('typeS').checked) {
        let ogunHouse = house.filter(ogun => ogun.type === "Shop");
        let elemString = ""
        for (ogunHouse of ogunHouse) {
            elemString += `
            <div class="cards">
            <img src="${ogunHouse.image}" alt="" class="h-img">
               <div class="prop">
                   <p class="redLag">Type: ${ogunHouse.type}</p>
                   <p>Location: ${ogunHouse.location}</p>
                   <p>Tiling: ${ogunHouse.tiling}</p>
               </div>
            </div>
`;
        }
        document.getElementById('O').innerHTML = elemString;
        document.getElementById("O").style.display="flex"
    } else{
        document.getElementById('O').style.display="none"
    } 
     if (document.getElementById('type4').checked) {
        let ogunHouse = house.filter(ogun => ogun.type === "4 Bedroom");
        let elemString = ""
        for (ogunHouse of ogunHouse) {
            elemString += `
            <div class="cards">
            <img src="${ogunHouse.image}" alt="" class="h-img">
               <div class="prop">
                   <p class="redLag">Type: ${ogunHouse.type}</p>
                   <p>Location: ${ogunHouse.location}</p>
                   <p>Tiling: ${ogunHouse.tiling}</p>
               </div>
            </div>
`;
        }
        document.getElementById('Out').innerHTML = elemString;
        document.getElementById("Out").style.display="flex"
    } else{
        document.getElementById('Out').style.display="none"
    } 
     if (document.getElementById('typeSC').checked) {
        let ogunHouse = house.filter(ogun => ogun.type === "Self-Contain");
        let elemString = ""
        for (ogunHouse of ogunHouse) {
            elemString += `
            <div class="cards">
            <img src="${ogunHouse.image}" alt="" class="h-img">
               <div class="prop">
                   <p class="redLag">Type: ${ogunHouse.type}</p>
                   <p>Location: ${ogunHouse.location}</p>
                   <p>Tiling: ${ogunHouse.tiling}</p>
               </div>
            </div>
`;
        }
        document.getElementById('Ou').innerHTML = elemString;
        document.getElementById("Ou").style.display="flex"
    } else{
        document.getElementById('Ou').style.display="none"
    } 
     if (document.getElementById('Wtile').checked) {
        let ogunHouse = house.filter(ogun => ogun.tiling === "not tiled");
        let elemString = ""
        for (ogunHouse of ogunHouse) {
            elemString += `
 <div class="cards">
            <img src="${ogunHouse.image}" alt="" class="h-img">
               <div class="prop">
                   <p>Type: ${ogunHouse.type}</p>
                   <p >Location: ${ogunHouse.location}</p>
                   <p class="redLag">Tiling: ${ogunHouse.tiling}</p>
               </div>
            </div>
`;
        }
        document.getElementById("S").style.display="flex"
        document.getElementById('S').innerHTML = elemString;
    } else{
        document.getElementById('S').style.display="none"
    } 
}

// console.log(elemString);