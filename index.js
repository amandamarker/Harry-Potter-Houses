const wizardsWrapper = document.querySelector('.wizards');

function searchWizards(event) {
    rendorWizards(event.target.value);
}

async function rendorWizards(searchTerm) {
    console.log("this is the searchTerm:", searchTerm);  
    const response = await fetch(
        'https://wizard-world-api.herokuapp.com/Wizards');
    const wizardsArr =  await response.json();
    console.log(wizardsWrapper);
    wizardsWrapper.innerHTML = wizardsArr.slice(0-6).map((wizard) => {
        return (`
        <div class="wizards">
        <h1>${wizard.firstName || ""} ${wizard.lastName}</h1>
        
        ${wizard.elixirs.map((elixir) => (
        `
        <p>Elixir: ${elixir.name}</p>
        `
        )).join('')}

        </div>
        `);
    }).join('');
}

rendorWizards()