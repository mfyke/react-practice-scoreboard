import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import Counter from './Counter';
import Icon from './Icon';

class Player extends PureComponent {

  static propTypes ={
  	changeScore: PropTypes.func,
  	removePlayer: PropTypes.func,
  	name: PropTypes.string,
  	score: PropTypes.number,
  	id: PropTypes.number,
  	index: PropTypes.number,
  	isHighScore: PropTypes.bool
  };	

  render() {
  	  const {name, removePlayer, id, changeScore, score, index, isHighScore} = this.props;
  	  console.log(`${this.props.name} rendered`);
	  return (
	    <div className="player">
	      <span className="player-name">
	        <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
	        <Icon isHighScore={isHighScore} />
	        { name }
	      </span>

	      <Counter
	       changeScore = {changeScore} 
	       score = {score}
	       index = {index}
	        />
	    </div>
	  );
  }
}

Player.defaultProps = {
	highScore: false
};

export default Player;