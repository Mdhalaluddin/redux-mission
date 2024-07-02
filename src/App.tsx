import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="border flex border-purple-300 rounded-md bg-sky-200 p-10 font-semibold text-white">
          <button
            onClick={() => dispatch(incrementByValue(5))}
            className="px-3 py-3 rounded-md bg-green-500 text-xl font-semibold text-white"
          >
            incrementByValue 5
          </button>
          <button
            onClick={() => dispatch(increment())}
            className="px-3 py-3 rounded-md bg-green-500 text-xl font-semibold text-white"
          >
            increment
          </button>
          <h2 className="text-3xl mx-10 text-black font-bold">{count}</h2>
          <button
            onClick={() => dispatch(decrement())}
            className="px-3 py-3 rounded-md bg-red-500 text-xl font-semibold text-white"
          >
            decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
