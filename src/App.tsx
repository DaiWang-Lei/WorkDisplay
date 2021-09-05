import React from 'react';
import Axios from 'axios';
import Robot from './component/Robot';
import ShoppingCart from './component/ShoppingCart';
import logo from './assets/icon/logo.svg';
// import robotData from './mockData/robots.json';
import styles from './App.module.css';
import RobotDisCount from './component/RobotDisCount';

interface Props {

}

interface State {
  robotData: any[],
  count: number;
}

class App extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      robotData: [],
      count: 0,
    }
  }
  async componentDidMount() {
    const { data } = await Axios({
      url: 'https://jsonplaceholder.typicode.com/users'
    })
    this.setState({ robotData: data })
  }
  render() {
    // @ts-ignore
    const { robotData, count } = this.state;
    return (
      <div className={styles.app} >
        <div className={styles.appHeader}>
          <h1>Work display</h1>
        </div>
        < ShoppingCart />
        <div className={styles.robotList}>
          {
            robotData.map(({ id, name, email }) => {
              return id % 2 == 0 ?
                <Robot id={id} name={name} email={email} key={id} />
                :
                <RobotDisCount id={id} name={name} email={email} key={id} />

            }
            )
          }
        </div>
      </div>
    )
  }
}

export default App;
