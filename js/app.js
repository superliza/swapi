function loadPage() {
    getSwapi();
    // $(document).on("click", ".modal-trigger", paintDataName);
}

function getSwapi() {
    fetch('https://swapi.co/api/films/?format=json') 
    .then(response)
    .then(data)
    .catch(error);
}

function response(myResponse) {
    return myResponse.json(); 
}

function data(dataSwapi) {
    const films = dataSwapi.results;

    for (let i = 0; i < films.length; i++) {
        let title = films[i]["title"];
        let episode = films[i]["episode_id"];
        let characters = films[i]["characters"];
        // console.log(characters.join(""));
        
        for (let j = 0; j < characters.length; j++) {
            // let infoCharacter = characters.join(" ");
            // console.log(infoCharacter);
            
            let charactersSwapi = characters[j];
            name(charactersSwapi);  
        }
        paintData(title, episode);
    }
}

    function name(charactersSwapi) {
        fetch(charactersSwapi)
        .then(response)
        .then(dataCharacters)
        .catch(error);
    }

    function dataCharacters(dataCharactersSwapi) {
        console.log(dataCharactersSwapi);
        let characterName = dataCharactersSwapi.name;  
        let mass = dataCharactersSwapi.mass;
        let hairColor = dataCharactersSwapi.hair_color;
        let skinColor = dataCharacters.skin_color;
        let height = dataCharacters.height;
        paintDataName(characterName);
         
    }
    // films.forEach(element => {
        // console.log(element);
        
        // let title = element.title;
        // let episode = element.episode_id;
        // let characters = element.characters;
        
        // console.log(characters);
        
        // const myElement = characters.map(element => {
        //     console.log(element);
        //     return element;
        // });
        // myElement();
        
    // })
    
    // .forEach((element) => {
    //    console.log(element);  
    // });
let rowSection = document.getElementById("row");

function paintData(title, episode) {
    

    let colSection = document.createElement("section");
    let imageCharacter = document.createElement("img");
    let nameTitle = document.createElement("p");
    let episody = document.createElement("p");

    colSection.classList.add("col", "m2");
    imageCharacter.setAttribute("src", "https://dummyimage.com/100x100/000/fff");
    nameTitle.innerHTML = title;
    episody.innerHTML = "episode " + episode;

    rowSection.appendChild(colSection);
    colSection.appendChild(imageCharacter);
    colSection.appendChild(nameTitle);
    colSection.appendChild(episody);
}

function paintDataName(characterName) {
    let name = document.createElement("p");
    let col = document.createElement("section");
    let link = document.createElement("a");

    name.innerHTML = characterName;
    col.classList.add("col", "m2");
    link.classList.add("waves-effect", "waves-light", "modal-trigger");
    link.setAttribute("href", "modal1");

    rowSection.appendChild(col);
    col.appendChild(link);
    link.appendChild(name);
}

function error() {
    console.log("error");  
}

window.onload = loadPage();