import * as ReactDOMClient from 'react-dom/client';
import HomePage from './Pages/homePage'
function App({ callback }) {
  
  return (
    <div ref={callback}>  
      <HomePage/>
    </div>
  );
}

const rootElement = document.getElementById("root");

const root = ReactDOMClient.createRoot(rootElement);
root.render(<App callback={() => console.log("renderered")} />);