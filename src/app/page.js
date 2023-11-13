"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState();

  const url = "https://moviesdatabase.p.rapidapi.com/titles";

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ef8276177amsh25dac91adcf4e0cp1717b2jsn13817ee8e225",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.results);
        setData(response.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <main className={styles.main}>
      {/* <div className={styles.description}> */}
      <h1>Hello world</h1>
      {data &&
        data.map((d) => {
          console.log(d.titleText.text);
          return <h3>{d.titleText.text}</h3>;
        })}
      {/* </div> */}
    </main>
  );
}
