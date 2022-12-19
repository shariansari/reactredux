import './App.css';
import { useSelector ,useDispatch } from 'react-redux';
import { incNum ,decNum } from './actions';

function App() {
  const count =useSelector((state) => state.changeTheNumber);
  const dispatch  =useDispatch();

  return (
    <div className="App">
     <h1>Incremnt / Decrement counter</h1>
     <div>
      <button  onClick={ ()=>dispatch(decNum())}>-</button><span>{count}</span><button onClick={()=>dispatch(incNum(10))}>+</button>
     </div>
    </div>
  );
}

export default App;