let houses = {
    cat: [
        { type: "1 Bedroom", location: "lagos", tiling: "not tiled", image: "payment-support-img.png" },
        { type: "Self-Contain", location: "oyo", tiling: "tiled", image: "payment-support-img.png" },
        { type: "1 Bedroom", location: "ondo", tiling: "tiled", image: "payment-support-img.png" },
        { type: "Room and Parlour", location: "ogun", tiling: "tiled", image: "payment-support-img.png" },
        { type: "Room", location: "osun", tiling: "tiled", image: "payment-support-img.png" },
        { type: "Duplex", location: "ekiti", tiling: "tiled", image: "payment-support-img.png" },
        { type: "Shop", location: "edo", tiling: "tiled", image: "payment-support-img.png" },
        { type: "Hall", location: "ogun", tiling: "tiled", image: "payment-support-img.png" },
        { type: "2 Bedroom", location: "ondo", tiling: "not tiled", image: "payment-support-img.png" },
        { type: "5 Bedroom", location: "ekiti", tiling: " not tiled", image: "payment-support-img.png" },
        { type: "Room", location: "oyo", tiling: "tiled", image: "payment-support-img.png" },
        {
            type: "4 Bedroom",
            location: "lagos",
            tiling: "not tiled", image: "payment-support-img.png"
        },
        {
            type: "4 Bedroom",
            location: "ondo",
            tiling: "tiled", image: "payment-support-img.png"
        },
    ]
}


let house = houses.cat
let show = "";
function outI() {
    for (let i of house) {
        show += `
      <div class="cards">
         <img src="${i.image}" alt="" class="h-img">
         <div class="prop">
         <p><b>Type:</b> ${i.type}</p>
    <p><b>Location:</b> ${i.location}</p>
    <p><b>Tiling:</b> ${i.tiling}</p>
         </div>
      </div>
      `;
    }
    //Outside the loop
    document.getElementById('output').innerHTML = show;
}

outI()

document.getElementById("lag").addEventListener('click', () => {

    let lagosHouse = house.filter(lag => lag.location === 'lagos');
    let elemString = ""
    for (lagosHouse of lagosHouse) {
        elemString += `
     <div class="cards">
     <img src="${lagosHouse.image}" alt="" class="h-img">
        <div class="prop">
            <p>Type: ${lagosHouse.type}</p>
            <p class="redLag">Location: ${lagosHouse.location}</p>
            <p>Tiling: ${lagosHouse.tiling}</p>
        </div>
     </div>
`;
    }
    document.getElementById('output').innerHTML = elemString;
    document.querySelector('.filt-list').style.display = "none";
})


document.getElementById("oyo").addEventListener('click', () => {
   
    let oyoHouse = house.filter(oyo => oyo.location === 'oyo');
    let elemString = ""
    for (oyoHouse of oyoHouse) {
        elemString += `
 <div class="cards">
 <div class="cards">
 <img src="${oyoHouse.image}" alt="" class="h-img">
    <div class="prop">
        <p>Type: ${oyoHouse.type}</p>
        <p class="redLag">Location: ${oyoHouse.location}</p>
        <p>Tiling: ${oyoHouse.tiling}</p>
    </div>
 </div>
`;
    }
    document.getElementById('output').innerHTML = elemString;
    document.querySelector('.filt-list').style.display = "none";
})


document.getElementById("ondo").addEventListener('click', () => {
   
    let ondoHouse = house.filter(ondo => ondo.location === 'ondo');
    let elemString = ""
    for (ondoHouse of ondoHouse) {
        elemString += `
        <div class="cards">
        <img src="${ondoHouse.image}" alt="" class="h-img">
           <div class="prop">
               <p>Type: ${ondoHouse.type}</p>
               <p class="redLag">Location: ${ondoHouse.location}</p>
               <p>Tiling: ${ondoHouse.tiling}</p>
           </div>
        </div>
`;
    }
    document.getElementById('output').innerHTML = elemString;
    document.querySelector('.filt-list').style.display = "none";
})


document.getElementById("osun").addEventListener('click', () => {
   
    let osunHouse = house.filter(osun => osun.location === 'osun');
    let elemString = ""
    for (osunHouse of osunHouse) {
        elemString += `
        <div class="cards">
        <img src="${osunHouse.image}" alt="" class="h-img">
           <div class="prop">
               <p>Type: ${osunHouse.type}</p>
               <p class="redLag">Location: ${osunHouse.location}</p>
               <p>Tiling: ${osunHouse.tiling}</p>
           </div>
        </div>
`;
    }
    document.getElementById('output').innerHTML = elemString;
    document.querySelector('.filt-list').style.display = "none";
})


document.getElementById("ekiti").addEventListener('click', () => {
   
    let ekitiHouse = house.filter(ekiti => ekiti.location === 'ekiti');
    let elemString = ""
    for (ekitiHouse of ekitiHouse) {
        elemString += `
        <div class="cards">
        <img src="${ekitiHouse.image}" alt="" class="h-img">
           <div class="prop">
               <p>Type: ${ekitiHouse.type}</p>
               <p class="redLag">Location: ${ekitiHouse.location}</p>
               <p>Tiling: ${ekitiHouse.tiling}</p>
           </div>
        </div>
`;
    }
    document.getElementById('output').innerHTML = elemString;
    document.querySelector('.filt-list').style.display = "none";
})


document.getElementById("edo").addEventListener('click', () => {
   
    let edoHouse = house.filter(edo => edo.location === 'edo');
    let elemString = ""
    for (edoHouse of edoHouse) {
        elemString += `
        <div class="cards">
        <img src="${edoHouse.image}" alt="" class="h-img">
           <div class="prop">
               <p>Type: ${edoHouse.type}</p>
               <p class="redLag">Location: ${edoHouse.location}</p>
               <p>Tiling: ${edoHouse.tiling}</p>
           </div>
        </div>
`;
    }
    document.getElementById('output').innerHTML = elemString;
    document.querySelector('.filt-list').style.display = "none";
})

document.getElementById("ogun").addEventListener('click', () => {
   
    let ogunHouse = house.filter(ogun => ogun.location === 'ogun');
    let elemString = ""
    for (ogunHouse of ogunHouse) {
        elemString += `
        <div class="cards">
        <img src="${ogunHouse.image}" alt="" class="h-img">
           <div class="prop">
               <p>Type: ${ogunHouse.type}</p>
               <p class="redLag">Location: ${ogunHouse.location}</p>
               <p>Tiling: ${ogunHouse.tiling}</p>
           </div>
        </div>
`;
    }
    document.getElementById('utput').innerHTML = elemString;
    document.querySelector('.filt-list').style.display = "none";
})

// checkbox functions
// NOTE no be me go write new iterator or whatever up and dan.. 
//i just copy my previous code change values don't get confused by ogunHouse it is just used 
document.getElementById("filtCate").addEventListener('click', () => {
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
        document.getElementById('S').innerHTML = elemString;
    } else{
        document.getElementById('S').style.display="none"
    } 
    document.querySelector('.filt-cate').style.display = "none";
    document.querySelector('#output').style.display = "none";
})



// console.log(elemString);