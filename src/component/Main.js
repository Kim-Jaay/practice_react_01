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
            <section className="eagle">
                <div className="container">
                    <h2>"The Eagle has landed…"</h2>
                    <p>아폴로 11호의 주요 목표는 1961년 5월 25일 <br />
                        존 F. 케네디 대통령이 설정한 국가 목표인 유인<br />
                        달 착륙 및 지구 귀환을 완료하는 것이었습니다.
                    </p>
                </div>
                <img src={process.env.PUBLIC_URL + "/assets/img/section_01.png"} alt="" />
            </section>











        </>
    )

}

export default Main;