import PropTypes from 'prop-types'

const CreditCard = ({cardInfo}) => {
    return (
        <div className="credit-card">
            <div className="bank-name"><h3>{cardInfo.bank}</h3></div>
            <div className="card-num"><h4>{cardInfo.number}</h4></div>
            <div className="card-name">{cardInfo.name}</div>
            <div className="card-date"> {cardInfo.date}</div>
            
           

        </div>
    )
}
CreditCard.propTypes = {
    cardInfo: PropTypes.shape({
        name: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        bank: PropTypes.string.isRequired
    }).isRequired
}
export default CreditCard;