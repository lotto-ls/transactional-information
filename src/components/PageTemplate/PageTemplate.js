import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const PageTemplate = ({children}) => (
    <div className={cx('page-template')}>
        <div className={cx('title-filter')}>
            <div className={cx('title-style')}>
                    전체보기
            </div>
            <div className={cx('title-style')}>
                    구매
            </div>
            <div className={cx('title-style')}>
                    환전
            </div>
            <div className={cx('title-style')}>
                    판매
            </div>
            <div className={cx('title-style')}>
                    충전
            </div>
        </div>
        <div className={cx('date-filter')}>
            기간설정
            <div className={cx('date-set')}>
                2019.07 - 2019.11
            </div>
        </div>
    </div>
);

export default PageTemplate;