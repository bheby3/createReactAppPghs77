import React from 'react';
import Links from './Nav.js'
import {GridList, GridTile} from 'material-ui/GridList'
import classNames from 'classnames/bind';
import style from './App.css';
const cx = classNames.bind(style);

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 900,
    height: '100%',
    overflowY: 'scroll',
  },
};

const tilesData = [

  {
    img: './sandraHarmer.png',
    title: 'Sandra Harmer'
  },
  {
    img: './keithSayre.png',
    title: 'Keith Sayre',
  },
  {
    img: './annetteWall.png',
    title: 'Annette Wall',
  },
  {
    img: './frankieTaylor.png',
    title: 'Frankie Taylor',
  },
  {
    img: './rosemaryPetersen.png',
    title: 'Rosemary Petersen',
  },
  {
    img: './teresaStreet.png',
    title: 'Teresa Street',
  },
  {
    img: './monicListon.png',
    title: 'Monic Liston'
  }
];

const Memorial = () => (
  <div className={cx('App-memorial')}>
   {/* <div className={cx('App-header')}>
      <img className={cx('viking')} src="https://pbs.twimg.com/profile_images/1324402503/twitter-profile-pic_400x400.png" alt=""/>
      <div className="header" style={{fontSize: '60px', fontWeight: 900, borderBottom: '1px solid', paddingBottom: '10px'}}>PGHS Class of 77</div>
      <div className="header" style={{fontSize: '30px', fontWeight: 900, paddingTop: '10px'}}>Those who have passed away:</div>
    </div>*/}
    <img className={cx('viking3')} src="./viking.png" width='200px' height="auto" alt=""/>
    <img className={cx('viking4')} src="./viking.png" width='200px' height="auto" alt=""/>
    <div className="memorialWrapper">
      <div style={styles.root}>
        <Links/>
        <GridList
          cellHeight={290}
          cols={4}
          style={styles.gridList}
        >
          {tilesData.map((tile, index) => (
            <GridTile
              key={index}
              title={tile.title}
            >
              <img src={tile.img} alt={tile.title}/>
            </GridTile>
          ))}
        </GridList>
      </div>
    </div>
  </div>
);

export default Memorial;