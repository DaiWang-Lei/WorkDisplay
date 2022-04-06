import React, { FC, useContext } from "react";
import styles from "./Work.module.css";
import { appContext } from "../appState";
import { useAddToCart } from "./AddToLike";
export interface WorkProps {
  id: number;
  name: string;
  introduction: string;
  href: string;
  src:string
}

const WorkCard: FC<WorkProps> = (props) => {
  const { id, name, introduction, href,src, ...restProps } = props;
  const addToCart = useAddToCart();
  // hook 的useContext方式
  const value = useContext(appContext);
  return (
    <div
      className={styles.cardContainer}
      onClick={(e) => {
        // @ts-ignore
        if (e.target.tagName !== "BUTTON") {
          debugger;
          window.open(href);
        }
      }}
    >
      <img src={src} alt="" style={{maxWidth:'19vw'}} />
      <h2>{name}</h2>
      <p>{introduction}</p>
      <p>author: {value.authorName}</p>
      <button onClick={() => addToCart(id, name)}>(❤ ω ❤)</button>
    </div>
  );
};

export default WorkCard;
