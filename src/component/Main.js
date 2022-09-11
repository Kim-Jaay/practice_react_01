const Main = () => {
    return (
        <>
            <section className="main_visual">
                <div className="slogan">
                    <p>THE</p>
                    <strong>MISSION OF</strong>
                </div>
                <div className="main_object">
                    <img src={process.env.PUBLIC_URL + "/assets/img/mv_obj.png"} alt="" />
                </div>
            </section>
            <section className="story_of_apollo">
                <div className="container">
                    <h2>APOLLO 11</h2>
                </div>
            </section>








        </>
    )

}

export default Main;