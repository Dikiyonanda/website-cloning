import React from 'react';
import './Course.css';

function CourseItem(props) {
  return (
    <>
    <div className='list__item__wrapp' >
            <img
              className='cards__item__img'
              alt='image'
              src={props.src}
            />
            <div className="text_course">
            <h5 className="judul">{props.judul}</h5>
            <p className='author'>{props.author}</p>
            <p className='price'>{props.price}</p>
            </div>
           

          </div>
    </>
  );
}

export default CourseItem;