const Main = () => {
    return (
        <>
            <section className="main_visual">
                <div className="container">
                    <h2><span>THE</span><br />
                        <strong>MISSION OF</strong>
                    </h2>
                    <div className="main_object">
                        <img src={process.env.PUBLIC_URL + "/assets/img/mv_obj.png"} alt="" />
                    </div>
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