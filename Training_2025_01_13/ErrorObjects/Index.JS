// Error objects:

// try{} catch(error){} finally{always runs}


try {
    console.loag(``)
}
catch (error) {
    console.error(error)
}

try {
    let i = window.prompt(`a Number:`)
    i = Number(i)
    if (isNaN(i)) {
        throw new Error(`Please give a number`);
    } else { console.log(i) }

}
catch (error) {
    console.error(error)
}
finally {
    console.log(`You are still alive`)
}