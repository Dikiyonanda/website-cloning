import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
          <div>
            <h1>Mulai bersama daridasar.com</h1>
            <p>Platform belajar yang dapat membantumu belajar apapun dari dasar</p>          
          </div>
          <div className='cards__wrapper'>
            <div className='cards__items'>
              <div className="card__list">
                  <div className="card__list__item">
                    <CardItem
                      src='images/img-9.jpg'
                      judul='Ini adalah judul'
                      author='lampungdev'
                      price='Rp300.00,-'
                    />
                  </div>
              </div>
              <div className="card__list">
                  <div className="card__list__item">
                    <CardItem
                      src='images/img-9.jpg'
                      judul='Ini adalah judul'
                      author='lampungdev'
                      price='Rp300.00,-'
                    />
                  </div>
              </div>
              <div className="card__list">
                  <div className="card__list__item">
                    <CardItem
                      src='images/img-9.jpg'
                      judul='Ini adalah judul'
                      author='lampungdev'
                      price='Rp300.00,-'
                    />
                  </div>
              </div>
              <div className="card__list">
                  <div className="card__list__item">
                    <CardItem
                      src='images/img-9.jpg'
                      judul='Ini adalah judul'
                      author='lampungdev'
                      price='Rp300.00,-'
                    />
                  </div>
              </div>
              <div className="card__list">
                  <div className="card__list__item">
                    <CardItem
                      src='images/img-9.jpg'
                      judul='Ini adalah judul'
                      author='lampungdev'
                      price='Rp300.00,-'
                    />
                  </div>
              </div>
           
          </div>

          <div className='cards__items'>
              <div className="card__list">
                  <div className="card__list__item">
                    <CardItem
                      src='images/img-9.jpg'
                      judul='Ini adalah judul'
                      author='lampungdev'
                      price='Rp300.00,-'
                    />
                  </div>
              </div>
              <div className="card__list">
                  <div className="card__list__item">
                    <CardItem
                      src='images/img-9.jpg'
                      judul='Ini adalah judul'
                      author='lampungdev'
                      price='Rp300.00,-'
                    />
                  </div>
              </div>
              <div className="card__list">
                  <div className="card__list__item">
                    <CardItem
                      src='images/img-9.jpg'
                      judul='Ini adalah judul'
                      author='lampungdev'
                      price='Rp300.00,-'
                    />
                  </div>
              </div>
              <div className="card__list">
                  <div className="card__list__item">
                    <CardItem
                      src='images/img-9.jpg'
                      judul='Ini adalah judul'
                      author='lampungdev'
                      price='Rp300.00,-'
                    />
                  </div>
              </div>
              <div className="card__list">
                  <div className="card__list__item">
                    <CardItem
                      src='images/img-9.jpg'
                      judul='Ini adalah judul'
                      author='lampungdev'
                      price='Rp300.00,-'
                    />
                  </div>
              </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;