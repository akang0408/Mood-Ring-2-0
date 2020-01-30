import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions.js';
import MoodDisplay from './moodDisplay.jsx';
import Calendar from 'react-calendar';

const mapStateToProps = (reduxState) => {
    //used to bring in the pieces of state that the components on this page will use
    return {
      username: reduxState.username,
      currentUser: reduxState.currentUser,
      moods: reduxState.moods
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveMoods: (moods) => {
      dispatch(actions.saveMoods(moods))
    }
  }
}

class MoodContainer extends Component {
    constructor(props) {
        super(props);
      this.state = {
        currentDay: '',
      }

      this.displayEvent = this.displayEvent.bind(this);
    }

    displayEvent(e) {
      let dateObj = e;
      let month = dateObj.getUTCMonth() + 1; 
      if (month < 10) {
        month = `0${month}`;
      }

      let day = dateObj.getUTCDate();
      if (day < 10) {
        day = `0${day}`;
      };
      let year = dateObj.getUTCFullYear();
      let newDate = year + "-" + month + "-" + day;

      console.log(newDate);

      this.setState({
        currentDay: newDate,
      })
    }

    componentDidMount() {
      fetch('/getUserMoods', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: this.props.currentUser }),
    })
      .then(response => response.json())
      .then(response => {
        console.log('this is response', response)
        this.props.saveMoods(response)
      })
      .catch(err => console.log(err))
    }
    render() {
      const moodArray = [];
      const moodz = this.props.moods
      for (let i = 0; i<moodz.length;i+=1) {
        moodz[i].created_date = moodz[i].created_date.slice(0,10);
      }
      moodz.sort((a,b) => {
        if (a.created_date < b.created_date) return -1;
        if (a.created_date > b.created_date) return 1;
        return 0;
      });
      // console.log("Ordered:", moodz);
      for (let i = 0; i < moodz.length; i += 1) {
        // console.log(moodz[i].created_date)
        moodArray.push(<MoodDisplay date={moodz[i].created_date} mood={moodz[i].mood}></MoodDisplay>);
      }


      for (let j = 0; j < moodz.length; j += 1) {
        if (moodz[j].created_date === this.state.currentDay) {
          alert(moodz[j].mood);
        }
      }




      return (
        <div>
            {moodArray}
            <Calendar onClickDay={this.displayEvent} />
        </div>
      )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoodContainer);