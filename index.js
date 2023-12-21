/* Keypres library */
var listener = new window.keypress.Listener();
/* Keypres library */

//get the HTML element where the piano will be positioned
let pianoContainer = document.getElementById("pianoId");

/* add sound to piano keys from keyBoard */

//corresponding keyboards and notes name for white keys
const keyboardListForWhiteKeys = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g","h", "j", "l", "z", "x", "c"];
const noteWhiteKeyRuteList = ["C3", "D3", "E3","F3", "G3", "A3", "B3", "C4", "D4", "E4","F4", "G4", "A4", "B4", "C5", "D5", "E5","F5", "G5", "A5", "B5"];

//corresponding keyboards and notes name for black keys
const keyboardListForBlackKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "¡", "+", ",", ".", "-"];
const noteBlackKeyRuteList = ["C3S", "D3S", "F3S", "G3S", "A3S","C4S", "D4S", "F4S", "G4S", "A4S", "C5S", "D5S", "F5S", "G5S", "A5S" ]

//function to play the piano with keyboard
const playWithKeyboard = (keyboardList, noteList) => {
    for (let index = 0; index < keyboardList.length; index++) {
        listener.simple_combo(keyboardList[index], function () {
            console.log("You pressed " + keyboardList[index] + "to sound " + noteList[index])
            myAudio = new Audio(`/assets/sounds/${noteList[index]}.flac`);
            myAudio.play()
        })
    }
}

playWithKeyboard(keyboardListForWhiteKeys, noteWhiteKeyRuteList);
playWithKeyboard(keyboardListForBlackKeys, noteBlackKeyRuteList);

/* add event click to white and black keys */

const addEventToKeys = (key, keyIndex) => {
    let audio = document.createElement("audio");
    key.appendChild(audio)
    key.addEventListener("click", () => {
        audio.setAttribute("src", `assets/sounds/${keyIndex}.flac`)
        audio.play()
    })
}

// set conditions to position correctly black keys
const setBlackKeys = (index, blackKey, listLength, marginLeftValue0, marginLeftValue1, marginLeftValue2) => {

    switch (index) {
        case listLength - 1:
            blackKey.setAttribute('style', 'display: none');
            break;
        case 0:
            blackKey.setAttribute('style', `margin-left: ${marginLeftValue0}`);
            break;
        case 1:
            blackKey.setAttribute('style', `margin-left: ${marginLeftValue1}`);
            break;
        case 2:
            blackKey.setAttribute('style', `margin-left: ${marginLeftValue2}`);
            break;
        default:
            break;
    }
}

//add modules whith white and black keys styles 

const addModule = (keys, keyBoardWhiteList, keyBoardBlackList, setBlackKeys) => {
    let modulo2KeysContainer = document.createElement("div");
    modulo2KeysContainer.setAttribute("class", "modulo");

    for (let index = 0; index < keys.length; index++) {
        pianoContainer.appendChild(modulo2KeysContainer);

        let whiteKey = document.createElement("div");
        whiteKey.setAttribute("class", "white-key");
        whiteKey.innerHTML = `<p class="letters"><b>${keyBoardWhiteList[index]}</b></p><p class="letters">${keys[index]}</p>`

        let blackKey = document.createElement("div");
        blackKey.setAttribute("class", "black-key");
        blackKey.innerHTML = `<p class="letters-black"><b>${keyBoardBlackList[index]}</b></p><p class="letters-black">${keys[index]}#</p>`

        modulo2KeysContainer.appendChild(whiteKey);
        modulo2KeysContainer.appendChild(blackKey);

        setBlackKeys(index, blackKey, keys.length, "-3rem", "3rem", 0);

        addEventToKeys(whiteKey, keys[index])
        addEventToKeys(blackKey, keys[index])
    }
}

//function to catch the corresponding keyboard
const printCorrespondingKeyboard = (beginning, end, arrayList) => {
    keyList = [];
    for (let i = beginning; i < end; i++) {
        keyList.push(arrayList[i])
    }
    return keyList;
}

//setting black keys for diferent modules
const setBlackKeysForModule2 = (index, blackKey, keysLength) => {
    setBlackKeys(index, blackKey, keysLength, "-3rem", "3rem", "0rem");
}
const setBlackKeysForModule3 = (index, blackKey, keysLength) => {
    setBlackKeys(index, blackKey, keysLength, "-6rem", "0rem", "6rem");
}

//print first module2
const keysFirstModule2 = ["C3", "D3", "E3"];
const keyBoardWhiteGroupCDE = printCorrespondingKeyboard(0, 3, keyboardListForWhiteKeys)
const keyBoardBlackGroupCD = printCorrespondingKeyboard(0, 2, keyboardListForBlackKeys)
addModule(keysFirstModule2, keyBoardWhiteGroupCDE, keyBoardBlackGroupCD, setBlackKeysForModule2);

//print first module3
const keysFirstModule3 = ["F3", "G3", "A3", "B3"]
const keyBoardWhiteGroupFGAB = printCorrespondingKeyboard(3, 7, keyboardListForWhiteKeys)
const keyBoardBlackGroupFGA = printCorrespondingKeyboard(2, 5, keyboardListForBlackKeys)
addModule(keysFirstModule3, keyBoardWhiteGroupFGAB, keyBoardBlackGroupFGA, setBlackKeysForModule3);

//print second module2
const keysSecondModule2 = ["C4", "D4", "E4"];
const keyBoardWhiteGroupCDE2 = printCorrespondingKeyboard(7, 10, keyboardListForWhiteKeys)
const keyBoardBlackGroupCD2 = printCorrespondingKeyboard(5, 7, keyboardListForBlackKeys)
addModule(keysSecondModule2, keyBoardWhiteGroupCDE2, keyBoardBlackGroupCD2, setBlackKeysForModule2);

//print second module3
const keysSecondModule3 = ["F4", "G4", "A4", "B4"]
const keyBoardWhiteGroupFGAB2 = printCorrespondingKeyboard(10, 14, keyboardListForWhiteKeys)
const keyBoardBlackGroupFGA2 = printCorrespondingKeyboard(7, 10, keyboardListForBlackKeys)
addModule(keysSecondModule3, keyBoardWhiteGroupFGAB2, keyBoardBlackGroupFGA2, setBlackKeysForModule3);

//print third module2
const keysThirdModule2 = ["C5", "D5", "E5"];
const keyBoardWhiteGroupCDE3 = printCorrespondingKeyboard(14, 17, keyboardListForWhiteKeys)
const keyBoardBlackGroupCD3 = printCorrespondingKeyboard(10, 12, keyboardListForBlackKeys)
addModule(keysThirdModule2, keyBoardWhiteGroupCDE3, keyBoardBlackGroupCD3, setBlackKeysForModule2);

//print third module3
const keysThirdModule3 = ["F5", "G5", "A5", "B5"]
const keyBoardWhiteGroupFGAB3 = printCorrespondingKeyboard(17, 21, keyboardListForWhiteKeys)
const keyBoardBlackGroupFGA3 = printCorrespondingKeyboard(12, 15, keyboardListForBlackKeys)
addModule(keysThirdModule3, keyBoardWhiteGroupFGAB3, keyBoardBlackGroupFGA3, setBlackKeysForModule3);




