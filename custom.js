let letters = "abcdefghijklmnopqrstuvwxyz+#35";

// get array from letters
let arrayLetter = Array.from(letters)

// select letters container
let letterContainer = document.querySelector(".letters")


// generate letter
arrayLetter.forEach(letter => {

    // creat span
    let span = document.createElement("span");

    // creat text inside the letters
    let text = document.createTextNode(letter)

    // append the letter to span
    span.appendChild(text)

    // add class for span
    span.className = "letter-box";

    // append span to my container
    letterContainer.appendChild(span)
})

///////////////////////////////////////////////////////////////////////////////////

// creat object and category
let word = {
    programing :["php", "javascript", "css", "c++", "python", "ruby", "html", "html5", "css3", "C#" , "laravel"],
    movies : ["endgame", "ironman", "us", "ted", "coco", "nemo", "thor", "logan", "boyka", "se7en"],
    series : ["viking", "dark", "see", "prisonbreak", "sherlock", "blackmirror", "supernatural"],
    people : ["einstein", "hitchcock", "alexander", "cleopatra", "ghandi"],
    countries : ["egypt", "palastine", "yemen", "bahrain", "qatar"],
}

// get random property
let allKeys = Object.keys(word); // set object and get all keys in this object [array]
// console.log(allKeys);

let randomPropNumber = Math.floor(Math.random() * allKeys.length); // get index of property
let randomPropName = allKeys[randomPropNumber]; // get one property
let randomPropValue = word[randomPropName]; // get values of property [array]


// get index of value of random property
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length) 
let randomValueName = randomPropValue[randomValueNumber]; // random value of random property

// console.log(randomValueName);


// set random prop in webPage and style it
document.querySelector("#mySpan").innerHTML = randomPropName;
document.querySelector("#mySpan").style.fontWeight= "bold";

///////////////////////////////////////////////////////////////////
// select guess div
let guessDiv = document.querySelector(".guess");

// convert chosen word to array
let arrayOfWord = Array.from(randomValueName) 

// creat spans depend on word
arrayOfWord.forEach(letter => {
    
    //creat span
    let span = document.createElement("span")

    // add clss to span
    span.className = "letterSpan";

    // add span to the div in html
    guessDiv.appendChild(span)
})

//set wrong count
let wrongCount = 0;

//select hangManDraw
let theDraw = document.querySelector(".hangManDraw")

// handle clicking on letters
document.addEventListener("click" , function(e){

    // set litter status
    let theStatus = false;

    if(e.target.className == "letter-box"){

        //disable letter 
        e.target.classList.add("clicked");

        // get letter which is clicked
        let theLetter = e.target.innerHTML.toLowerCase();

        // get the chosen word as an array
        let word = arrayOfWord;

        for(let i = 0; i < word.length; i++){
            if(word[i] == theLetter){
                theStatus = true;
                document.querySelectorAll(".letterSpan")[i].innerHTML = theLetter
            }
        }
        

        // if letter wrong
        if(theStatus == false){

            //increase the wrong count
            wrongCount += 1;

            // add class wrong on draw element
            theDraw.classList.add(`wrong-${wrongCount}`)

            // play the fail sound
            document.querySelector("#wrong").play()

            if(wrongCount === 9){
                letterContainer.classList.add("finished")
                document.querySelector(".answer").classList.remove("d-none")
                document.querySelector("#word").innerHTML = randomValueName;
                
            }
        }
        else{
            //play success sound
            document.querySelector("#correct").play()
        }
    }

    let checker = 0;
    // check if all span complete
    let myLetterSpans = Array.from(document.querySelectorAll(".letterSpan")) 
    for(let i = 0; i < myLetterSpans.length; i++){
        if(myLetterSpans[i].innerHTML){
            checker += 1;
        }
    }
    if(arrayOfWord.length == checker){
       document.querySelector(".answer1").classList.remove("d-none")
       document.querySelector("#word2").innerHTML = randomValueName;
    }
})


// reload the bage when click on botton
document.querySelector("#myBtn").addEventListener("click", function(){
    document.querySelector(".fakeLink").click();
})


// close popup first
document.querySelector("i.first").addEventListener("click", function(){
    document.querySelector(".answer").classList.add("d-none")
    document.querySelector(".fakeLink").click();
})

//close popup second
document.querySelector("i.second").addEventListener("click", function(){
    document.querySelector(".answer1").classList.add("uuu")
    document.querySelector(".fakeLink").click();
})
