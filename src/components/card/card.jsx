'use client';

import styles from './card.module.css';
import { CARD_SIZES } from '@/constant';
import Image from 'next/image';
import { useState } from 'react';

const defaultImgUrl =
  'https://images.unsplash.com/photo-1634157703702-3c124b455499?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80';

export default function Card({ imgUrl = '', size = CARD_SIZES.SMALL }) {
  const [url, setUrl] = useState(imgUrl);

  const sizes = {
    [CARD_SIZES.SMALL]: styles.smItem,
    [CARD_SIZES.MEDIUM]: styles.mdItem,
    [CARD_SIZES.LARGE]: styles.lgItem,
  };
  const onError = () => {
    setUrl(defaultImgUrl);
  };

  return (
    <div className={styles.wrapper + ' ' + sizes[size]}>
      <Image
        className={styles.imgItem}
        src={url}
        alt="Card image"
        onError={onError}
        fill={true}
      />
      <div>{size}</div>
    </div>
  );
}
