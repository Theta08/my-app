// component로 파일 분리
import { Component } from 'react';

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

//외부에서도 TOC.js를 사용할 수 있게 하겠다
export default TOC;