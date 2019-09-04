import React,{Component} from 'react'

const lazyLoad = (ansyComponent) =>{
    return class extends Component{
        state ={
            component:null
        }
        componentWillMount () 
        {
            if(!this.state.component)
            {   
                this.loadComponent()
            }
        }
        loadComponent ()
        {
            ansyComponent().then((res)=>{
                this.setState({
                    component:res.default
                })
            })
        }
        render ()
        {
            const AsyncComPonent=this.state.component
            if(AsyncComPonent)
            {
                return <AsyncComPonent  {...this.props}/>
            }
            else{
                return (
                      <div>...loading</div>
                   )
            }
        }
    }   
}

export default lazyLoad 