import React from 'react';
import './Course.css';
import CourseItem from './CourseItem';

function Course() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <p className="text-center my-4">Category</p>
            <div className="d-flex flex-row justify-content-center">
                <a href="http://" className="">Development</a>
                <a href="http://" className="">Bussiness</a>
                <a href="http://" className="">Investment</a>
                <a href="http://" className="">Cyber Security</a>
            </div>
          <div className='cards__wrapper'>
            <div className='cards__items'>
              <div className="card__list">
                  <div className="card__list__item">
                    <CourseItem
                      src='images/img-9.jpg'
                      judul='Ini adalah judul'
                      author='lampungdev'
                      price='Rp300.00,-'
                    />
                  </div>
              </div>
              <div className="card__list">
                  <div className="card__list__item">
                    <CourseItem
                      src='images/img-9.jpg'
                      judul='Ini adalah judul'
                      author='lampungdev'
                      price='Rp300.00,-'
                    />
                  </div>
              </div>
              <div className="card__list">
                  <div className="card__list__item">
                    <CourseItem
                      src='images/img-9.jpg'
                      judul='Ini adalah judul'
                      author='lampungdev'
                      price='Rp300.00,-'
                    />
                  </div>
              </div>
              <div className="card__list">
                  <div className="card__list__item">
                    <CourseItem
                      src='images/img-9.jpg'
                      judul='Ini adalah judul'
                      author='lampungdev'
                      price='Rp300.00,-'
                    />
                  </div>
              </div>
              <div className="card__list">
                  <div className="card__list__item">
                    <CourseItem
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
                    <CourseItem
                      src='images/img-9.jpg'
                      judul='Ini adalah judul'
                      author='lampungdev'
                      price='Rp300.00,-'
                    />
                  </div>
              </div>
              <div className="card__list">
                  <div className="card__list__item">
                    <CourseItem
                      src='images/img-9.jpg'
                      judul='Ini adalah judul'
                      author='lampungdev'
                      price='Rp300.00,-'
                    />
                  </div>
              </div>
              <div className="card__list">
                  <div className="card__list__item">
                    <CourseItem
                      src='images/img-9.jpg'
                      judul='Ini adalah judul'
                      author='lampungdev'
                      price='Rp300.00,-'
                    />
                  </div>
              </div>
              <div className="card__list">
                  <div className="card__list__item">
                    <CourseItem
                      src='images/img-9.jpg'
                      judul='Ini adalah judul'
                      author='lampungdev'
                      price='Rp300.00,-'
                    />
                  </div>
              </div>
              <div className="card__list">
                  <div className="card__list__item">
                    <CourseItem
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

export default Course;