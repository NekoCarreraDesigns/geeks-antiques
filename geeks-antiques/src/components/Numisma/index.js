import React from "react";
import "./style.css";

function Numisma() {
  return (
    <div>
      <header className='numisma-header'>Numisma</header>
      <section>
        <p className='numisma-paragraph'>
          Numisma is the latin word for coin. Numisma has been practiced for
          thousands of years, some of the oldest coins dating back to 600 BCE
          with the electrum a coin made from gold, and silver, minted by the
          kingdom of Lydia which is in the modern country of Turkey. Coins are
          minted using a die process in which a metal planchet is struck with an
          engraved design.
        </p>
        <p className='numisma-paragraph'>
          Numismatists or coin collectors to the laymen, are historians as some
          coins like the previously mentioned electrum, are thousands of years
          old. Most modern currency hasn't been around that long the united
          states started minting coins in 1795, with a few countries getting a
          head start in the early 1700's. In the early days of minting coins
          were made from precious metals, such as gold, silver, and copper. In
          modern times theses metals are rarely used. most coins being of the
          nickel plated zinc variety{" "}
        </p>
      </section>
      <div>
        <header className='numisma-abbreviation-header'>Abbreviations</header>
        <p className='numisma-list-paragraph'>
          Below is a list of abbreviations to the coin grading system
          established by PCGS or Professional Coin Grading Services based out of
          New York, as well as using the values from the Whitman Blue Book,
          which like the Scott Stamp Catalogue is the standard among
          numismatists all over the world. Coins are graded by condition, typal
          variations, and any minting errors that may have occurred.
        </p>
        <ul className='numisma-list'>
          <li>
            The first way a coin is graded is by condition the scale starts{" "}
            <strong>G-8</strong> or good, coins with this grade are typically
            worn down, with the design barely visible. the next grade is{" "}
            <strong>VF-20</strong> standing for very fine, the coins are
            slightly less worn with some of the design visible. the next level
            is <strong>EF-40</strong> standing for extra fine these coins have
            minimal wear to the designs and letters. The next level is{" "}
            <strong>MS</strong> which stands for mint state, these coins are
            incredibly vivid with little marking, and clear designs, and
            letters. the final conditions coins can be in is <strong>PF</strong>{" "}
            or Proof state these coins are straight up unmarked, fresh off the
            die coins, with deep contrasts and no marking or wear
          </li>
          <br />
          <li>
            Mint state coins can carry multiple grades starting with{" "}
            <strong>63</strong> going all the way to <strong>68</strong> these
            grades are determined by the amount of wear to the coin, or the
            slight scratches from being transported in mint bags, the less
            amount of wear the higher the number coins with a grade of{" "}
            <strong>MS-68</strong> are said to be gem quality{" "}
          </li>
          <br />
          <li>
            Proof grade coins have two grade values <strong>PF-68</strong> to{" "}
            <strong>PF-70</strong> coins that carry these grades are barely
            touched or marked mean they were the last ones off the conveyor at
            the mint. sometimes sold as sets in gold, and silver, proof coins
            are very collectible, most commemorative coins are sold as proofs,
            along with the coins that are minted regularly every year
          </li>
          <br />
          <li>
            coins are also graded by typal differences and mint errors. certain
            examples of this are, Eisenhower dollar coins have three types each
            type varies with the reverse of the coin, the view of earth from the
            moon has varying levels of clarity. type 1 has a clear crescent
            shaped Cuba. type 2, Cuba is a blob beneath Florida which is
            triangular shaped. Type 3 has a clear crescent shaped Cuba, and a
            clear Florida. Other type variations exist among other coins. These
            variations happen during the minting process
          </li>
          <li>
            Certain errors exist in the numismatic world, these coins carry a
            high value, because of the errors. some examples of this are the
            1937-D buffalo nickel which has three legs, the 1989-D penny which
            was struck on a copper planchet, sometimes coins can have double
            dies, or in laymen's terms double struck during the minting process
            this can be very noticeable or barely at all, other errors are coins
            struck on different planchets or struck over different mints, a
            penny struck on a dime, or a Denver mint struck over a San
            Francisco.
          </li>
          <li>
            coins will also have mint marks as well as engravers initials on
            them. these are <strong>D</strong> for the Denver mint,{" "}
            <strong>P</strong> for the Philadelphia mint. <strong>S</strong> for
            the San Francisco mint. Sometimes coins wont have a mint mark, these
            can be errors, or more commonly San Francisco regular production
            coins. All proof coins are from the San Francisco mint will have an{" "}
            <strong>S</strong> on them here are some examples of how a coin will
            be listed starting with the year, type of coin it is, typal
            variance, or error, grade, and value.
            <br />
            1. 1913-D Nickel, raised mound,<strong>VF-20</strong> $200 <br />
            2. 1970-S Eisenhower Dollar, type 1, <strong>PF-70</strong> $700
            <br />
            3. 1892cc Morgan Silver Dollar, <strong>VF-20</strong> $200
            <br />
            4. 1989-D Penny, copper planchet, <strong>MS-68</strong> $3000
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Numisma;
