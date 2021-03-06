import React from "react";
import styles from "./LikeList.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { appContext } from "../appState";
interface Props {}

interface State {
  isOpen: boolean;
}

class LikeList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if ((e.target as HTMLElement).nodeName === "SPAN") {
      this.setState({ isOpen: !this.state.isOpen });
    }
  };
  render() {
    const { isOpen } = this.state;
    return (
      <appContext.Consumer>
        {(value) => {
          return (
            <div className={styles.cartContainer}>
              <button className={styles.button} onClick={this.handleClick}>
                <FiShoppingCart />
                <span> 喜欢的作品 {value.shoppingCart.items.length} (件)</span>
              </button>

              <div className={styles.cartDropDown} style={{ display: isOpen ? "block" : "none" }}>
                <ul>
                  {value.shoppingCart.items.map((item) => {
                    return <li>{item.name}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        }}
      </appContext.Consumer>
    );
  }
}

export default LikeList;
