import Pic from "./assets/react.svg"
import PropTypes from 'prop-types'

function studentCard(prop) {
    return (
        <div className="card">
            <img src={Pic} alt="Profile picture" />
            <h2>I am {prop.name}</h2>
            <p>I am {prop.age} years old and {prop.bLiveWith ? "do" : "don't"} live with my parients.</p>
        </div>
    )
}

studentCard.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    bLiveWith: PropTypes.bool
}

studentCard.defaultProps = {
    name: `Guest`,
    age: 0,
    bLiveWith: false
}

export default studentCard