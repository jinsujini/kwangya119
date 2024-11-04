import React from 'react';
import Marquee from 'react-fast-marquee';
import Riize from '../../assets/img/main/logo/riize.jpg';
import nct127 from '../../assets/img/main/logo/nct127.jpg';
import nctwish from '../../assets/img/main/logo/nctwish.jpg';
import tvxq from '../../assets/img/main/logo/tvxq.jpg';
import exo from '../../assets/img/main/logo/exo.jpg';

const Bot = () => {
  const contents = [
    { artist: { name: '#RIIZE', img: Riize }, message: '에 대한 ARTIST 명예 훼손 제보가 등록되었어요.' },
    { artist: { name: '#NCT 127', img: nct127 }, message: '에 대한 기타 아이디어가 등록 되었어요.' },
    { artist: { name: '#NCTWISH', img: nctwish }, message: '에 대한 콘텐츠 제안이 등록 되었어요.' },
    { artist: { name: '#TVXQ', img: tvxq }, message: '에 대한 ARTIST 명예 훼손 제보가 등록되었어요.' },
    { artist: { name: '#EXO', img: exo }, message: '에 대한 기타 아이디어가 등록 되었어요.' },
  ];

  const shuffleArray = (array) => {
    return array
      .map((item) => ({ item, sort: Math.random() }))  
      .sort((a, b) => a.sort - b.sort) 
      .map(({ item }) => item); 
  };

  const marqueeContents = shuffleArray([...Array(7)].flatMap(() => contents));

  return (
    <div className='bot container'>
      <div className="title">
        <h2>오늘까지 <span>359,063</span> 개의 생각이 모였고,</h2>
        <h2>지금도 <span>1,229</span>개의 새로운 생각이 모이고 있어요!</h2>
        <h6>2023.06.21 ~ <span>현재까지</span></h6>
        <div className="marquee_container">
          <Marquee gradient={false} speed={70} pauseOnHover={true} direction="right" autoFill="true">
            {marqueeContents.map((content, index) => (
              <div key={index} className="contents">
                <div className="profil">
                  <img src={content.artist.img} alt={`${content.artist.name} logo`} />
                </div>
                <div className="inner">
                  <span><strong>{content.artist.name}</strong>{content.message}</span>
                </div>
              </div>
            ))}
          </Marquee>

          <Marquee gradient={false} speed={65} pauseOnHover={true} delay={0} direction="right" autoFill="true">
            {marqueeContents.map((content, index) => (
              <div key={index + contents.length} className="contents">
                <div className="profil">
                  <img src={content.artist.img} alt={`${content.artist.name} logo`} />
                </div>
                <div className="inner">
                  <span><strong>{content.artist.name}</strong>{content.message}</span>
                </div>
              </div>
            ))}
          </Marquee>

          <Marquee gradient={false} speed={75} pauseOnHover={true} direction="reverse" delay={0} autoFill="true">
            {marqueeContents.map((content, index) => (
              <div key={index + 2 * contents.length} className="contents">
                <div className="profil">
                  <img src={content.artist.img} alt={`${content.artist.name} logo`} />
                </div>
                <div className="inner">
                  <span><strong>{content.artist.name}</strong>{content.message}</span>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Bot;
