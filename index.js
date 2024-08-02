let pkmnData = [];
let select = document.getElementById("name");

//Importing data from json
async function getData() {
    let response = await fetch("./data.json");

    let jsonResult = await response.json();

    return jsonResult;
}

//filling option select with data
document.addEventListener("DOMContentLoaded", async () => {

    pkmnData = await getData();

    //filling option select with data
    for (let i = 0; i < pkmnData.PKMN.length; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.text = pkmnData.PKMN[i].name;
        select.appendChild(option);
    }

});

//changing ui elements based on pokemon selected
select.addEventListener("change", function() {
    document.getElementById("pkmnName").innerHTML = pkmnData.PKMN[select.value].name;
    document.getElementById("jpName").innerHTML = pkmnData.PKMN[select.value].jp;
    document.getElementById("natDex").innerHTML = pkmnData.PKMN[select.value].nationalDex;
    document.getElementById("category").innerHTML = "The " + pkmnData.PKMN[select.value].category;
    document.getElementById("pkmnImg").src = "assets/images/0" + pkmnData.PKMN[select.value].nationalDex + " " + pkmnData.PKMN[select.value].name + ".png";
    document.getElementById("height").innerHTML = pkmnData.PKMN[select.value].height + "m";
    document.getElementById("mass").innerHTML = pkmnData.PKMN[select.value].mass + "kg";
    document.getElementById("ability1").innerHTML = pkmnData.PKMN[select.value].ability[0];
    document.getElementById("ability2").innerHTML = pkmnData.PKMN[select.value].ability[1];
    document.getElementById("abilityH").innerHTML = pkmnData.PKMN[select.value].hiddenAbility;
    document.getElementById("typeSymbol").src = "assets/types/" + pkmnData.PKMN[select.value].type[0] + ".png"

    document.getElementById("hp").innerHTML = pkmnData.PKMN[select.value].stats[0];
    document.getElementById("atk").innerHTML = pkmnData.PKMN[select.value].stats[1];
    document.getElementById("def").innerHTML = pkmnData.PKMN[select.value].stats[2];
    document.getElementById("spAtk").innerHTML = pkmnData.PKMN[select.value].stats[3];
    document.getElementById("spDef").innerHTML = pkmnData.PKMN[select.value].stats[4];
    document.getElementById("spd").innerHTML = pkmnData.PKMN[select.value].stats[5];
    document.getElementById("total").innerHTML = pkmnData.PKMN[select.value].stats[0] + pkmnData.PKMN[select.value].stats[1] + pkmnData.PKMN[select.value].stats[2] + pkmnData.PKMN[select.value].stats[3] + pkmnData.PKMN[select.value].stats[4] + pkmnData.PKMN[select.value].stats[5];;

    document.getElementById("hpBar").style.width = 1.2 * pkmnData.PKMN[select.value].stats[0] + "px";
    document.getElementById("atkBar").style.width = 1.2 * pkmnData.PKMN[select.value].stats[1] + "px";
    document.getElementById("defBar").style.width = 1.2 * pkmnData.PKMN[select.value].stats[2] + "px";
    document.getElementById("spAtkBar").style.width = 1.2 * pkmnData.PKMN[select.value].stats[3] + "px";
    document.getElementById("spDefBar").style.width = 1.2 * pkmnData.PKMN[select.value].stats[4] + "px";
    document.getElementById("spdBar").style.width = 1.2 * pkmnData.PKMN[select.value].stats[5] + "px";

    document.getElementById("type1").innerHTML = pkmnData.PKMN[select.value].type[0];
    document.getElementById("type2").innerHTML = pkmnData.PKMN[select.value].type[1];

    if (pkmnData.PKMN[select.value].type[1] == undefined) {
        document.getElementById("type2Block").style.display = "none";
    } else {
        type2Block.style.display = "inline";
    }
    
    if (pkmnData.PKMN[select.value].ability[1] == undefined) {
        document.getElementById("ability2").style.display = "none";
        document.getElementById("abilityDiv1").style.display = "none";
    } else {
        ability2.style.display = "inline";
        abilityDiv1.style.display = "inline";
    }
    if (pkmnData.PKMN[select.value].hiddenAbility == null) {
        document.getElementById("abilityH").style.display = "none";
        document.getElementById("abilityDiv2").style.display = "none";
    } else {
        abilityH.style.display = "inline";
        abilityDiv2.style.display = "inline";
    }
    
    switch (pkmnData.PKMN[select.value].type[0]) {
        case "Normal":
            document.documentElement.style.setProperty("--type1", "rgb(168, 168, 120)");
            break;
        case "Fighting":
            document.documentElement.style.setProperty("--type1", "rgb(192, 48, 40)");
            break;
        case "Flying":
            document.documentElement.style.setProperty("--type1", "rgb(168, 144, 240)");
            break;
        case "Poison":
            document.documentElement.style.setProperty("--type1", "rgb(160, 64, 160)");
            break;
        case "Ground":
            document.documentElement.style.setProperty("--type1", "rgb(225, 190, 103)");
            break;
        case "Rock":
            document.documentElement.style.setProperty("--type1", "rgb(184, 160, 56)");
            break;
        case "Bug":
            document.documentElement.style.setProperty("--type1", "rgb(168, 184, 32)");
            break;
        case "Ghost":
            document.documentElement.style.setProperty("--type1", "rgb(112, 88, 152)");
            break;
        case "Steel":
            document.documentElement.style.setProperty("--type1", "rgb(184, 184, 208)");
            break;
        case "Fire":
            document.documentElement.style.setProperty("--type1", "rgb(240, 128, 48)");
            break;
        case "Water":
            document.documentElement.style.setProperty("--type1", "rgb(104, 144, 240)");
            break;
        case "Grass":
            document.documentElement.style.setProperty("--type1", "rgb(120, 200, 80)");
            break;
        case "Electric":
            document.documentElement.style.setProperty("--type1", "rgb(248, 207, 42)");
            break;
        case "Psychic":
            document.documentElement.style.setProperty("--type1", "rgb(255, 86, 138)");
            break;
        case "Ice":
            document.documentElement.style.setProperty("--type1", "rgb(152, 216, 216)");
            break;
        case "Dragon":
            document.documentElement.style.setProperty("--type1", "rgb(114, 56, 253)");
            break;
        case "Dark":
            document.documentElement.style.setProperty("--type1", "rgb(112, 88, 72)");
            break;
        case "Fairy":
            document.documentElement.style.setProperty("--type1", "rgb(247, 103, 247)");
            break;
    }
    switch (pkmnData.PKMN[select.value].type[1]) {
        case "Normal":
            document.documentElement.style.setProperty("--type2", "rgb(168, 168, 120)");
            break;
        case "Fighting":
            document.documentElement.style.setProperty("--type2", "rgb(192, 48, 40)");
            break;
        case "Flying":
            document.documentElement.style.setProperty("--type2", "rgb(168, 144, 240)");
            break;
        case "Poison":
            document.documentElement.style.setProperty("--type2", "rgb(160, 64, 160)");
            break;
        case "Ground":
            document.documentElement.style.setProperty("--type2", "rgb(225, 190, 103)");
            break;
        case "Rock":
            document.documentElement.style.setProperty("--type2", "rgb(184, 160, 56)");
            break;
        case "Bug":
            document.documentElement.style.setProperty("--type2", "rgb(168, 184, 32)");
            break;
        case "Ghost":
            document.documentElement.style.setProperty("--type2", "rgb(112, 88, 152)");
            break;
        case "Steel":
            document.documentElement.style.setProperty("--type2", "rgb(184, 184, 208)");
            break;
        case "Fire":
            document.documentElement.style.setProperty("--type2", "rgb(240, 128, 48)");
            break;
        case "Water":
            document.documentElement.style.setProperty("--type2", "rgb(104, 144, 240)");
            break;
        case "Grass":
            document.documentElement.style.setProperty("--type2", "rgb(120, 200, 80)");
            break;
        case "Electric":
            document.documentElement.style.setProperty("--type2", "rgb(248, 207, 42)");
            break;
        case "Psychic":
            document.documentElement.style.setProperty("--type2", "rgb(255, 86, 138)");
            break;
        case "Ice":
            document.documentElement.style.setProperty("--type2", "rgb(152, 216, 216)");
            break;
        case "Dragon":
            document.documentElement.style.setProperty("--type2", "rgb(114, 56, 253)");
            break;
        case "Dark":
            document.documentElement.style.setProperty("--type2", "rgb(112, 88, 72)");
            break;
        case "Fairy":
            document.documentElement.style.setProperty("--type1", "rgb(247, 103, 247)");
            break;
    }

    switch (true) {
        case pkmnData.PKMN[select.value].stats[0] < 50:
            document.getElementById("hpBar").style.backgroundColor = "rgb(160, 28, 4)";
            break;

        case pkmnData.PKMN[select.value].stats[0] > 120:
            document.getElementById("hpBar").style.backgroundColor = "rgb(4, 85, 126)";
            break;
    }
})