import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import type { DataType } from '../../types/dataTypes'
import formatCurrency from "./formatCurrency";
import { Button } from "./ui/button";

export default function CardCategory( { obj } : {obj : DataType} ) 
{
   const quantity = 0 ;

    return (
        <Card className={`w-[300px] ${quantity === 0 ? 'h-[350px]' : 'h-[400px]'}`}>
          <CardHeader className="w-full">
            <img  
               src={obj.imgUrl} 
               className="h-[200px] w-full"
               alt='' 
             />
          </CardHeader>
          <CardContent className="flex flex-col gap-9">
             <CardTitle className="flex justify-between items-center w-full">
               <span className="text-[20px]">{obj.name}</span>
               <span className="text-gray-400 text-[13px]">{formatCurrency(parseFloat(obj.price))}</span>
             </CardTitle>
             <div className="w-full">
              {quantity === 0 ?
                <Button className="w-full bg-blue-600 text-white h-[40px] rounded-[12px]" variant="default">Add to Cart</Button>
                :
                <div className ="flex flex-col justify-center items-center gap-3">
                  <div className="flex items-center gap-2">
                    <Button className=" w-[40px] bg-blue-600 text-white h-[40px] rounded-[12px] text-[19px]">-</Button>
                    <span className="text-[20px] text-gray-400">1 in cart</span>
                    <Button className="w-[40px] bg-blue-600 text-white h-[40px] rounded-[12px] text-[19px]">+</Button>
                  </div>
                  <Button className="w-[170px] bg-red-600 text-white h-[40px] rounded-[12px]">Remove</Button>
                </div>
              }
             </div>
          </CardContent>
        </Card>
    )
}