
/*
function task1(callback) {
    setTimeout(() => {
        console.log(`1`)
        callback()
    }, 1500)
}

function task2(callback) {
    setTimeout(() => {
        console.log(`2`)
        callback()
    }, 1200)
}

function task3(callback) {
    setTimeout(() => {
        console.log(`3`)
        callback()
    }, 1900)
}

function task4(callback) {
    setTimeout(() => {
        console.log(`4`)
        callback()
    }, 1700)
}

function task5(callback) {
    setTimeout(() => {
        console.log(`5`)
        callback()
    }, 1600)
}

function task6(callback) {
    setTimeout(() => {
        console.log(`6`)
        callback()
    }, 1050)

}
// callback hell...
task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                task5(() => {
                    task6(() => { console.log(`all tasks complete`) })
                })
            })
        })
    })
})
*/
// use promises or asinc/await to avoid callback hell...

function ttask1() {
    return new Promise((Do, dont) => {
        setTimeout(() => {
            Do(`1`)
        }, 1500)
    })

}

function ttask2() {
    return new Promise((Do, dont) => {

        const yes = false
        if (yes) {
            setTimeout(() => {
                Do(`2`)
            }, 100)
        } else {
            dont(`2 is faulty`)
        }

    })
}

function ttask3() {
    return new Promise((Do, dont) => {
        setTimeout(() => {
            Do(`3`)
        }, 120)
    })
}

function ttask4() {
    return new Promise((Do, dont) => {
        setTimeout(() => {
            Do(`4`)
        }, 10)
    })
}

function ttask5() {
    return new Promise((Do, dont) => {
        setTimeout(() => {
            Do(`5`)
        }, 150)
    })
}

function ttask6() {

    return new Promise((Do, dont) => {
        setTimeout(() => {
            Do(`6`)
        }, 900)
    })

}

ttask1().then(Do => { console.log(Do); return ttask2() })
    .then(Do => { console.log(Do); return ttask3() })
    .then(Do => { console.log(Do); return ttask4() })
    .then(Do => { console.log(Do); return ttask5() })
    .then(Do => { console.log(Do); return ttask6() })
    .then(Do => { console.log(Do); console.log(`all done`) })
    .catch(dont => console.error(dont)
    )