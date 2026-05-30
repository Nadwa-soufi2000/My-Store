

export type DataType = {
    id : string ,
    name : string ,
    price : string ,
    imgUrl : string
}

export type childrenType = 
{
    children : React.ReactNode
}

export type CartItemType = 
{
    id : string ,
    name : string ,
    price : string ,
    imgUrl : string
}

export type ActionType = 
{
    type : string , 
    payload : CartItemType
}

export type contextData = 
{
    cartItems: CartItemType[],
    ActionTrigger: React.Dispatch<ActionType>
}

