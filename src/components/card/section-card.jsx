'use client';

import styles from './section-card.module.css';
import { CARD_SIZES } from '@/constant';
import Image from 'next/image';
import { useState } from 'react';
import Card from './card';

export default function SectionCard({ title, items }) {
  return (
    <section className={styles.sectionCard}>
      <h2>{title}</h2>
      <div className={styles.cardContainer}>
        {items.map((item) => (
          <Card key={item.id} imgUrl={item.imgUrl} />
        ))}
      </div>
    </section>
  );
}
