// Navbar - hamburger

const Hamburger = ({ onHamburgerClick }) => {
  return (
    <div
      className={`hamburger hamburger--collapse`}
      onClick={e => onHamburgerClick()}
    >
      <span className='hamburger-box'>
        <span className='hamburger-inner'></span>
      </span>
    </div>
  );
};

export default Hamburger;
