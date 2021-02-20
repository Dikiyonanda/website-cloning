import React from 'react';
import './Footer.css';
//import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className="footer__wrapper">
        <div className="about">
          <h4>About</h4>
          <p>daridasar Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore dolor officia illum consectetur molestias ducimus quam voluptatum minus, soluta ad eos reiciendis consequatur minima. At, vel. Molestiae soluta corrupti facere?</p>
        </div>  
        
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Service</h2>
            <Link to='/'>Course</Link>
            <Link to='/'>Integration</Link>
            <Link to='/'>Book</Link>
            <Link to='/'>Blog</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Support</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Privacy</Link>
            <Link to='/'>Agreement</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
     
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            <img width="40px" height="40px" src='https://avatars.githubusercontent.com/u/76575883?s=400&u=4d9609133335ea9155375d8b270c47421d4b8614&v=4' alt="logo"/>
            </Link>
          </div>
          <small class='website-rights'>D-Y Creative © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fa fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fa fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fa fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fa fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fa fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;