import { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       Hellow
//     </div>
//   );
// }



// class Test1 extends Component{
//   render(){
//     return(
//       <body>
//      <div class="te">test</div>
//       </body>
     
//     );
//   }
// }


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* 페이스북에서 만든 언어 JXX?에서 js로 변환 */}
        {/* 사용자 정의 */}
        <Subject title="WEB" sub="world wide web!"></Subject>
        {/* <Subject title="React" sub="For UI"></Subject> */}
        <TOC></TOC>
        <Content title="HTML" desc=" HTML is HyeperText MarkUp Language."></Content>
      </div>
    )
  }
}

export default App;
