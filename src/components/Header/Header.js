import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Header = () => (
    <header className={cx('header')}>
        <div className={cx('header-title')}>
            거래내역
        </div>
        <div className={cx('header-content')}>
            <div className={cx('point')}>
                <div className={cx('point-title')}>
                    <div className={cx('pixel-point')}>
                        <div className={cx('my-pixel-point')}>
                            MY PIXEL POINT
                        </div>
                    </div>
                    
                    <div className={cx('pixel-point')}>
                        PIXEL POINT
                    </div>
                    
                    <div className={cx('tip-point')}>
                        TIP POINT
                    </div>
                </div>
                <div className={cx('point-content')}>
                    <div className={cx('point-count')}>
                        <div className={cx('my-pixel-point-p')}> 
                            2,340,000 P
                        </div>
                    </div>
                    <div className={cx('point-count')}>
                        2,340,000 P
                    </div>
                    <div className={cx('point-count')}>
                        0 P
                    </div>
                </div>
            </div>
            <div className={cx('pixel-point-but')}>
                PIXEL POINT 충전
            </div>
        </div>
    </header>
);

export default Header;