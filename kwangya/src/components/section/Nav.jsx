import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Dropdown from '../../assets/img/section/menu_dropdown.svg';
import Poplink from '../../assets/img/section/mobile_menu_poplink.svg';

const Nav = () => {
    const [openSection, setOpenSection] = useState({ sc1: false, sc2: false, sc3: false });

    const toggleSection = (section) => {
        setOpenSection((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    const dropdownVariants = {
        hidden: { height: 0, opacity: 0 },
        visible: { height: 'auto', opacity: 1 },
    };

    return (
        <div className='nav-wrap'>
            <div className='category'>
                <div className='btn1' onClick={() => toggleSection('sc1')}>
                    <span>KWANGYA 119</span>
                    <img src={Dropdown} alt="Dropdown" />
                </div>
                <AnimatePresence>
                    {openSection.sc1 && (
                        <motion.div
                            className="sc1"
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={dropdownVariants}
                            transition={{ duration: 0.4 }}
                        >
                            <Link to='/none'>서비스 소개</Link>
                            <Link to='/none'>운영 프로세스</Link>
                            <Link to='/none'>HISTORY</Link>
                            <Link to='/none'>FAQ</Link>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className='btn2' onClick={() => toggleSection('sc2')}>
                    <span>제보•신고 센터</span>
                    <img src={Dropdown} alt="Dropdown" />
                </div>
                <AnimatePresence>
                    {openSection.sc2 && (
                        <motion.div
                            className="sc2"
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={dropdownVariants}
                            transition={{ duration: 0.4 }}
                        >
                            <Link to='/none'>아티스트 명예훼손</Link>
                            <Link to='/none'>허위사실/가짜뉴스</Link>
                            <Link to='/none'>오류/정정</Link>
                            <Link to='/none'>저작권 침해</Link>
                            <Link to='/none'>티켓 부정 거래</Link>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className='btn3' onClick={() => toggleSection('sc3')}>
                    <span>아이디어•제안 센터</span>
                    <img src={Dropdown} alt="Dropdown" />
                </div>
                <AnimatePresence>
                    {openSection.sc3 && (
                        <motion.div
                            className="sc3"
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={dropdownVariants}
                            transition={{ duration: 0.4 }}
                        >
                            <Link to='/none'>아이디어 광장</Link>
                            <Link to='/none'>REVIEW</Link>
                            <Link to='/none'>Makes it</Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className='link-list'>
                <div>
                    <a href='https://www.smentertainment.com/'>
                        <h3>SM ENTERTAINMENT</h3>
                        <img src={Poplink} alt="Poplink" />
                    </a>
                </div>
                <div>
                    <a href='https://www.smtown.com/'>
                        <h3>SMTOWN</h3>
                        <img src={Poplink} alt="Poplink" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Nav;
