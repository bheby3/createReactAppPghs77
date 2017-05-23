import React from 'react';
import Links from './Nav.js'
import {List, ListItem} from 'material-ui/List';
// import Divider from 'material-ui/Divider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import classNames from 'classnames/bind';
import axios from 'axios';
import styles from './App.css';
import autoBind from 'react-autobind';
import StripeCheckout from 'react-stripe-checkout';
const cx = classNames.bind(styles);

export default class Home extends React.Component {
 constructor(props) {
        super(props);
   autoBind(this);
this.state = {
  value: 3000
};
 }

 componentWillUnmount() {
   this.setState({
     value: {}
   })
 }

  onToken = (token) => {
    console.log('token: ', token);
    axios({
      method: 'POST',
      url: `/charged`,
      data: {
        token: token,
        amount: this.state.value
      }
    }).then(response => {
      console.log('response: ', response);
    })
  }

    handleChange = (event, index, value) => this.setState({value});

    render() {
    return (
        <div className="App">
    {/*<div className={cx('App-header')}>*/}
    {/*<img className={cx('viking')} src="https://pbs.twimg.com/profile_images/1324402503/twitter-profile-pic_400x400.png" alt=""/>*/}
    {/*<div className="header" style={{fontSize: '60px', fontWeight: 900, borderBottom: '1px solid', paddingBottom: '10px'}}>PGHS Class of 77</div>*/}
    {/*<div className="header" style={{fontSize: '30px', fontWeight: 900, paddingTop: '10px'}}>40th High School Reunion</div>*/}
    {/*</div>*/}
    <img className={cx('viking1')} src="./viking.png" width='300px' height="auto" alt=""/>
    <img className={cx('viking2')} src="./viking.png" width='300px' height="auto" alt=""/>
    <div className="homeWrapper">
      <div className="list">
        <h1 className="header" style={{margin: 0}}>
          <h2  style={{margin: 10}}>Events:</h2>
        </h1>
        <h2 className="header" style={{margin: 0, display: 'flex', flexDirection: 'column', width: '100%', textAlign: 'center'}}>
          <h2 style={{margin: 10}}>Friday, July 28th </h2>
          <h3 style={{margin: 10}}>At Pleasant Grove High School</h3>
        </h2>
        <Links/>
        <div className="contact">CONTACT: colleenroundy3@gmail.com</div>

          <div className="searchList1">We are looking for these classmates:</div>
          <div className="searchList">Julie Jolley</div>
          <div className="searchList">Jenny Parker McEwan</div>
          <div className="searchList">Rick Patrick</div>
          <div className="searchList">Deborah Sargent</div>
          <div className="searchList">Kirk Frampton</div>

        <List>
          <ListItem><div className="bold-title">Classic Car Show 6:00 - 7:00pm</div></ListItem>
          <ListItem><div className="bold-title">Poker Run <span >7:00 - 8:00pm:</span>  Kind of a game challenge Scavanger Hunt.  Lots of fun, with prizes.</div> </ListItem>
          <ListItem><div className="bold-title">Tour the High School <span >8:00 - 9:00pm:</span>  It's definitely not the same as when we were there.</div></ListItem>
          <ListItem><div className="bold-title">Ice-cream social <span >9:00 - 10:00pm:</span>  Nice way to relax and to catch up with everyone.</div></ListItem>
        </List>

        <h2 className="header">
          <h1 style={{margin: 10}}>Saturday, July 29th </h1>
        </h2>
        <List>

          <ListItem>
            <div className="bold-title"><span>Hike to the "G" 10:00am:  </span>
              Leave from Kiwanis park at the top of 200 S. (Battle Creek).
              <span> For some of us it might be the last time before our knees give out.  We're not getting any younger.
            For those who can’t do the hike, come anyway and watch live pictures and video from drones of those making the hike.
            Water will be provided.
          </span></div>
          </ListItem>
          <ListItem><div className="bold-title"><span>At Quiet Meadow Farms in Mapleton for Mix & Mingle 4:00 - 6:00pm. </span></div></ListItem>
          <ListItem><div  className="bold-title"><span>Dinner 6:00pm:</span> $30.00 per person</div></ListItem>
          <ListItem>
            <div className="bold-title">Make checks payable to: Colleen Roundy</div>
            <div className="bold-title">Mail to: 1025 E. 400 S. American Fork, UT, 84003</div>
          </ListItem>

          <div className="center">
              <span className="bold-title">Pay Online:</span>
            <div>
            <SelectField
              floatingLabelText="Select Quantity"
              value={this.state.value}
              onChange={this.handleChange}
              floatingLabelStyle={{color: 'white'}}
              hintStyle={{text: 'white'}}
              menuStyle={{color: 'white'}}
              labelStyle={{color: 'white'}}
              style={{color: 'white'}}
            >
              <MenuItem value={3000} primaryText="$30 - 1 dinner" />
              <MenuItem value={6000} primaryText="$60 - 2 dinners" />
              <MenuItem value={9000} primaryText="$90 - 3 dinners" />
              <MenuItem value={12000} primaryText="$120 - 4 dinners" />
            </SelectField>
            </div>
          </div>
          <br/><br/>
            <div className="center" >
                <StripeCheckout
                  token={this.onToken}
                  stripeKey="pk_live_sKRwY9XtCZo6AmmgsfSZb20I"
                  image="./viking.png"
                  panelLabel={`Pay`}
                  amount={this.state.value}
                  currency="USD"
                />
            </div>


          <ListItem>
            <div className="bold-title"><span >Special Guests:</span>
              <div >Coach Darold Henry</div>
              <div >Brother Dale Young</div>
            </div>
          </ListItem>
          <ListItem><div className="bold-title">Wrap it up at 10:00pm.</div></ListItem>
        </List>
      </div>

    </div>
  </div>
);
    }  }
