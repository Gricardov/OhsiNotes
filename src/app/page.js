"use client"; // This is a client component 👈🏽

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {

  const [text, setText] = useState('');
  const [querying, setQuerying] = useState(false);
  const [completion, setCompletion] = useState('');

  const query = async (type = 1) => {
    if (querying) return;
    try {
      setQuerying(true);
      const data = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages: [{
            role: "user",
            content: text.trim()
          }],
          type
        })
      });
      if (data.ok) {
        const { completion } = await data.json();
        setCompletion(completion);
        setQuerying(false);
      } else {
        setQuerying(false);
        console.log(data);
        alert('Ocurrió un error');
      }
    } catch (error) {
      setQuerying(false);
      console.log(error);
      alert('Ocurrió un error');
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.container__left}>
          <h3 className={styles.title}></h3>
          <textarea
            value={text}
            onChange={e => setText(e.target.value)}
            className={styles.container__textarea} />
        </div>
        <div className={styles.container__right}>
          <div className={styles.container__header}>
            <div className={styles.buttongroup}>
              <button disabled={querying} onClick={() => query(1)}>Crear clase</button>
              <button disabled={querying} onClick={() => query(2)}>Hacer preguntas</button>
              <button disabled={querying} onClick={() => query(3)}>Test</button>
            </div>
          </div>
          <h3 className={styles.title}></h3>
          <textarea
            value={querying ? 'Analizando...' : completion}
            disabled
            className={styles.container__textarea} />
        </div>
      </div>
    </main>
  )
}
