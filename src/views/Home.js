/*eslint-disable */
import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink, Row, Col } from 'reactstrap'
import { getMS } from './../api/apiData'
import UILoader from '@components/ui-loader'
import { useState, useEffect, useNavigate } from 'react'
import { useParams } from 'react-router-dom'
import CardMarketingSource from './CardMarketingSource'


const Home = () => {
  const [block, setBlock] = useState(false)
  const [data, setData] = useState([])
  const params = useParams()


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
    getData(params.id)
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

          <p class=" text-center">Ecco il tuo comparatore bonus definitivo e aggiornato.</p>

          <span class=" text-center">Confrontiamo i bonus di benvenuto dei vari operatori di gioco online con regolare licenza aams.</span><br />
          <span class=" text-center">Oltre ai bonus è possibile trovare altre informazioni per conoscere meglio la sala e scegliere cosi tra una vasta offerta di possibilitá.</span>
        </CardText>

      </div>
   
        <Row className='row justify-content-center mt-5'>
          {renderWishlist(data)}

        </Row>
  


    </div>
  )
}

export default Home
