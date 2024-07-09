import React,{useState} from "react";

function App() {
  const [Count,setcount]=useState(0);
  return (
    <div className="Container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>Counter App</h1>
          <div className="my-5"></div>
          <h2 className="my-5">{Count}</h2>
          <button class="btn btn-primary my-5" onClick={()=>setcount(Count + 1)}> Increment </button>
          <button class="btn btn-secondary my-5" onClick={()=>setcount(Count - 1)}> Decrement </button>
          <button class="btn btn-tertiary my-5" onClick={()=>setcount(0)}> Reset </button>
        </div>

      </div>
      
    </div>
  );
}

export default App;
