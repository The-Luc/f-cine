'use client';

import styles from './nav.module.css';
import Link from 'next/link';
import { useState } from 'react';

export default function NavBar(props) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className={styles.nav}>
      <div>
        <Link href="/">
          <img
            className={styles.logoImage}
            src="/images/f-cine-logo.png"
            alt="App logo"
          />
        </Link>
      </div>
      <ul className={styles.list}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/my-list">My List</Link>
        </li>
        <li>
          <Link href="/mee">My Mee</Link>
        </li>
      </ul>
      <div className={styles.userContent}>
        <button onClick={() => setShowMenu((prev) => !prev)}>
          {props.userName}
        </button>
        {showMenu && (
          <ul className={styles.user}>
            <li>
              <Link href="/">Profile</Link>
            </li>
            <li>
              <Link href="/">Setting</Link>
            </li>
            <li>
              <Link href="/log-out">Log out</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
