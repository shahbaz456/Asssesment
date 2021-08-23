import "./App.css";
import { incNumber } from "./actions";
import { decNumber } from "./actions";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const changeTheNumber = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="main-div">
        <div class="container">
          <h1>Increment/Decrement counter</h1>

          <div class="quantity">
            <button
              class="minus"
              title="Decrement"
              onClick={() => dispatch(decNumber())}
            >
              -
            </button>
            <input
              name="quantity"
              type="text"
              class="quantity__input"
              value={changeTheNumber}
            />
            <button
              class="plus"
              title="Increment"
              onClick={() => dispatch(incNumber(1))}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
