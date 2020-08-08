import React, { Component } from 'react'



export class LevelSelector extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       level:"medium"

    }
  // this.changeLevel =this.changeLevel.bind(this)
  }
  // changeLevel(event){
  //   this.setState({
  //     level:event.target.value
  //   },()=><MemoryGame level = {this.state.level}/> )
    
  // }

  sendingData =(value)=>{
    this.props.changeLevel(value)
  }
  render() {
    return (
      <>
    
      <div onChange={(event)=>this.sendingData(event.target.value)} >
        {/* <label>
    <input  type="radio" name="level" value="easy"/>Easy
</label>
<label>
    <input  type="radio" name="level" defaultChecked value="medium"/>Medium
</label>
<label>
    <input  type="radio" name="level" value="hard"/>Hard
</label>
<label>
    <input type="radio" name="level" value="expert"/>Expert
</label> */}

<div  className="custom-control custom-radio custom-control-inline">
  <input type="radio" className="custom-control-input" id="defaultInline1" value="easy" name="level"/>
  <label className="custom-control-label" htmlFor="defaultInline1">Easy</label>
</div>


<div  className="custom-control custom-radio custom-control-inline">
  <input type="radio" className="custom-control-input" id="defaultInline2" value="medium" name="level" defaultChecked />
  <label className="custom-control-label" htmlFor="defaultInline2">Medium</label>
</div>


<div  className="custom-control custom-radio custom-control-inline">
  <input type="radio" className="custom-control-input" id="defaultInline3" value="hard" name="level"/>
  <label className="custom-control-label"  htmlFor="defaultInline3">Hard</label>
</div>

<div  className="custom-control custom-radio custom-control-inline">
  <input type="radio" className="custom-control-input" id="defaultInline4" value="expert" name="level"/>
  <label className="custom-control-label" htmlFor="defaultInline4">Expert</label>
</div>
</div>
      </>
      

      
    )
  }
}

export default LevelSelector
