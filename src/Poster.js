import PropTypes from 'prop-types'


const Poster = ({ img, tittle, text }) => {
    
    return (
        <div className="lemonade">
            <div className="tittle"><h3>{ tittle}</h3></div>
            <img src={img}
                alt='lemon'
                className="lemon"
            />
            <div className="text-lemon"><h4>{text }</h4></div>
        </div>
    )
}
Poster.propTypes = {
    img: PropTypes.string.isRequired,
    tittle: PropTypes.string.isRequired,
    text:PropTypes.string.isRequired
}
export default Poster