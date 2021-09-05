import React, { FC, useContext } from 'react';
import styles from './Robot.module.css'
import { appContext, appSetStateContext } from '../appState'
import { withAddToCart } from './AddToCart'
export interface RobotProps {
  id: number;
  name: string;
  email: string;
  addToCart: (id: number, name: string) => void;
}

const Robot: FC<RobotProps> = (props) => {
  const { id, name, email, addToCart, ...restProps } = props;
  // hook 的useContext方式
  const value = useContext(appContext)
  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="" />
      <h2>
        name:{name}
      </h2>
      <p>
        email：{email}
      </p>
      <p>
        author: {value.authorName}
      </p>
      <button onClick={() => addToCart(id, name)}>加入购物车</button>
    </div>
  )
}

export default withAddToCart(Robot);