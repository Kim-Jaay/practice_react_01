import { FaSearch, FaShareAlt } from 'react-icons/fa';

const Header = () => {

    return (
        <>
            <div className="container">
                <h1><a href=""><img src={process.env.PUBLIC_URL + "/assets/img/logo.svg"} alt="" /></a></h1>
                <nav className="Gnb">
                    <ul>
                        <li><a href="">Missions</a></li>
                        <li><a href="">Galleries</a></li>
                        <li><a href="">NASA TV</a></li>
                        <li><a href="">Follow NASA</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Audiences</a></li>
                    </ul>
                </nav>
                <div className="icon">
                    <a href=""><FaSearch color="white" /></a>
                    <a href=""><FaShareAlt color="white" /></a>
                </div>
            </div>
        </>
    )


}

export default Header;