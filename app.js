const htmlColors = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];
const hexaLetters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const rgbPositions = ["","",""];
const text = document.querySelector('.text');
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');

button1.addEventListener('click', function(){
    let randonNumber = Math.floor(Math.random() * htmlColors.length);
    document.body.style.background = htmlColors[randonNumber];
    text.textContent = htmlColors[randonNumber];
})

button2.addEventListener('click', function(){
    let hexadecimal = '#';
    for(let i = 0; i<6; i++) {
        let randonNumber = Math.floor(Math.random() * hexaLetters.length);
        hexadecimal += hexaLetters[randonNumber];
    }
    document.body.style.background = hexadecimal;
    text.textContent = hexadecimal;
})

button3.addEventListener('click', function(){
    for(let i = 0; i < 3; i++) {
        let randonNumber = Math.floor(Math.random() * 255);
        rgbPositions[i] = randonNumber;
    }
    let rgb = `rgb(${rgbPositions})`;
    document.body.style.background = rgb;
    text.textContent = rgb
})

text.addEventListener("click", function() {
    let textCopied = text.textContent;
    navigator.clipboard.writeText(textCopied);
    text.textContent = 'Copiado !';
    setTimeout(function(){
        text.textContent = textCopied;
    },1000)
})