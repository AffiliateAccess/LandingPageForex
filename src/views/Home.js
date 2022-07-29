/*eslint-disable */
import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink, Row, Col } from 'reactstrap'
import { getMS } from './../api/apiData'
import UILoader from '@components/ui-loader'
import { useState, useEffect, useNavigate } from 'react'
import { useParams } from 'react-router-dom'
import CardMarketingSource from './CardMarketingSource'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

// ** Styles
import 'animate.css/animate.css'
import '@styles/base/plugins/extensions/ext-component-sweet-alerts.scss'
const MySwal = withReactContent(Swal)

const Home = () => {
  const [block, setBlock] = useState(false)
  const [data, setData] = useState([])
  const params = useParams()

  const handleWarning = () => {
    return MySwal.fire({
      position: 'top',
      title: 'Warning!',
      text: ' Confirm to be over 18 years old ?',
      icon: 'warning',
      customClass: {
        confirmButton: 'btn btn-primary'
      },
      buttonsStyling: false
    })
  }
  
  const getData = async (id) => {
    setBlock(true)
    try {
      const rs = await getMS(id)
      setData(rs.data)
      setBlock(false)
    } catch (error) {
      setBlock(false)
  
    }
  }
  useEffect(() => {
    getData(params.id),
    handleWarning()
  }, [])

  const renderWishlist = (data) => {

    if (Object.entries(data).length > 0) {
      console.log(data['marketing_source'])
      return Object.entries(data['marketing_source']).map(item => {
        // const CartBtnTag = item.isInCart ? Link : 'button'
        return (
          <Col md='6' className='px-2 mt-3'>
            <CardMarketingSource data={item[1]}></CardMarketingSource>
          </Col>
        )
      })
    }

  }
  return (

    <div className='mt-4 mx-5' >

      <div class="text-center ">
        <h1 className='text-primary display-5 fw-bolder'>Forex Comparator</h1>
        <CardText className='mb-5 mt-2'>

          <p class=" text-center">This is your new and updated forex welcome bonus comparator.</p>

          <span class=" text-center">Ecco quali sono i migliori broker forex scelti da Forexcomparator per i trader che vogliono iniziare ad investire sulle piattaforme forex regolamentate online più affidabili..</span><br />
          
          {/* <span class=" text-center mt-1 small">Before joining please be aware that 79.9% of retail investor accounts lose money when trading CFDs. </span><br />
          <span class=" text-center small">You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.</span><br />
          <span class=" text-center small">CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage.</span> */}
        </CardText>

      </div>
   
        <Row className='row justify-content-center mt-5'>
          {renderWishlist(data)}

        </Row>
  


    </div>
  )
}

export default Home
