import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import TruckLogistics from './modals/TruckLogistics';
import Stack from 'react-bootstrap/Stack';
import TruckSales from './modals/TruckSales';


function ButtonModal() {
    const [show, setShow] = useState(false);
    const [showSales, setShowSales] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSalesClose = () => setShowSales(false);
    const handleSalesShow = () => setShowSales(true);

    return (
        <>
            <OverlayTrigger
                trigger="click"
                key='top'
                placement='top'
                overlay={
                    <Popover id={`popover-positioned-top`}>
                        <Popover.Header as="h3">Select Quote</Popover.Header>
                        <Popover.Body>
                           
                           <Stack gap={2}>
                           <Button variant="outline-secondary" className='modalbtn' onClick={handleShow} style={{borderRadius: 20}}>
                                Truck Logistics
                            </Button>

                            <Button variant="outline-secondary" className='modalbtn' onClick={handleSalesShow} style={{borderRadius: 20}}>
                                Truck Sales
                            </Button>
                           </Stack>
                        </Popover.Body>
                    </Popover>
                }
            >
                <Button variant="secondary">Get Quote</Button>
            </OverlayTrigger>
            <TruckLogistics show={show} handleClose={handleClose} />
            <TruckSales show={showSales} handleClose={handleSalesClose} />
        </>
    );
}

export default ButtonModal;