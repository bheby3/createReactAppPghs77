import React from 'react';
import { Link } from 'react-router-dom';
import styles from './App.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Links = () => (
  <nav  className={cx('navContainer')}>
    <Link className={cx('navSpacing')} to="/"><a>HOME</a></Link>
    <Link className={cx('navSpacing')} to={{pathname: '/memorial'}}><a>MEMORIAL</a></Link>
  </nav>
);

export default Links;