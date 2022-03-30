import React from "react";
import Axios from "axios";
import ShoppingCart from "./component/LikeList";
// import logo from "./assets/icon/logo.svg";
// import robotData from './mockData/robots.json';
import styles from "./App.module.css";
import WorkCard from "./component/WorkCard";

interface Props {}

interface State {
  robotData: any[];
  count: number;
}

class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      robotData: [
        { id: 1, name: "Robuta-travel", href: "https://daiwang-lei.github.io/Robuta-Travel",  introduction: "基于React的旅游网站" },
        { id: 2, name: "Robuta-Design", href: "https://daiwang-lei.github.io/robutaDesign/storybook-static", introduction: "NPM上架的React组件库" },
        { id: 3, name: "Robuta-Dumi-Document", href: "https://daiwang-lei.github.io/dumiDoc/docs-dist",introduction: "基于Dumi的个人博客" },
      ],
      count: 0,
    };
  }
  async componentDidMount() {
    // const { data } = await Axios({
    //   url: "https://jsonplaceholder.typicode.com/users",
    // });
    // this.setState({ robotData: data });
  }
  render() {
    // @ts-ignore
    const { robotData, count } = this.state;
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <h1>Work display</h1>
        </div>
        <ShoppingCart />
        <div className={styles.robotList}>
          {robotData.map(({ id, name, introduction, href }) => {
            return (
              <WorkCard
                id={id}
                name={name}
                introduction={introduction}
                key={id}
                href={href}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
