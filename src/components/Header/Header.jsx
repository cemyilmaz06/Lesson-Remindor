import "./Header.css"
import logo from "./logo_white.png"
const Header = () => {
  return (
    <div className="header">
      <div className="imgDiv">
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="baslikDiv">
        {/* <h1 className="baslik">Clarusway</h1> */}
      </div>
    </div>
  );
};
export default Header;
