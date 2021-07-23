import {Component} from 'react';

//Component: 정리정돈
//컴포넌트를 만들때 하나의 최상위 태그만 써야함
//Component 오타 주의!!
class Subject extends Component{
    render(){
        return(
            <header>
                <h1>{this.props.title}</h1>
                {this.props.sub}
            </header>
        );
    }
}
export default Subject;