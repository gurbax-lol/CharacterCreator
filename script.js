let physicalTrait = "";
let vocalTrait = "";

const allPhysicaTraits = {
    "speed": ["fast", "slow"],
    "behaviour": ["fidgety", "still"],
    "movement": ["legato", "staccato"]
}

let randomTrait = function (obj) {
    let keys = Object.keys(obj);
    random_key = keys[Math.floor(Math.random() * keys.length)]
    random_value = obj[random_key][Math.floor(Math.random() * obj[random_key].length)]
    output = `${random_value} ${random_key}`
    return output;
};

document.getElementById("physical").innerHTML = randomTrait(allPhysicaTraits);
document.getElementById("vocal").innerHTML = vocalTrait;
