import Ppic from "./assets/Ppic.jpg"

function Card() {

    return (
        <div className="card">
            <img src={Ppic} alt="Profile pic of Eward van Niekerk" />
            <h2 className="card-title">Eward van Niekerk</h2>
            <p className="card-text">Hi, I am Eward van Niekerk</p>
        </div>
    )
}

export default Card