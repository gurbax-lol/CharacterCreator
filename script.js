let physicalTrait = "";
let vocalTrait = "";

const allPhysicaTraits = {
    "speed": ["fast", "slow"],
    "behaviour": ["fidgety", "still"],
    "movement": ["legato", "staccato"]
}

let randomTrait = function (allPhysicaTraits) {
    let keys = Object.keys(allPhysicaTraits);
    return allPhysicaTraits[keys[keys.length * Math.random() << 0]];
};

document.getElementById("physical").innerHTML = randomTrait(allPhysicaTraits);
document.getElementById("vocal").innerHTML = vocalTrait;
