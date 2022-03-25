const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./img/sad.png")
            pokeImage2("./img/sad.gif")
            tipo("undefined")
            tipo2("undefined")
            pokena("undefined")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let poken = pokeName;
            pokena(poken);
            console.log(poken);            
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
            let pokeImg2 = data.sprites.front_shiny;
            pokeImage2(pokeImg2);
            console.log(pokeImg2);
            let poketyp = data.types[0].type.name;
            tipo(poketyp)
            console.log(poketyp);
            if (data.types.length == 2) {
                console.log(data.types)
                let poketyp2 = data.types[1].type.name;
                tipo2(poketyp2)
                console.log(poketyp2);
            }else{
                tipo2("N/A");
            }            
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeImage2 = (url) => {
    const pokePhoto = document.getElementById("pokeImg2");
    pokePhoto.src = url;
}
const tipo = (url) => {
    const poketype = document.getElementById("typ");
    poketype.value = url;
}
const tipo2 = (url) => {
    const poketyp2 = document.getElementById("typ2");
    poketyp2.value = url;
}
const pokena = (poken) => {
    const pokenme = document.getElementById("nme");
    pokenme.value = poken;
}

const fetchdat = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data.stats);
            let elementos = [
               `${data.stats[0].stat.name.toUpperCase()}:${data.stats[0].base_stat},
                ${data.stats[1].stat.name.toUpperCase()}:${data.stats[1].base_stat},
                ${data.stats[3].stat.name.toUpperCase()}:${data.stats[3].base_stat},
                ${data.stats[4].stat.name.toUpperCase()}:${data.stats[4].base_stat},
                ${data.stats[5].stat.name.toUpperCase()}:${data.stats[5].base_stat}.`
            ];            
            document.getElementById("estadisticas").innerHTML = elementos;
        }else{
            const datos = "UNDEFINED";
            document.getElementById("estadisticas").innerHTML = datos;
        }
    });
}
const fetchmuv = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data.moves);
            let possision = 0;
            let dat = [""]
            do{
               for(possision; possision < data.moves.length; possision++){
                   dat += `${data.moves[possision].move.name.toUpperCase()}, `;                   
                }
            } while(possision < data.moves.length);
            document.getElementById("movimientos").innerHTML = dat;                                 
        }else{
            const movimiento = "UNDEFINED";
            document.getElementById("movimientos").innerHTML = movimiento;
        }
    });
}
