import { FaSearch, FaShareAlt } from 'react-icons/fa';
const NAVLINK = [
    { id: 1, menu: 'Missions', link: '/' },
    { id: 2, menu: 'Galleries', link: '/' },
    { id: 3, menu: 'NASA TV', link: '/' },
    { id: 4, menu: 'Follow NAS', link: '/' },
    { id: 5, menu: 'About', link: '/' },
    { id: 6, menu: 'Audiences', link: '/' }
]


const Header = () => {

    return (
        <>
            <div className="container">
                <h1><a href=""><img src={process.env.PUBLIC_URL + "/assets/img/logo.svg"} alt="" /></a></h1>
                <nav className="Gnb">
                    <ul>
                        {
                            NAVLINK.map((it, idx) => {
                                return (
                                    <li key={it.id}><a href={it.link}>{it.menu}</a></li>
                                )
                            })
                        }
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