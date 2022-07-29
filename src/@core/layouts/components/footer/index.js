// ** Icons Import
import { Heart } from 'react-feather'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'reactstrap'
const Footer = () => {
  return (
    <p className='clearfix mb-0 mt-1'>

      <span className='float-md-end d-none d-md-block small'>
        Prima di continuare fai attenzione. Il 79.9% degli account di investitori al dettaglio perde denaro nel trading di CFD

        <span className='d-none d-sm-inline-block small'> Considera le tue conoscenze sul funzionamento dei CFD e se puoi permetterti l'alta probabilità di perdere i tuoi soldi.</span>
      </span>
      <span className='float-md-start d-none d-md-block'>
        <ListGroup className='list-group-horizontal-sm'>
          <Link a className='me-2' to='/faq/Privacy'>Privacy & Cookies</Link>
          <Link a className='me-2' to='/faq/Disclaimer'>Disclaimer</Link>
          <Link a className='me-2' to='/faq/Rischio'>Rischio</Link>


        </ListGroup>
      </span>
    </p>
  )
}

export default Footer
