import React from 'react'
import Grp1 from '../assets/img/now/lineGrp.png'
import Grp2 from '../assets/img/now/circleGrp.png'
import icon from '../assets/img/now/Icon.svg'
import Menu from '../components/section/Menu.jsx'
 
const Now = () => {
    return (
        <div className='now container'>
            <div className="now_wrap">
            <div className="header">
                <p>KWANGYA 119</p>
                <span>NOW</span>
            </div>
            <div className="wrap">
                <div className="sum_report">
                    <div className="title">
                        <p>총 누적 신고/제안</p>
                        <img src={icon} alt="" />
                    </div>
                    <h1>359,106</h1>
                </div>
                <div className="today_report">
                    <div className="title">
                        <p>오늘 신고/제안</p>
                        <img src={icon} alt="" />
                    </div>
                    <h1>1,709</h1>
                </div>
                <div className="grap1">
                    <div className="title">
                        <p>참여 반응</p>
                        <img src={icon} alt="" />
                    </div>
                    <div className="img">
                        <img src={Grp1} alt="" />
                    </div>
                </div>
                <div className="grap2">
                    <div className="title">
                        <p>게시판별 접수 비중</p>
                        <img src={icon} alt="" />
                    </div>
                    <div className="img">
                        <img src={Grp2} alt="" />
                    </div>
                </div>
            </div>
            </div>
            <Menu />
        </div>
    )
}

export default Now
