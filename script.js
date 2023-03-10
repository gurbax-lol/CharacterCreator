const ALL_PHYSICAL_TRAITS = {
    "movement speed": ["fast", "slow"],
    "behaviour": ["fidgety", "still"],
    "movement": ["legato", "staccato"],
    "posture": ["upright", "slouching"],
    "walk": ["uncontrolled", "disciplined", "limp", "stroll", "swagger"],
    "heavy": ["right", "left"],  // weight distribution
    "flexibility": ["rubbery", "rigid"],
    "led movement": ["head", "chest", "belly"],
    "arms / hands": ["open", "closed"],
    "shoulders": ["raised", "relaxed"],
    "fingers": ["spread", "joined", "intertwined"],
    "body": ["open", "closed"]
}

const ALL_VOCAL_TRAITS = {
    "accent": ["british", "french", "malayali", "punjabi", "italian", "tapori"],
    "pitch": ["low", "high"],
    "talker": ["fast", "slow"],
    "volume": ["loud", "whispery"],
    "articulation": ["excellent", "poor"],
    "jaw": ["tight", "loose"],
    "tongue": ["active", "lazy"],
}

function randomTrait(obj) {
    let keys = Object.keys(obj);  // All keys in obj
    randomKey = keys[Math.floor(Math.random() * keys.length)]
    randomValue = obj[randomKey][Math.floor(Math.random() * obj[randomKey].length)]
    return `${randomValue} ${randomKey}`;
};

function setTraits() {
    document.getElementById("physical").innerHTML = randomTrait(ALL_PHYSICAL_TRAITS);
    document.getElementById("vocal").innerHTML = randomTrait(ALL_VOCAL_TRAITS);
}

setTraits()