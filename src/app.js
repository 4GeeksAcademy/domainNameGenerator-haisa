/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our", "their", "my"];
  let adjetive = ["great", "big", "strange", "silly"];
  let nouns = ["jogger", "racoon", "cat", "cow"];
  let extension = [".com", ".net", ".org", ".com.ve"];

  for (let pron in pronoun) {
    for (let adj in adjetive) {
      for (let noun in nouns) {
        for (let ext in extension) {
          let domain = pron + adj + noun + ext;
          console.log(domain);
        }
      }
    }
  }
};
