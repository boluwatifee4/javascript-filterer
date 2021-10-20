let houses = {
    cat: [
        { type: "1 Bedroom", location: "lagos", tiling: "not tiled" },
        { type: "Self-Contain", location: "oyo", tiling: "tiled" },
        { type: "1 Bedroom", location: "ondo", tiling: "tiled" },
        { type: "Room and Parlour", location: "ogun", tiling: "tiled" },
        { type: "Room", location: "osun", tiling: "tiled" },
        { type: "Duplex", location: "ekiti", tiling: "tiled" },
        { type: "Shop", location: "edo", tiling: "tiled" },
        { type: "Hall", location: "ogun", tiling: "tiled" },
        { type: "2 Bedroom", location: "ondo", tiling: "not tiled" },
        { type: "5 Bedroom", location: "ekiti", tiling: " not tiled" },
        { type: "Room", location: "oyo", tiling: "tiled" },
        {
            type: "4 Bedroom",
            location: "lagos",
            tiling: "not tiled"
        },
        {
            type: "4 Bedroom",
            location: "ondo",
            tiling: "tiled"
        },
    ]
}

//First corrections
let house = houses.cat
let show = "";
function outI() {
    for (let i of house) {
        show += `
      <div class="cards">
          <h3>Type: ${i.type}</h6>
          <p>Location: ${i.location}</p>
          <p>Tiling: ${i.tiling}</p>
      </div>
      `;
    }
    //Outside the loop
    document.getElementById('output').innerHTML = show;
}

outI()

document.getElementById("lag").addEventListener('click', () => {
    //You need some corrections from this place
    let lagosHouse = house.filter(lag => lag.location === 'lagos');
    let elemString = ""
    for (lagosHouse of lagosHouse) {
        elemString += `
 <div class="cards">
          <h3>Type: ${lagosHouse.type}</h6>
          <p class="redLag">Location: ${lagosHouse.location}</p>
          <p>Tiling: ${lagosHouse.tiling}</p>
      </div>
`;
    }
    document.getElementById('output').innerHTML = elemString;
    document.querySelector('.filt-list').style.display = "none";
})


document.getElementById("oyo").addEventListener('click', () => {
    //You need some corrections from this place
    let oyoHouse = house.filter(oyo => oyo.location === 'oyo');
    let elemString = ""
    for (oyoHouse of oyoHouse) {
        elemString += `
 <div class="cards">
          <h3>Type: ${oyoHouse.type}</h6>
          <p class="redLag">Location: ${oyoHouse.location}</p>
          <p>Tiling: ${oyoHouse.tiling}</p>
      </div>
`;
    }
    document.getElementById('output').innerHTML = elemString;
    document.querySelector('.filt-list').style.display = "none";
})


document.getElementById("ondo").addEventListener('click', () => {
    //You need some corrections from this place
    let ondoHouse = house.filter(ondo => ondo.location === 'ondo');
    let elemString = ""
    for (ondoHouse of ondoHouse) {
        elemString += `
 <div class="cards">
          <h3>Type: ${ondoHouse.type}</h6>
          <p class="redLag">Location: ${ondoHouse.location}</p>
          <p>Tiling: ${ondoHouse.tiling}</p>
      </div>
`;
    }
    document.getElementById('output').innerHTML = elemString;
    document.querySelector('.filt-list').style.display = "none";
})


document.getElementById("osun").addEventListener('click', () => {
    //You need some corrections from this place
    let osunHouse = house.filter(osun => osun.location === 'osun');
    let elemString = ""
    for (osunHouse of osunHouse) {
        elemString += `
 <div class="cards">
          <h3>Type: ${osunHouse.type}</h6>
          <p class="redLag">Location: ${osunHouse.location}</p>
          <p>Tiling: ${osunHouse.tiling}</p>
      </div>
`;
    }
    document.getElementById('output').innerHTML = elemString;
    document.querySelector('.filt-list').style.display = "none";
})


document.getElementById("ekiti").addEventListener('click', () => {
    //You need some corrections from this place
    let ekitiHouse = house.filter(ekiti => ekiti.location === 'ekiti');
    let elemString = ""
    for (ekitiHouse of ekitiHouse) {
        elemString += `
 <div class="cards">
          <h3>Type: ${ekitiHouse.type}</h6>
          <p class="redLag">Location: ${ekitiHouse.location}</p>
          <p>Tiling: ${ekitiHouse.tiling}</p>
      </div>
`;
    }
    document.getElementById('output').innerHTML = elemString;
    document.querySelector('.filt-list').style.display = "none";
})


document.getElementById("edo").addEventListener('click', () => {
    //You need some corrections from this place
    let edoHouse = house.filter(edo => edo.location === 'edo');
    let elemString = ""
    for (edoHouse of edoHouse) {
        elemString += `
 <div class="cards">
          <h3>Type: ${edoHouse.type}</h6>
          <p class="redLag">Location: ${edoHouse.location}</p>
          <p>Tiling: ${edoHouse.tiling}</p>
      </div>
`;
    }
    document.getElementById('output').innerHTML = elemString;
    document.querySelector('.filt-list').style.display = "none";
})

document.getElementById("ogun").addEventListener('click', () => {
    //You need some corrections from this place
    let ogunHouse = house.filter(ogun => ogun.location === 'ogun');
    let elemString = ""
    for (ogunHouse of ogunHouse) {
        elemString += `
 <div class="cards">
          <h3>Type: ${ogunHouse.type}</h6>
          <p class="redLag">Location: ${ogunHouse.location}</p>
          <p>Tiling: ${ogunHouse.tiling}</p>
      </div>
`;
    }
    document.getElementById('output').innerHTML = elemString;
    document.querySelector('.filt-list').style.display = "none";
})


document.getElementById("filtCate").addEventListener('click', () => {
    if (document.getElementById('tile').checked) {
        let ogunHouse = house.filter(ogun => ogun.tiling === 'tiled');
        let elemString = ""
        for (ogunHouse of ogunHouse) {
            elemString += `
<div class="cards">
      <h3>Type: ${ogunHouse.type}</h6>
      <p>Location: ${ogunHouse.location}</p>
      <p class="redLag">Tiling: ${ogunHouse.tiling}</p>
  </div>
`;
        }
        document.getElementById('output').innerHTML = elemString;
    } if (document.getElementById('type').checked) {
        let ogunHouse = house.filter(ogun => ogun.type === "1 Bedroom");
        let elemString = ""
        for (ogunHouse of ogunHouse) {
            elemString += `
<div class="cards">
      <h3 class="redLag">Type: ${ogunHouse.type}</h6>
      <p>Location: ${ogunHouse.location}</p>
      <p>Tiling: ${ogunHouse.tiling}</p>
  </div>
`;
        }
        document.getElementById('outpu').innerHTML = elemString;

    } if (document.getElementById('type2').checked) {
        let ogunHouse = house.filter(ogun => ogun.type === "2 Bedroom");
        let elemString = ""
        for (ogunHouse of ogunHouse) {
            elemString += `
<div class="cards">
      <h3 class="redLag">Type: ${ogunHouse.type}</h6>
      <p>Location: ${ogunHouse.location}</p>
      <p>Tiling: ${ogunHouse.tiling}</p>
  </div>
`;
        }
        document.getElementById('outp').innerHTML = elemString;
    } if (document.getElementById('typeR').checked) {
        let ogunHouse = house.filter(ogun => ogun.type === "Room");
        let elemString = ""
        for (ogunHouse of ogunHouse) {
            elemString += `
<div class="cards">
      <h3 class="redLag">Type: ${ogunHouse.type}</h6>
      <p>Location: ${ogunHouse.location}</p>
      <p>Tiling: ${ogunHouse.tiling}</p>
  </div>
`;
        }
        document.getElementById('out').innerHTML = elemString;
    } if (document.getElementById('typeD').checked) {
        let ogunHouse = house.filter(ogun => ogun.type === "Duplex");
        let elemString = ""
        for (ogunHouse of ogunHouse) {
            elemString += `
<div class="cards">
      <h3 class="redLag">Type: ${ogunHouse.type}</h6>
      <p>Location: ${ogunHouse.location}</p>
      <p>Tiling: ${ogunHouse.tiling}</p>
  </div>
`;
        }
        document.getElementById('ou').innerHTML = elemString;
    } if (document.getElementById('typeH').checked) {
        let ogunHouse = house.filter(ogun => ogun.type === "Hall");
        let elemString = ""
        for (ogunHouse of ogunHouse) {
            elemString += `
<div class="cards">
      <h3 class="redLag">Type: ${ogunHouse.type}</h6>
      <p>Location: ${ogunHouse.location}</p>
      <p>Tiling: ${ogunHouse.tiling}</p>
  </div>
`;
        }
        document.getElementById('o').innerHTML = elemString;
    }  if (document.getElementById('typeS').checked) {
        let ogunHouse = house.filter(ogun => ogun.type === "Shop");
        let elemString = ""
        for (ogunHouse of ogunHouse) {
            elemString += `
<div class="cards">
      <h3 class="redLag">Type: ${ogunHouse.type}</h6>
      <p>Location: ${ogunHouse.location}</p>
      <p>Tiling: ${ogunHouse.tiling}</p>
  </div>
`;
        }
        document.getElementById('O').innerHTML = elemString;
    }   if (document.getElementById('type4').checked) {
        let ogunHouse = house.filter(ogun => ogun.type === "4 Bedroom");
        let elemString = ""
        for (ogunHouse of ogunHouse) {
            elemString += `
<div class="cards">
      <h3 class="redLag">Type: ${ogunHouse.type}</h6>
      <p>Location: ${ogunHouse.location}</p>
      <p>Tiling: ${ogunHouse.tiling}</p>
  </div>
`;
        }
        document.getElementById('Out').innerHTML = elemString;
    }      if (document.getElementById('typeSC').checked) {
        let ogunHouse = house.filter(ogun => ogun.type === "Self-Contain");
        let elemString = ""
        for (ogunHouse of ogunHouse) {
            elemString += `
<div class="cards">
      <h3 class="redLag">Type: ${ogunHouse.type}</h6>
      <p>Location: ${ogunHouse.location}</p>
      <p>Tiling: ${ogunHouse.tiling}</p>
  </div>
`;
        }
        document.getElementById('Ou').innerHTML = elemString;
    }   if (document.getElementById('Wtile').checked) {
        let ogunHouse = house.filter(ogun => ogun.tiling ==="not tiled");
        let elemString = ""
        for (ogunHouse of ogunHouse) {
            elemString += `
<div class="cards">
      <h3>Type: ${ogunHouse.type}</h6>
      <p>Location: ${ogunHouse.location}</p>
      <p class="redLag">Tiling: ${ogunHouse.tiling}</p>
  </div>
`;
        }
        document.getElementById('S').innerHTML = elemString;
    }    
    document.querySelector('.filt-cate').style.display = "none";
})  



// console.log(elemString);