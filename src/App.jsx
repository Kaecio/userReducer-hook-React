import { useReducer } from 'react'
import './App.css'

const reducer = (state, action) => {
  switch(action.type) {
    case 'INCREMENT': 
      return { ...state, count: state.count + 1 };
    case 'TOGGLE_SHOW_TEXT':
      return { ...state, showText: !state.showText };
    case 'RESETVALUE':
      return {count: 0, showText: true };
    default:
      return state;
  }
}

function App() {
  const [ state, dispatch ] = useReducer(reducer,{
    count: 0,
    showText: true
  });

  const { count, showText } = state;
  // const [count, setCount] = useState(0);
  // const [ showText, setShowText ] = useState(true);

  const handleClick = () => {
    dispatch({ type: 'INCREMENT' });
    dispatch({ type: 'TOGGLE_SHOW_TEXT' });
  }

  const handleClickValueToInitial = () => {
    dispatch({ type: 'RESETVALUE' });
  }

  return (
    <div>
      <h1>UseReducer na Prática!!!</h1>
      <h3>{count}</h3>
      <button onClick={handleClick}>Adicionar</button>
      <button onClick={handleClickValueToInitial}>Reset</button>

      <div>
      {showText && <span>Como usar o userReducer</span>}
      </div>
    </div>
  )
}

export default App
