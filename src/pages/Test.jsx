import { incrementByAmount,decrement, increment, reset} from "../redux/slices/couterSlice"
import { useDispatch, useSelector } from "react-redux"
function Test(){
const dispatch = useDispatch()
const counter = useSelector((state) => state.counter.value)
  return(
    <div>
    <div className="flex flex-col justify-center items-center text-2xl">
        <h1>My Counter</h1>
    </div>
    <div className="flex justify-center items-center gap-4">
       <button onClick={()=>dispatch(increment())} className="cursor-pointer"> + </button>
        <h1>{counter}</h1>
        <button onClick={()=>dispatch(decrement())} className="cursor-pointer"> - </button>
        <button onClick={()=>dispatch(incrementByAmount(5))} className="cursor-pointer"> +5 </button>
        <button onClick={()=>dispatch(reset())} className="cursor-pointer"> reset </button>
    </div>
        
    </div>
  )
}  export default Test