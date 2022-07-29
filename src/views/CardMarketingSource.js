// ** Custom Components
/*eslint-disable */
import Avatar from '@components/avatar'

// ** Reactstrap Imports
import { Card, CardBody, CardImg, Badge, CardHeader, Col, Button, Tooltip } from 'reactstrap'
import { useState } from 'react'
// ** Images
// import coverImg from '@src/assets/images/avatars/1.png'


const CardMarketingSource = (props) => {

    const {
        data
    } = props

    const [tooltipOpen, setTooltipOpen] = useState(false)

    const getImage = (name) => {

        try {

            return require('@src/assets/' + (name).toLowerCase() + '.jpg').default
        }
        catch (error) {
            return require('@src/assets/betclic.jpg').default
        }
    }

    return (
        <Card className='card-profile'>
            {/* <CardImg className='img-fluid' src={coverImg} top /> */}
            <CardHeader>

                <Col md='12' className='text-center mt-1' >
                    <img style={{ width: "215px",height:'70px', borderRadius: "50px" }} src={getImage(data.Advertiser_Name)} />
                </Col>

            </CardHeader>
            <CardBody >

                <h3 className='fw-bolder text-primary'>{data.Promo_Title}</h3>
                {/* <h6 className='text-muted'>Malaysia</h6> */}
                <p style={{minHeight: '80px'}} class="card-text">{data.Promo_Description} </p>
                {/* <hr className='mb-2' /> */}
                <br></br>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <a href={data.Tracklink}>
                         <Button color='gradient-primary'>Verifica Offerta</Button>
                        </a>
                      
                    </div>

                    <div>
                        <Button color='gradient-secondary' id='tyc'> Si applicano T&C </Button>
                        <Tooltip
                            placement='top'
                            isOpen={tooltipOpen}
                            target='tyc'
                            toggle={() => setTooltipOpen(!tooltipOpen)}
                        > Offerte e Bonus sono soggetti a cambi da parte degli Advertisers. Bonuswelcome.com non si assume alcuna responsabilitá e vi invita a verificare la congruenza delle informazioni riportate
                        </Tooltip>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

export default CardMarketingSource
