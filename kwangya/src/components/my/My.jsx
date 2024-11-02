import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Menu from '../section/Menu';
import Bell from '../../assets/img/my/bell.svg';
import Img from '../../assets/img/my/profil.png';
import Banner1 from '../../assets/img/my/banner1.png';
import Banner2 from '../../assets/img/my/banner2.png';
import Banner3 from '../../assets/img/my/banner3.png';
import btn_login from '../../assets/img/my/btn_login.svg';
import btn_signup from '../../assets/img/my/btn_signup.svg';

const My = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handlers = useSwipeable({
        onSwipedUp: () => setIsPopupVisible(true),
        onSwipedDown: () => setIsPopupVisible(false),
        preventScrollOnSwipe: true,
        trackMouse: true,
    });

    return (
        <div className='my container' {...handlers}>
            <div className="header">
                <img src={Bell} alt="" />
            </div>
            <div className="profil">
                <div className="img">
                    <img src={Img} alt="" />
                </div>
                <h4>지금 KWANGYA 119에 로그인해보세요.</h4>
                <h2>개인화 된 활동로그를 확인할 수 있어요!</h2>
            </div>
            <div className="wrap">
                <div className="back">
                    <div className="usermenu">
                        <div className="login">
                            <img src={btn_login} alt="" />
                            <h1>LOGIN</h1>
                        </div>
                        <div className="signup">
                            <img src={btn_signup} alt="" />
                            <h1>SIGN UP</h1>
                        </div>
                    </div>
                </div>
                <div className={`popup ${isPopupVisible ? 'visible' : ''}`}>
                    <div className="bar"></div>
                    <span>SM 아티스트와 함께 호흡하는 KWANGYA 119</span>
                    <div className="banner_wrap">
                        <div className="banner1">
                            <div className="img">
                                <img src={Banner1} alt="" />
                            </div>
                            <div className="sub">
                                <span>FAQ</span>
                                <p>사이트 이용에 필요한 질문 & 답변</p>
                            </div>
                        </div>
                        <div className="banner2">
                            <div className="img">
                                <img src={Banner2} alt="" />
                            </div>
                            <div className="sub">
                                <span>HISTORY</span>
                                <p>KWANGA 119의 지난 1년간의 HISTORY</p>
                            </div>
                        </div>
                        <div className="banner3">
                            <div className="img">
                                <img src={Banner3} alt="" />
                            </div>
                            <div className="sub">
                                <span>INFO</span>
                                <p>더 건강한 K-POP 문화를 지향하는 KWANGYA 119</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Menu />
        </div>
    );
};

export default My;
