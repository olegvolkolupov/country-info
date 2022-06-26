import React from 'react';

import styles from './Table.module.css';

export default function Table({countryInfo}) {
  let langArray = Object.values(countryInfo.languages);
  let languages;
  let languagesTitle = "Language:";
  if (langArray.length === 1) {
    languages = langArray[0];
  } else {
    languages = langArray.map((language) => ' | ' + language + ' | ' );
    // languages = langArray.map((language) => language + ', ' );
    // let lastIdx = languages.length - 1;
    // let str = languages[lastIdx];
    // let newStr = '';
    // for( let i = 0; i < str.length - 2; i++){
    //   newStr = newStr + str[i];
    // }
    // languages[lastIdx] = newStr;
    languagesTitle = "Languages:";
  }

  return (
    <table className={styles.table}>
      <tbody className={styles.tableBody}>
          <tr>
            <td className={styles.tableTd}>Country:</td>
            <td className={styles.tableTd}><b>{countryInfo.name.common}</b></td>
          </tr>
          <tr>
            <td className={styles.tableTd}>Official name:</td>
            <td className={styles.tableTd}>{countryInfo.name.official}</td>
          </tr>
          {(
            countryInfo.capital && (
              <tr>
                <td className={styles.tableTd}>Capital:</td>
                <td className={styles.tableTd}>{countryInfo.capital[0]}</td>
              </tr>
            )
          )}
          <tr>
            <td className={styles.tableTd}>Population:</td>
            <td className={styles.tableTd}>{countryInfo.population}</td>
          </tr>
          <tr>
            <td className={styles.tableTd}>{languagesTitle}</td>
            <td className={styles.tableTd}>{languages}</td>
          </tr>
          <tr>
            <td className={styles.tableTd}>Flag:</td>
            <td className={styles.tableTd}><img className={styles.image} src={countryInfo.flags.png} alt="Flag" /></td>
          </tr>
          <tr>
            <td className={styles.tableTd}>Coat of Arms:</td>
            <td className={styles.tableTd}><img className={styles.image} src={countryInfo.coatOfArms.png} alt="Coat of Arms" /></td>
          </tr>
      </tbody>
    </table>
  )
}
