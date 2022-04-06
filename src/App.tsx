import React from "react";
import Axios from "axios";
import ShoppingCart from "./component/LikeList";
import styles from "./App.module.css";
import WorkCard from "./component/WorkCard";
import travel from "./assets/images/travel.jpg";
import npmPackage from './assets/images/npmPackage.jpg'
import dumi from './assets/images/dumi.jpg'
import jira from './assets/images/jira.jpg'
import cf from './assets/images/cf.jpeg'
import zigzag from './assets/images/zigzag.jpeg'

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
        {
          id: 1,
          name: "Robuta-travel",
          href: "https://daiwang-lei.github.io/Robuta-Travel",
          src: travel,
          introduction: "基于React的旅游网站",
        },
        {
          id: 2,
          name: "Robuta-Design",
          href: "https://daiwang-lei.github.io/robutaDesign/storybook-static",
          src: npmPackage,
          introduction: "NPM上架的React组件库",
        },
        {
          id: 3,
          name: "Robuta-Dumi-Document",
          href: "https://daiwang-lei.github.io/dumiDoc/docs-dist",
          src: dumi,
          introduction: "基于Dumi的个人博客",
        },
        {
          id: 4,
          name: "Robuta-Jira",
          href: "https://daiwang-lei.github.io/jira/",
          src: jira,
          introduction: "基于React&Ts的任务管理系统",
        },
        {
          id: 4,
          name: "穿越火线之动漫人物大乱斗",
          href: "https://daiwang-lei.github.io/lingo/",
          src: cf,
          introduction: "基于React&Js的游戏",
        },
        {
          id: 4,
          name: "Zigzag",
          href: "https://lingocreate.cn/projects/61b3e8d653aefd2bab8603bc",
          src: zigzag,
          introduction: "基于Lingo的游戏",
        },
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
          {robotData.map(({ id, name, introduction, href, src }) => {
            return (
              <WorkCard
                src={src}
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
