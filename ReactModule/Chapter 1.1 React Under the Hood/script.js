function Counter() {
  // return <div>Count: 0</div>
  const [count, setCount] = React.useState(0);

  const increament = () => {
    setCount(count + 1);
  };

  /**
   * createElement(type: "input",
   * props?: (React.InputHTMLAttributes<HTMLInputElement> & React.ClassAttributes<HTMLInputElement>) | null,
   * ...children: React.ReactNode[]): React.DetailedReactHTMLElement<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
   */

  // return React.createElement("div", null,
  //     React.createElement("p", null, `Count: ${count}`),
  //     React.createElement("button", {onClick: increament}, `Increament`)
  // )

  /**
   * This is achieve by the babel transpiler - the conversion of html like syntax into React.createElement tree
   */
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increament}>Increament</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(Counter));
