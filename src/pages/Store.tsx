import type { DataType } from '../../types/dataTypes'
import CardCategory from '../components/cardCategory'
import { storeItems } from '../data/storeItems'

export default function Store() 
{
    return (
     <div className="flex justify-center items-center w-full my-4">
       <div className='flex flex-col items-start justify-center gap-4'>
        <h1 className='text-[32px] font-bold'>Store</h1>
        <div className="flex justify-center items-center gap-4 flex-wrap">
            {storeItems.map(( item : DataType , index : number ) => 
              {
                return (
                    <div key={index}>
                        <CardCategory  obj={item} />
                    </div>
                )
              }
            )}
        </div>
       </div> 
     </div>
    )
}