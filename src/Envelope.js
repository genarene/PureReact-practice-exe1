import PropTypes from "prop-types"


const Envelope = ({ toPerson, fromPerson }) => {
  
    return (
        <div className="envelope">
            <div className="to-person">
            <div>{toPerson.name} </div>
            <div>{toPerson.address} </div>
            </div>

            <div className="from-person">
            <div>{fromPerson.name}</div>
            <div>{fromPerson.address}</div>
            </div>
            <div className="stamp"><h3>Stamp</h3></div>
        </div>
    )
    
}

Envelope.propTypes = {
    toPerson: PropTypes.shape({
        name: PropTypes.string.isRequired,
        address:PropTypes.string.isRequired
    }).isRequired,
    fromPerson: PropTypes.shape({
        name: PropTypes.string.isRequired,
        address:PropTypes.string.isRequired
    }).isRequired
}


export default Envelope