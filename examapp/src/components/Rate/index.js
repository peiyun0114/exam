import propTypes from 'prop-types'
import classname from 'classnames'
import React, { Component } from 'react'

class Rate extends Component{
    static propTypes={
      count:propTypes.number,
      disabled:propTypes.bool,
      value:propTypes.number,
      onBlur:propTypes.func,
      onChange:propTypes.func
    }
    static defaultProps ={
       count:5,
       disabled:false,
       value:-1,
       onBlur:() => {},
       onChange:() => {}
    }
    constructor(props)
    {
      super(props)
      this.state={
        activeIndex:props.value >=0 ? props.value :-1,
        hoveIndex:-1
      }
    }
    componentWillMount ()
    {
       console.log(this.props.value,this.state.activeIndex)
    }
    handelMouseOver =(i) =>{    
       this.setState({
        hoveIndex:i
       })
     
    }
    handelMouseLeave = ()=>{
      this.setState({
        hoveIndex:-1
      })
    }
    handelClick = (i) =>{
     
      if(i === this.state.activeIndex)
      {
        this.setState({
          activeIndex:-1
        })
      }
       else{
        this.setState({
          activeIndex:i
        },()=>{
          this.props.onChange(this.state.activeIndex)
        })
       }
    }
    get renderRate () {
      const {count,value}=this.props
      const {hoveIndex,activeIndex}=this.state
      const rate=[]
      const rateClass={
        "rate-item":true,
        "hover":false,
        "active":false
      }
       
      for(let i=0;i<count;i++)
      {
        if(hoveIndex>0 && i<=hoveIndex)
        {
          rateClass.hover=true
          rateClass.active=false
        }
        else{
           rateClass.hover=false
           rateClass.active=false
        }
          
          if(i <= activeIndex)
          {
            rateClass.active=true
          }
          else{
            rateClass.active=false
          }
  
          
        
        rate.push(  
          <span className={classname(rateClass)} 
          key={i} 
          onMouseOver ={()=>this.handelMouseOver(i)}
          onClick={()=>this.handelClick(i)}
          >☆</span>
        )
      }
      return rate
    }
    render () {
       return(
         <div className="rate"
          onMouseLeave={()=>this.handelMouseLeave}
         >
           {this.renderRate}
         </div>
       )
    }
   }
   export default Rate