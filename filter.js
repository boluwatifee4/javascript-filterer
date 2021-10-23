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
    document.getElementById('output').style.display = "block";
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
    document.getElementById('output').style.display = "block";
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
    document.getElementById('output').style.display = "block";
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
    document.getElementById('output').style.display = "block";
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
    document.getElementById('output').style.display = "block";
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
    document.getElementById('output').style.display = "block";
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
    document.getElementById('output').innerHTML = elemString;
    document.querySelector('.filt-list').style.display = "none";
    document.getElementById('output').style.display = "block";
})

