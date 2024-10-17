// import "flowbite";
// import "./App.css";
// import Header from "./components/Header";
// import Routing from "./statics/Routes";
// import Footer from "./components/Footer";
//
// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Routing />
//       <Footer />
//     </div>
//   );
// }
//
// export default App;

import { useLocation } from "react-router-dom";
import "flowbite";
// import "./App.css";
import Header from "./components/Header";
import Routing from "./statics/Routes";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const is404 = location.pathname === "/404";

  return (
    <div className="App">
      {!is404 && <Header />}
      <Routing />
      {!is404 && <Footer />}
    </div>
  );
}

export default App;
