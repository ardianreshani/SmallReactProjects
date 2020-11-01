import React, { Component } from "react";

class Counter extends Component {
 
 
  render() {
    return (
      <div  style={{width: '650px', marginTop: '50px', textAlign: 'center'}}>
        <img style={{width: '80px'}} src="https://media.tracfone.com/wps/contenthandler/!ut/p/digest!sfLbKdxoNCsel6a-Kq4rLA/dav/content/libraries/wcm.library.phones/components/STSAS205DCP/wcm.comps.image/st_ecom_large1.png" alt="img" />
        <span style={{marginLeft: '250px'}} className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button style={{marginLeft:'350px'}}
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm "
        >
          +
        </button>
        <button className="btn btn-secondary btn-sm m-2 "  onClick={() => this.props.onDecrement(this.props.counter)}> -</button>
        <button onClick={ () => this.props.onDelete(this.props.counter.id)}  className="btn btn-danger btn-sm m-2 ">X</button>
        <hr></hr>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
