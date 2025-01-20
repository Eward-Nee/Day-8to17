const ho = document.getElementById("eh")

function eh() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${String(ho.value).toLowerCase()}`)
        .then(file => {
            if (!file.ok) {
                throw new Error("where is he boss?")
            }
            return file.json()
        })
        .then(data => console.log(data.id))
        .catch(error => console.error(error))
}
