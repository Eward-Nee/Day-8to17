

function Game() {
    let score = 0;
    let movedir = `L`;

    function scoreHolder() {


        function incScore() {
            score++
        }

        return score
    }

    function randomApple() {
        let applePos = ``
        function randomPos() {

        }
    }

    function movement() {

        function UP() {
            movedir = `U`
        }
        function DOWN() {
            movedir = `D`
        }
        function LEFT() {
            movedir = `L`
        }
        function RIGHT() {
            movedir = `R`
        }

        return { UP, DOWN, LEFT, RIGHT }
    }
}