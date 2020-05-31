import express from "express";

const PORT = 3000;

const app = express();

const compare = (com1, com2) => {
  if (com1 > com2) {
    console.log(`${com1}이 더 크다`);
  } else if (com2 > com1) {
    console.log(`${com2}이 더 크다`);
  } else if (com1 === com2) {
    console.log(`${com1}과${com2}는 같다.`);
  }
};

app.listen(PORT, () => {
  console.log(`${PORT} Server Start`);

  compare(15, 30);
});
