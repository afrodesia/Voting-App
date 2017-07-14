import React, { Component } from 'react'
import { voteWindows, voteMac, voteLinux } from '../actions'


class Results extends Component {
    constructor(props){
        super(props)
        this.store = this.props.store
    }

    // Handles the on click event dispatch 
    handleVoteWindows = () => {
        this.store.dispatch(voteWindows())
    }

    handleVoteMac = () => {
        this.store.dispatch(voteMac())
    }
    handleVoteLinux = () => {
        this.store.dispatch(voteLinux())
    }

    // Percentage of votes in by getting state.

    votesforWindowsInPercent(){
        if(this.store.getState().windows){
            return(this.store.getState().windows / (this.store.getState().windows + this.store.getState().mac + this.store.getState().linux)) * 100
        }else{
            return 0
        }
    }

    votesforlinuxInPercent(){
        

        if(this.store.getState().linux){
            return(this.store.getState().linux / (this.store.getState().linux + this.store.getState().mac + this.store.getState().windows)) * 100
        }else{
            return 0
        }
    }

    votesforMacInPercent(){
        if(this.store.getState().mac){
            return(this.store.getState().mac / (this.store.getState().mac + this.store.getState().windows + this.store.getState().linux)) * 100
        }else{
            return 0
        }
    }

    votesforWindowsInPercentStyle(){
        // e.stopProgration()
        return {
            width: this.votesforWindowsInPercent() + '%'
         }
    }

    votesforMacInPercentStyle(){
        
        return {
            width: this.votesforMacInPercent() + '%'
         }
    }
        votesforLinuxInPercentStyle(){
            
        return {
            width: this.votesforlinuxInPercent() + '%'
         }
    }
    render(){
        return(
        <div className="container">
                <div className="row">

                <article className="windows-shell shell">
                    <span className="win-cir" onClick={this.handleVoteWindows}>
                    <img className="windows" 
                    src="img/windows.svg"
                    alt="windows"
                     
                     />
                    </span>
                    <span className="push">
                    <span className="progress progress-striped active">
                        <span className="progress-bar progress-bar-windows" role="progressbar"  style={ this.votesforWindowsInPercentStyle() }>
                            <span className="vote"> Windows -{ this.votesforWindowsInPercent().toFixed(2) + '%'} </span>
                        </span>
                    </span>
                    </span>
                </article>
                </div>
              
              
               <div className="row">
                <article className="mac-shell shell">
                <span className="mac-cir" onClick={this.handleVoteMac}>
                    <img className="mac" 
                    src="img/Apple-Apple.svg"
                    alt="Mac" 
                    
                />
                </span>

                    <span className="push"> 
                    <span className="progress progress-striped active">    
                        <span className="progress-bar progress-bar-mac" role="progressbar" style={ this.votesforMacInPercentStyle() } >
                            <span className="vote">Mac - { this.votesforMacInPercent().toFixed(2) + '%'} </span>
                        </span>
                    </span>
                    </span>

                </article>
                </div>

                <div className="row">
                <article className="linux-shell shell">
                                            
                        <span className="linux-cir" onClick={this.handleVoteLinux}>
                        <img className="linux"
                        src="img/linux-tux.svg"
                        alt="Linux"
                        />
                    </span>
                    <span className="push">
                    <span className="progress progress-striped active">
                        <span className="progress-bar progress-bar-linux" role="progressbar"  style={ this.votesforLinuxInPercentStyle() }>
                        <span className="vote">Linux -{ this.votesforlinuxInPercent().toFixed(2) + '%'} </span>
                        </span>
                    </span>
                    </span>
                </article>
                </div>

            </div>    
       
        )
    }
}
export default Results