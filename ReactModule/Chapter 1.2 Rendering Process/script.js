/**
 * React is declarative in nature, NOT imperative.
 * =>  It doesn't allow us to interact directly with the DOM, it gives us a virtual DOM
 *
 */

/**
 * Rendering process
 * - Rendering phase
 * -- Just when the app is just loaded, component is just mounted, for the very first time
 *
 * - Commit phase
 * -- When the state updates, the component is re-rendered
 *
 */

function Counter() {
  let [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
    // console.log("handleClick with count: ", count);
    // count = count + 1;
  };
  
  const counter = React.createElement("div", {style: {display: "flex", gap: "2.5rem"}},
    React.createElement("p", null, `Count: ${count}`),
    React.createElement("button", {onClick: handleClick}, "Add")
  );

  console.log("count Rendered", counter);
  return (
    counter
  );
}

function CounterParent(){
    const [showMessage, setShowMessage] = React.useState(false);
    const [showMessage2, setShowMessage2] = React.useState(false);
    console.log("parent rendered");
    const toggleMessages = ()=>{
        setShowMessage(!showMessage);
        setShowMessage2(!showMessage2);
    }
    return(
        <div>
            <Counter />
            <br />
            {showMessage && <p>Secret Message</p>}
            {showMessage2 && <p>Another Secret Message</p>}
            <button onClick={toggleMessages}>Parent Button</button>
            <br />
            <FrameWorks />
        </div>
    )
}

function FrameWorks(){
    const [frameWorks, setFrameWorks] = React.useState([
        {id: 67, name: "React"},
        {id: 69, name: "Angular"}
    ]);

    return (
        <div>
            {frameWorks.map((item) => <p key={item.id}>{item.name}</p>)}
            <button onClick={()=>setFrameWorks([{id: Math.random(), name: "Vue"}, ...frameWorks])}>Add Vue</button>
        </div>
    )
}


const actualDOMRoot = document.getElementById("root");
const virtualDOMRoot = ReactDOM.createRoot(actualDOMRoot);
virtualDOMRoot.render(React.createElement(CounterParent));
