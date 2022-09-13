const Footer = () => {
    return (
        <>
            <div className="container">
                <h1><a href=""><img src={process.env.PUBLIC_URL + "/assets/img/logo.svg"} alt="" /></a></h1>
                <ul className="footerLeft">
                    <li>National Aeronautics and Space Administration</li>
                    <li>NASA Official: Brian Dunbar</li>
                </ul>
                <ul className="footerMenu">
                    <li><a href="">No Fear Act</a></li>
                    <li><a href="">FOIA</a></li>
                    <li><a href="">Privacy</a></li>
                    <li><a href="">Office of Inspector General</a></li>
                    <li><a href="">Agency Financial Reports</a></li>
                    <li><a href="">Contact NASA</a></li>
                </ul>
            </div>




        </>
    )


}

export default Footer;