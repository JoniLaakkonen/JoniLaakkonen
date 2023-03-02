import React from "react";
import "./Header.css";
import background from "../../Assets/Images/mies-etusivu-4.jpg";

function Header() {
  return (
    <>
      <div className="header-section" >
        <div className="header-bg" style={{ backgroundImage: `url(${background})`,
          width:'100%',
          height:'100%',
          position: 'absolute',
          resizeMode: 'contain',
          zIndex: -1,
          }}>
        </div>
        <div className="header-content">
          
            <h1 className="header-text" id="osa1">Pidä huolta<br/> kehostasi. Se on ainoa kotisi,
            </h1>

            <h1 className="header-text" id="osa2"> josta et voi muuttaa <br/> pois.
            </h1>
            <h2 className="header-text_guoter">- Jim Rohn -</h2>
        </div>

      </div>
    </>
  );
}

export default Header;
