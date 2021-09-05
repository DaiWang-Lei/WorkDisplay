import React, { FC, useContext } from 'react';
import styles from './Robot.module.css'
import { appContext } from '../appState'
import { useAddToCart } from './AddToCart'
export interface RobotProps {
  id: number;
  name: string;
  email: string;
}

const RobotDiscount: FC<RobotProps> = (props) => {
  const { id, name, email, ...restProps } = props;
  const addToCart = useAddToCart()
  // hook 的useContext方式
  const value = useContext(appContext)
  return (
    <div className={styles.cardContainer}>
      <h2>甩卖商品</h2>
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

export default RobotDiscount;