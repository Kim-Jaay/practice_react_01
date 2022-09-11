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

            <section className="moon">
                <img src={process.env.PUBLIC_URL + "/assets/img/section_02.png"} alt="" />
                <p>추가 비행 목표에는 달 착륙선 또는 LM 승무원의 과학적 탐사가 포함되었습니다.<br />
                    지구에 신호를 전송하기 위한 텔레비전 카메라의 배치; 및 태양풍 구성 실험,<br />
                    지진 실험 패키지 및 레이저 범위 재귀반사기의 배치. 탐사하는 동안 두<br />
                    우주비행사는 지구로 돌아갈 달 표면 물질의 샘플을 수집해야 했습니다. </p>
            </section>

            <section className="motion">
                <div className="container">
                    <img src={process.env.PUBLIC_URL + "/assets/img/section_03.png"} alt="" />
                    <div className="path">
                        <img src={process.env.PUBLIC_URL + "/assets/img/Ellipse.svg"} alt="" />
                    </div>
                    <div className="ball"></div>
                </div>

            </section>











        </>
    )

}

export default Main;