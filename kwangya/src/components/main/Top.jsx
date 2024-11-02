import React, { useState, useEffect } from 'react';
import BackImg from '../../assets/img/main/main-back.png';
import Text1 from '../../assets/img/main/text/tx01.svg';
import Text2 from '../../assets/img/main/text/tx02.svg';
import Text3 from '../../assets/img/main/text/tx03.svg';
import Text4 from '../../assets/img/main/text/tx04.svg';
import SubTitle from '../../assets/img/main/text/prg.svg';
import bld01_01 from '../../assets/img/main/text/bld01-01.svg';
import bld01_02 from '../../assets/img/main/text/bld01-02.svg';
import bld02_01 from '../../assets/img/main/text/bld02-01.svg';
import bld02_02 from '../../assets/img/main/text/bld02-02.svg';
import bld03_01 from '../../assets/img/main/text/bld03-01.svg';
import bld03_02 from '../../assets/img/main/text/bld03-02.svg';
import bld04_01 from '../../assets/img/main/text/bld04-01.svg';
import bld04_02 from '../../assets/img/main/text/bld04-02.svg';
import bld05_01 from '../../assets/img/main/text/bld05-01.svg';
import bld05_02 from '../../assets/img/main/text/bld05-02.svg';

const images = [
    { img01: bld01_01, img02: bld01_02 },
    { img01: bld02_01, img02: bld02_02 },
    { img01: bld03_01, img02: bld03_02 },
    { img01: bld04_01, img02: bld04_02 },
    { img01: bld05_01, img02: bld05_02 },
];

const texts = [
    'muse', 'insight', 'drama', 'energy', 'friend'
];


const Top = () => {
    const [index, setIndex] = useState(0);
    const [bStyle, setBStyle] = useState({
        width: '0%',
        transition: 'width 0.8s ease',
    });

    const [spanFadeStyle, setSpanFadeStyle] = useState({
        opacity: 0,
        transition: 'opacity 0.3s ease',
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setBStyle({ width: '0%', transition: 'width 0.5s ease' });
            setSpanFadeStyle({ opacity: 0, transition: 'opacity 0.2s ease' });

            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % images.length);

                setBStyle({
                    width: '100%',
                    transition: 'width 0.5s ease',
                });

                setTimeout(() => {
                    setSpanFadeStyle({ opacity: 1, transition: 'opacity 0.5s ease' });
                }, 300);
            }, 500);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const currentImage = images[index];
    return (
        <div className="top">
            <div className="title">
                <div className="line1">
                    <img src={Text1} alt="" />
                    <div className="b" style={bStyle}>
                        <span style={spanFadeStyle}>
                            <img src={currentImage.img01} alt={`bld${index + 1}-01`} />
                        </span>
                    </div>
                    <img src={Text2} alt="" />
                </div>
                <div className="line2">
                    <img src={Text3} alt="" />
                </div>
                <div className="line3">

                    <div className="b" style={bStyle}>
                        <span style={spanFadeStyle}>
                            <img src={currentImage.img02} alt={`bld${index + 1}-02`} />
                        </span>
                    </div>


                    <div className="maxW">
                        <div className="box" style={bStyle}>
                            <span style={spanFadeStyle}>
                                {texts[index]}
                            </span>
                        </div>
                    </div>

                    <img src={Text4} alt="" />
                </div>
            </div>
            <div className="subtitle">
                <img src={SubTitle} alt="" />
            </div>
            <img src={BackImg} alt="BackImg" className='backImg' />
        </div>
    )
}

export default Top
