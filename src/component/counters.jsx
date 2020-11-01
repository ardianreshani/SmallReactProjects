import React, { Component } from 'react';
import Counter from './counter';


export class counters extends Component {
  
  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', marginLeft: '250px'}}>
        
        {this.props.counters.map( counter => (
          <Counter key={counter.id} onDelete={ this.props.onDelete} 
          onIncrement={this.props.onIncrement} counter={counter} onDecrement={this.props.onDecrement}  /> 
        
        ))}
           <button onClick={this.props.onReset} className="btn btn-secondary btn-sm" style={{width: '650px'}}>Clear All</button>
      </div>
    )
  }
}

export default counters
