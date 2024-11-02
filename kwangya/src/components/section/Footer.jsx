import React from 'react'
import Dropdown from '../../assets/img/section/menu_dropdown.svg';

const Footer = () => {
  return (
    <div className='footer container'>
      <div className="info">
        <h4>※ 'KWANGYA 119' 게시판 운영 시간 : 평일 10:00 - 18:00 (주말, 공휴일 제외)</h4>
        <ul>
          <li>게시물이 접수된 순서에 따라 순차적으로 답변을 남겨드리지만, 동일/유사한 내용의 접수 건에 대해서는 우선적으로 답변이 남겨질 수 있습니다.</li>
          <li>광고, 도배 등 FAQ에 안내된 '종결 유형'및 게시판 운영 취지에 맞지 않는 부적절한 게시물은 답변 없이 종결될 수 있습니다. </li>
          <li>폭언, 욕설, 협박 등의 글을 남기실 경우, 산업안전보건법 등 관련 법에 따라 조치될 수 있습니다.</li>
        </ul>
      </div>
      <div className="line"></div>
      <div className="faq">
        <div className="btn">
          <span>서비스 문의 열기</span>
          <img src={Dropdown} alt="Dropdown" />
        </div>
        <span>개인정보처리방침</span>
        <span>이용약관</span>
      </div>
      
    </div>
  )
}

export default Footer
