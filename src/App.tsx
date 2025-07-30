// import { useEffect } from "react";
import { GlobalContextProvider } from "./context/Create"
import AppRouter from "./routes/Router"
import './styles/button.css';
// import i18n from "./utlis/i18n";

const App = () => {
  
// useEffect(() => {
//   if (i18n.language === 'ta') {
//     const walkDOM = (node: any) => {
//       if (node.nodeType === 3) {
//         // node.nodeValue = node.nodeValue?.replace(/Carmel/g, 'கார்மெல்');
//         // node.nodeValue = node.nodeValue?.replace(/church/g, 'ஆலயம்');
//       } else {
//         node.childNodes.forEach(walkDOM);
//       }
//     };

//     walkDOM(document.body);
//   }
// }, [i18n.language]);
  return (
    <GlobalContextProvider>
      <AppRouter />
    </GlobalContextProvider>
  )
}

export default App