export const incNum =(num)=>{
    return{
        type:"INCREMENT",
        payLoad:(num),
    }
}

export const decNum =()=>{
    return{
        type:"DECREMENT"
    }
}