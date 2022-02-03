import React from "react";
import "./style.css";

function StampsView() {
  return (
    <div>
      <div className='stamp-row'>
        <div className='stamp-column'>
          <img alt='stamp' src='./assets/1870_George_Washington.jpg' />
          <p className='description'>
            1870 3 cent George Washington <br /> UNHVF $146.75
          </p>
          <br />
          <a className='purchase-link' href='/purchase-message'>
            Purchase
          </a>
        </div>
        <div className='stamp-column'>
          <img alt='stamp' src='./assets/1894_Postage_Due.jpg' />
          <p className='description'>
            1894 1 cent postage due <br /> MNHXF $700
          </p>
          <br />
          <a className='purchase-link' href='/purchase-message'>
            Purchase
          </a>
        </div>
        <div className='stamp-column'>
          <img alt='stamp' src='./assets/1921_George_Washington.jpg' />
          <p className='description'>
            {" "}
            1921 George Washing block of 2
            <br /> UNHXF $70,000
          </p>
          <a className='purchase-link' href='/purchase-message'>
            Purchase
          </a>
        </div>
        <div className='stamp-column'>
          <img alt='stamp' src='./assets/1923_George_Washington.jpg' />
          <p className='description'>
            1923 2 cent George Washington two sides imperforated
            <br /> UNHVF $2,000
          </p>
          <a className='purchase-link' href='/purchase-message'>
            Purchase
          </a>
        </div>
      </div>
      <div className='stamp-row-1'>
        <div className='stamp-column'>
          <img alt='stamp' src='./assets/1923_Canal_Zone.jpg' />
          <p className='description'>
            1923 4 cent Canal Zone Biplane
            <br /> UNHVF $37.50
          </p>
          <a className='purchase-link' href='/purchase-message'>
            Purchase
          </a>
        </div>
        <div className='stamp-column'>
          <img alt='stamp' src='./assets/1932_George_Washington.jpg' />
          <p className='description'>
            1932 3 cent George Washington imperforated on two sides <br />{" "}
            UNHVf/XF $3,000
          </p>
          <a className='purchase-link' href='/purchase-message'>
            Purchase
          </a>
        </div>
        <div className='stamp-column'>
          <img alt='stamp' src='./assets/1945_Iwo_Jima.jpg' />
          <p className='description'>
            1945 3 cent Iwo Jima block of 4
            <br /> MNHXFOG $600
          </p>
          <a className='purchase-link' href='/purchase-message'>
            Purchase
          </a>
        </div>
        <div className='stamp-column'>
          <img alt='stamp' src='http://placehold.jp/150x150.png' />
          <p className='description'>1846 MNHOGXF/SU $1,000</p>
          <br />
          <a className='purchase-link' href='/purchase-message'>
            Purchase
          </a>
        </div>
      </div>
      <div className='stamp-row-2'>
        <div className='stamp-column'>
          <img alt='stamp' src='http://placehold.jp/150x150.png' />
          <p className='description'>1846 MNHOGXF/SU $1,000</p>
          <br />
          <a className='purchase-link' href='/purchase-message'>
            Purchase
          </a>
        </div>
        <div className='stamp-column'>
          <img alt='stamp' src='http://placehold.jp/150x150.png' />
          <p className='description'>1846 MNHOGXF/SU $1,000</p>
          <br />
          <a className='purchase-link' href='/purchase-message'>
            Purchase
          </a>
        </div>
        <div className='stamp-column'>
          <img alt='stamp' src='http://placehold.jp/150x150.png' />
          <p className='description'>1846 MNHOGXF/SU $1,000</p>
          <br />
          <a className='purchase-link' href='/purchase-message'>
            Purchase
          </a>
        </div>

        <div className='stamp-column'>
          <img alt='stamp' src='http://placehold.jp/150x150.png' />
          <p className='description'>1846 MNHOGXF/SU $1,000</p>
          <br />
          <a className='purchase-link' href='/purchase-message'>
            Purchase
          </a>
        </div>
      </div>
    </div>
  );
}

export default StampsView;
