import PropTypes from 'prop-types'


const Mail = ({email }) => {
    return (
        <div className="mail">
            <div className="sender">{email.sender}</div>
            <div className="subject">{email.subject}
                <span className="mail-date">{email.date}</span></div>
            <div className='mail-message'>{email.message }</div>
        </div>
    );
};

Mail.propTypes = {
    email: PropTypes.shape({
        sender: PropTypes.string.isRequired,
        subject: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        message:PropTypes.string.isRequired
    }).isRequired
}

export default Mail;