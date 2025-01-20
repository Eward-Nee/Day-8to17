import PropTypes from 'prop-types'


function Greeting(props) {
    if (props.bLogedIn) {
        return (
            <>
                <p>Greetings {props.sName}</p>
            </>
        )
    } else {
        return (
            <p>Please log in</p>
        )
    }

}

Greeting.proptypes = {
    sName: PropTypes.string,
    bLogedIn: PropTypes.bool
}

Greeting.defaultprops = {
    sName: `Jan`,
    bLogedIn: false
}

export default Greeting