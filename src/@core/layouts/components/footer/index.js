// ** Icons Import
import { Heart } from 'react-feather'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'reactstrap'
const Footer = () => {
  return (
    <p className='clearfix mb-0 mt-1'>

      <span className='float-md-end d-none d-md-block'>
        Il gioco può causare dipendenza patologica ioca Responsabilmente
       
        <span className='d-none d-sm-inline-block'> © Ltd 2021</span>
      </span>
      <span className='float-md-start d-none d-md-block'>
        <ListGroup className='list-group-horizontal-sm'>
        <Link a className='me-2' to='/faq/Privacy'>Privacy & Cookies</Link>
        <Link a className='me-2' to='/faq/Responsabile'> Gioco Responsabile</Link>
        <Link a className='me-2' to='/faq/Disclaimer'>Disclaimer</Link>
       
        
      </ListGroup>
      </span>
    </p>
  )
}

export default Footer
