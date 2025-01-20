// Closures: function inside another funtion. Able to use parient Var as private var.


function Outer() {

    let message = `Hello`;

    function Inner() {
        console.log(message)
    }
    Inner()
}

Outer();


function Count() {
    let count = 0;

    function countinc() {
        count++;
        console.log(`Count inc to ${count}`)
    }

    function countdec() {
        count--;
        console.log(`Count dec to ${count}`)
    }

    return { countinc, countdec }
}

const c = Count()

c.countinc()
c.countdec()
c.countinc()
c.countinc()
c.countinc()