const wizardsWrapper = document.querySelector('.wizards');
console.log(wizardsWrapper);
function searchWizards(event) {
    console.log(event.target.value)
}

async function rendorWizards() {
    const response = await fetch('https://wizard-world-api.herokuapp.com/Wizards')
    const data =  await response.json()
    const wizardsArr = data.Search
    wizardsWrapper.innerHTML = wizardsArr.map((wizards) => {
        return `
        div class="wizards">
        `
    })
}

rendorWizards()