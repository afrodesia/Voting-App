import React, {Component} from 'react'
import { voteWindows, voteMac, voteLinux } from '../actions'


class Logos extends Component {
  constructor(props){
    super(props)

    this.store = this.props.store
  }

  handleVoteWindows = () => {
    this.store.dispatch(voteWindows())
  }

  handleVoteMac = () => {
    this.store.dispatch(voteMac())
  }
  handleVoteLinux = () => {
    this.store.dispatch(voteLinux())
  }

  render() {
    return (
   
        
  
      <section className="logos">
        <div className="">
          <img className="windows" 
              src="img/windows.svg"
              alt="windows"
              onClick={this.handleVoteWindows} 
              />
       </div>

      <div className="">
          <img className="mac" 
              src="img/Apple-Apple.svg"
              alt="Mac" 
              onClick={this.handleVoteMac}
              />
       </div>

        <div className="">
          <img className="linux"
               src="img/linux-tux.svg"
               alt="Linux"
               onClick={this.handleVoteLinux} 
               />
       </div>
       
      </section>


    )
  }
}
export default Logos