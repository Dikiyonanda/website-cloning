import React from 'react'
import './Services.css'
 function ServiceItem(props) {
    return (
        <>
          <div className='service__item__wrapp' >
            <p className="service">{props.service}</p>
            <p className='info__service'>{props.info}</p>
          </div>
    </>
    )
}
export default ServiceItem;
