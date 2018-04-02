function loadPage() {
    $('.modal').modal();
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
    let paintAll = ``;
    // let paintCharacters = ``;
    for (item of films) {
        let episode = item.episode_id;
        let title = item.title;
        let characters = item.characters
        let paintCharacters = ``;
        for (itemCharacters of characters) {
            paintCharacters += `
            <a href="#modal1" class="characters-list waves-effect waves-light modal-trigger" data-characters="${itemCharacters}">
            ${itemCharacters}
            </a>`
             
        }

        paintAll += `
        <section class="col m12">
            <section class="card hoverable">
                <section class="card-image">
                    <img src="assets/images/star-wars.png" alt="star-wars">
                </section>
                <section class="card-content">
                    <h3 class="center-align"> ${title} </h3>
                    <h5><strong> EPISODE: </strong> ${episode} </h5>
                    <ul><strong> CHARACTERS: </strong> ${paintCharacters} </ul>
                </section>
            </section>
        </section>`
    }

    let row = document.getElementById("row");
    row.innerHTML = paintAll;
    let charactersList = document.getElementsByClassName("characters-list");
    // console.log(charactersList);
    clickCharacters(charactersList);      
}

clickCharacters = charactersList => {
    let arrayCharacters = Array.from(charactersList);
    // console.log(arrayCharacters);
    for (itemArrayCharacters of arrayCharacters) {
        // console.log(itemArrayCharacters);
        itemArrayCharacters.addEventListener("click", endpointCharacters);    
    }   
}

endpointCharacters = e => {
    let apiEndpoint = e.target.dataset.characters;
    fetch(apiEndpoint)
    .then(response)
    .then(paintDataCharacters)
    .catch(error);
}

paintDataCharacters = infoCharacters => {
    console.log(infoCharacters);
    const paintModal = `
    <section class="row">
        <section class="col m12">
            <h2 class="center-align"> ${infoCharacters.name} </h2>
        </section>
    </section>
    <section class="row">
        <section class="col m6">
            <h5 class="right-align"><strong> EYES COLOR: </strong> ${infoCharacters.eye_color} </h5>
        </section>
        <section class="col m6">
            <h5><strong> SKIN COLOR: </strong> ${infoCharacters.skin_color} </h5>
        </section>
    </section>
    <section class="row">
        <section class="col m6">
            <h5 class="right-align"><strong> HAIR COLOR: </strong> ${infoCharacters.hair_color} </h5>
        </section>
        <section class="col m6">
            <h5><strong> HEIGHT: </strong> ${infoCharacters.height} </h5>
        </section>
    </section>
    <section class="row">
        <section class="col m12">
            <h5 class="center-align"><strong> MASS: </strong> ${infoCharacters.mass} </h5>
        </section>
    </section>`

    const modalContent = document.getElementById("modal-characters");
    modalContent.innerHTML = paintModal;
}



function error() {
    console.log("error");  
}

window.onload = loadPage();