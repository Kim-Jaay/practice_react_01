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

            <section className="earth">
                <div className="container">
                    <p>그들은 또한 정지 사진 카메라와 동영상 카메라로 달 지형, 배치된<br />
                        과학 장비, LM 우주선 및 서로를 광범위하게 촬영해야 했습니다.<br />
                        이것은 "자유 귀환" 궤적을 비행하는 마지막 아폴로 임무였으며,<br />
                        이는 달 궤도에 진입하기 전에 언제든지 임무를 중단할 수 있도록<br />
                        하여 엔진 발사 없이 지구로 귀환할 수 있게 합니다.</p>
                    <a href="">Read More</a>
                </div>
            </section>











        </>
    )

}

export default Main;