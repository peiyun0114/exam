import dynamic from './dva/dynamic'
const dynamicPage=(models = [],component)=>{
    return dynamic({
        
        models:()=>models.map((name)=>{
            return import(`../models/${name}`)
        }),
        component:component
    })
}
export default dynamicPage