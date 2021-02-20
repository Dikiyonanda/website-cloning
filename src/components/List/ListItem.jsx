import React from 'react';
import './List.css'

function ListItem(props) {
  return (
    <>
          <div className='list__item__wrapp' >
            <p className="visitor">{props.visitor}</p>
            <p className='info'>{props.info}</p>
          </div>
    </>
  );
}

export default ListItem;