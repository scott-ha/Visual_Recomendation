import React, { Component } from 'react';
import Developer from './components/developer';
import './App.css';

const developer = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/any',
    'name': '하늘',
    'birthday': '920927',
    'gender': '남자',
    'job': '대학원생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '나동빈',
    'birthday': '960508',
    'gender': '남자',
    'job': '프로그래머'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '이순신',
    'birthday': '961127',
    'gender': '남자',
    'job': '디자이너'
  }
]

class App extends Component {
  render() {
    return (
      // 반복하여 출력할 때 map을 통하여 수행하고 이때 key라는 이름의 props를 사용해야 한다.
      <div>
        {developer.map(c => {
          return <Developer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
        })}
      </div>

    );
  }
}


export default App;
