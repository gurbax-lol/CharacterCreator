const allPhysicaTraits = {
    "speed": ["fast", "slow"],
    "behaviour": ["fidgety", "still"],
    "movement": ["legato", "staccato"]
}

const allVocalTraits = {
    "accent": ["british", "french", "malayali", "punjabi", "italian", "tapori"],
    "pitch": ["low", "high"],
    "talker": ["fast", "slow"]
}

function randomTrait(obj) {
    let keys = Object.keys(obj);  // All keys in obj
    random_key = keys[Math.floor(Math.random() * keys.length)]
    random_value = obj[random_key][Math.floor(Math.random() * obj[random_key].length)]
    return `${random_value} ${random_key}`;
};

function setTraits() {
    document.getElementById("physical").innerHTML = randomTrait(allPhysicaTraits);
    document.getElementById("vocal").innerHTML = randomTrait(allVocalTraits);
}

setTraits()