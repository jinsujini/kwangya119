import React from 'react';
import BackImg from '../../assets/img/main/main-back.png';
import review from '../../assets/img/main/card02.png';
import idea from '../../assets/img/main/card03.png';
import report from '../../assets/img/main/card04.png';
import cardnews1 from '../../assets/img/main/mid2/cardnews1.png'
import cardnews2 from '../../assets/img/main/mid2/cardnews2.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/swiper-bundle.css';

const Mid = () => {
    return (
        <div className='mid'>
            <div className="mid1">
                <h4>새로워진 <span>KWANGYA 119</span></h4>
                <h2>그 시작을 <strong> 지금 함께 </strong>하세요.</h2>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{
                        delay:2000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className='swipe'
                >

                    <SwiperSlide>
                        <div className="card1">
                            <div className="img"><img src={review} alt="review" /></div>
                            <div className="title">REVIEW</div>
                            <h3>리뷰</h3>
                            <span>
                                <strong>BEST REVIEWER를 선정</strong>
                                <br />선물을 보내드립니다.
                            </span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card2">
                            <div className="img"><img src={idea} alt="idea" /></div>
                            <div className="title">IDEA SQUARE</div>
                            <h3>아이디어 광장</h3>
                            <span>
                                SM ENT 아티스트에게 필요한
                                <br /><strong>의견과 제안을 기다립니다.</strong>
                            </span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card3">
                            <div className="img"> <img src={report} alt="report" /></div>
                            <div className="title">REPORT CENTER</div>
                            <h3>제보<span>•</span>신고 센터</h3>
                            <span>
                                소중한 사람을 지키는 마음으로,
                                <br /><strong>클린한 문화에 기여하고 있습니다.</strong>
                            </span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card1">
                            <div className="img"><img src={review} alt="review" /></div>
                            <div className="title">REVIEW</div>
                            <h3>리뷰</h3>
                            <span>
                                <strong>BEST REVIEWER를 선정</strong>
                                <br />선물을 보내드립니다.
                            </span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card2">
                            <div className="img"><img src={idea} alt="idea" /></div>
                            <div className="title">IDEA SQUARE</div>
                            <h3>아이디어 광장</h3>
                            <span>
                                SM ENT 아티스트에게 필요한
                                <br /><strong>의견과 제안을 기다립니다.</strong>
                            </span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card3">
                            <div className="img"> <img src={report} alt="report" /></div>
                            <div className="title">REPORT CENTER</div>
                            <h3>제보<span>•</span>신고 센터</h3>
                            <span>
                                소중한 사람을 지키는 마음으로,
                                <br /><strong>클린한 문화에 기여하고 있습니다.</strong>
                            </span>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <img src={BackImg} alt="BackImg" className='backImg' />
            </div>
            <div className="mid2">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }} 
                    modules={[Pagination]}
                    className="news"
                >
                    <SwiperSlide className="news1">
                        <img src={cardnews1} alt="news1" />
                        <div className="info">
                            <div className="title">aespa</div>
                            <h3>미니 5집 앨범 'Whiplash' <br />REVIEW 이벤트 참여하기!</h3>
                            <span>쿨하고 당당한😎 에스파의 매력 선사</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="news2">
                        <img src={cardnews2} alt="news2" />
                        <div className="info">
                            <div className="title">Makes it</div>
                            <h3>SM 창립 30주년 기념<br />
                                사옥 미디어월 영상 콘텐츠 공모</h3>
                            <span>선정작 스페셜 혜택 🎁 확인하기</span>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Mid;
