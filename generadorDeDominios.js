//aqui mis arrays
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extensions = [".com", ",net", "org", "us", "io"];
//aqui los loops for of ...
for (const i of pronoun) {
  for (const j of adj) {
    for (const k of noun) {
      for (const l of extensions) {
        console.log(i + j + k + l);
      }
    }
  }
}
