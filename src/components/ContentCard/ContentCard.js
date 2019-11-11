import React from "react";
import styles from './ContentCard.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ContentCard = () => (
    <div className={cx('contentcard')}>
        <div className={cx('content')}>
            테이블내용이 들어갈 곳
        </div>
    </div>
);

export default ContentCard;