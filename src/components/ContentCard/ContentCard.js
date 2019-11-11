import React, { useState } from "react";
import styles from './ContentCard.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ContentCard = () => (
    <div className={cx('contentcard')}>
        <div className={cx('content')}>
            <div className={cx('colline')}>
                <div className={cx('spe')}>
                    구매
                </div>
                <div className={cx('how-much')}>
                    -40,000 P
                </div>
                <div className={cx('when-buy')}>
                    2019.10.17
                </div>
                <div className={cx('buy-reason')}>
                    CLASS 구매
                </div>
                <div className={cx('balance')}>
                    잔액 32,000 P
                </div>
                <div className={cx('detail')}>
                    자세히보기
                </div>
            </div>
        </div>
    </div>
);

export default ContentCard;