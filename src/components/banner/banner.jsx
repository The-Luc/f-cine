'use client';

import Image from 'next/image';
import styles from './banner.module.css';

export default function Banner({ title, subTitle, imgUrl, onPlay }) {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${imgUrl}), linear-gradient(#000,#fff)` }}
    >
      <div className={styles.wrapper}>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
        <button className={styles.button} onClick={onPlay}>
          <Image src="/icons/play-icon.svg" alt="Play" width={25} height={25} />
          Play
        </button>
      </div>
    </div>
  );
}
