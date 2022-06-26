import React from "react";
import { nanoid } from "nanoid";

import ListItems from "./ListItems";
import styles from "./List.module.css";

export default function List({ contriesList, onHandleLink }) {
  return (
    <ul className={styles.ulList}>
      {contriesList.map(({ name }) => {
        return (
          <ListItems
            key={nanoid()}
            itemStyle={styles.item}
            linkButtonStyle={styles.linkButton}
            countryName={name}
            onHandleLink={onHandleLink}
          />
        );
      })}
    </ul>
  );
}
