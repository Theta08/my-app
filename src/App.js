import { Component } from 'react';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       Hellow
//     </div>
//   );
// }

//Component: 정리정돈
//컴포넌트를 만들때 하나의 최상위 태그만 써야함
//Component 오타 주의!!
class Subject extends Component{
  render(){
    return(
      <header>
          <h1>Web</h1>
          world wide web!
      </header>
    );
  }
}

class Test1 extends Component{
  render(){
    return(
      <body>
     <div class="te">test</div>
      </body>
     
    );
  }
}

class TOC extends Component{
  render(){
    return(
      <nav>
          <ul>
              <li><a href="1.html">HTML</a></li>
              <li><a href="2.html">CSS</a></li>
              <li><a href="3.html">JavaScript</a></li>
          </ul>
      </nav> 
    );
  }
}
class Content extends Component{
  render(){
    return(
      <article>
          <h2>HTML</h2>
          HTML is HyeperText MarkUp Language.
      </article>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* 페이스북에서 만든 언어 JXX?에서 js로 변환 */}
        <Subject></Subject>
        <TOC></TOC>
        <Content></Content>
        <Test1>심심하다</Test1>
      </div>
    )
  }
}

export default App;
