// checkbox functions
// NOTE no be me go write new iterator or whatever up and dan.. 
//i just copy my previous code change values don't get confused by ogunHouse it is just used 
document.getElementById("filtCate").addEventListener('click', (e) => {
    e.preventDefault()
    check()
    document.querySelector('.filt-cate').style.display = "none";
    document.querySelector('#output').style.display = "none";
})

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
        document.getElementById("utput").style.display="block"
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
        document.getElementById("outpu").style.display="block"
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
        document.getElementById("outp").style.display="block"
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
        document.getElementById("out").style.display="block"
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
        document.getElementById("ou").style.display="block"
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
        document.getElementById("o").style.display="block"
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
        document.getElementById("O").style.display="block"
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
        document.getElementById("Out").style.display="block"
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
        document.getElementById("Ou").style.display="block"
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
        document.getElementById("S").style.display="block"
        document.getElementById('S').innerHTML = elemString;
    } else{
        document.getElementById('S').style.display="none"
    } 
}

// console.log(elemString);