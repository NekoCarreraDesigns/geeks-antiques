import React from "react";
import "./style.css";

function CoinsView() {
  return (
    <div>
      <div className='coin-row'>
        <div className='coin-column'>
          <img alt='coin' src='./assets/Mercury_1942_Obverse.jpg' />
          <img alt='coin' src='./assets/Mercury_1942_Reverse.jpg' />
          <p className='description'>
            1942 Mercury Dime <br /> VF-20 $1.75
          </p>
          <br />
          <a className='purchase-link' href='/purchase-message'>
            Purchase
          </a>
        </div>
        <div className='coin-column'>
          <img alt='coin' src='./assets/Morgan_1892_Obverse.jpg' />
          <img alt='coin' src='./assets/Morgan_1892_Reverse.jpg' />
          <p className='description'>
            1892cc Morgan Silver Dollar
            <br /> VF-20 $185
          </p>
          <br />
          <a className='purchase-link' href='/purchase-message'>
            Purchase
          </a>
        </div>
        <div className='coin-column'>
          <img alt='coin' src='./assets/Morgan_1904_Obverse.jpg' />
          <img alt='coin' src='./assets/Morgan_1904_Reverse.jpg' />
          <p className='description'>
            1904-O Morgan Silver Dollar
            <br /> MS-66 $400
          </p>
          <br />
          <a className='purchase-link' href='/purchase-message'>
            Purchase
          </a>
        </div>
        <div className='coin-column'>
          <img alt='coin' src='./assets/Susan_B_Anthony.jpg' />
          <p className='description'>
            1999 Susan B. Anthony Dollar
            <br /> PF-70 $160
          </p>
          <br />
          <a className='purchase-link' href='/purchase-message'>
            Purchase
          </a>
        </div>
      </div>
      <div className='coin-row-1'>
        <div className='coin-column'>
          <img alt='coin' src='./assets/Buffalo_1936_Obverse.jpg' />
          <img alt='coin' src='./assets/Buffalo_1936_Reverse.jpg' />
          <p className='description'>
            1936 Buffalo Nickel <br /> F-12 $2.00
          </p>
          <br />
          <a className='purchase-link' href='/purchase-message'>
            Purchase
          </a>
        </div>
        <div className='coin-column'>
          <img alt='coin' src='http://placehold.jp/150x150.png' />
          <p className='description'>
            1919 Mercury Dime <br /> VF-20 $1.75
          </p>
          <br />
          <a className='purchase-link' href='/purchase-message'>
            Purchase
          </a>
        </div>
        <div className='coin-column'>
          <img alt='coin' src='http://placehold.jp/150x150.png' />
          <p className='description'>
            1919 Mercury Dime <br /> VF-20 $1.75
          </p>
          <br />
          <a className='purchase-link' href='/purchase-message'>
            Purchase
          </a>
        </div>
        <div className='coin-column'>
          <img alt='coin' src='http://placehold.jp/150x150.png' />
          <p className='description'>
            1919 Mercury Dime <br /> VF-20 $1.75
          </p>
          <br />
          <a className='purchase-link' href='/purchase-message'>
            Purchase
          </a>
        </div>
      </div>
      <div className='coin-row-2'>
        <div className='coin-column'>
          <img alt='coin' src='http://placehold.jp/150x150.png' />
          <p className='description'>
            1919 Mercury Dime <br /> VF-20 $1.75
          </p>
          <br />
          <a className='purchase-link' href='/purchase-message'>
            Purchase
          </a>
        </div>
        <div className='coin-column'>
          <img alt='coin' src='http://placehold.jp/150x150.png' />
          <p className='description'>
            1919 Mercury Dime <br /> VF-20 $1.75
          </p>
          <br />
          <a className='purchase-link' href='/purchase-message'>
            Purchase
          </a>
        </div>
        <div className='coin-column'>
          <img alt='coin' src='http://placehold.jp/150x150.png' />
          <p className='description'>
            1919 Mercury Dime <br /> VF-20 $1.75
          </p>
          <br />
          <a className='purchase-link' href='/purchase-message'>
            Purchase
          </a>
        </div>
        <div className='coin-column'>
          <img alt='coin' src='http://placehold.jp/150x150.png' />
          <p className='description'>
            1919 Mercury Dime <br /> VF-20 $1.75
          </p>
          <br />
          <a className='purchase-link' href='/purchase-message'>
            Purchase
          </a>
        </div>
      </div>
    </div>
  );
}
export default CoinsView;
