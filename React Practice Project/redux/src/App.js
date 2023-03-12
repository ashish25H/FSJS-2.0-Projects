import { useState } from "react";
import { increment, decrement, incrementByValue } from "./Counterslice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const [input, setInput] = useState("");
  const count = useSelector((state) => state.counter.value); //useSelector connect to store to get the value of state.
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <input
          type="number"
          placeholder="Enter number"
          value={input}
          onchange={(e) => setInput(e.target.value)}
        />
        <button onChange={() => dispatch(incrementByValue(+input))}>
          Increse by Value
        </button>
      </div>

      <div>
        <button onClick={() => dispatch(increment())}>Increse</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>Increse</button>
      </div>
    </div>
  );
}

export default App;
