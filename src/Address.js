import Envelope from './Envelope'
import CreditCard from './CreditCard'
import Poster from './Poster'
import Mail from './Mail'



const card = {
    name: 'Nazy Shiri',
    date: '16/01/21',
    number: '789 321 5678 4325',
    bank: 'BLACK CARD'
}
  
const mailAcc = {
    sender: 'Austin INC :',
    subject: 'AI app designs-Issue 234',
    date: '1/01/21',
    message:'In regards to the new designs, a zoom meeting will be held on Monday during the stand up. Thank you'
}
const Address = ({person}) => {
    return (
       
        <>
            <Envelope toPerson={person.to} fromPerson={person.from} />
            <CreditCard cardInfo={card} />
            <Poster img="https://images.unsplash.com/photo-1534531173927-aeb928d54385?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" tittle='my lemon' text='When life gave me lemons, i turned it into a lemonade business' />,
            <Mail email={mailAcc }/>
        </>
    )
}

export default Address;