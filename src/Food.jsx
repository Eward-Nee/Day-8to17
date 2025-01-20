
function Foods() {

    const food1 = `Apple`
    const food2 = `bananana`

    return (
        <ol>
            <li>{food1}</li>
            <li>Pear</li>
            <li>{food2.toUpperCase()}</li>
        </ol>
    )
}

export default Foods