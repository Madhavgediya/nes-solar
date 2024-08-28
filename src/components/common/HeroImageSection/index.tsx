import Link from "next/link";
import React from "react";
import styles from "./HeroImage.module.css"
import Image from 'next/image';

export default function HeroImageSection({ title,path }: any) {
  return (
    <>
      <div className={`${styles.topHeader}`}>
        <img
          className={`${styles.desktop}`}
          src={path ? path : "/assets/sol.webp"}
          alt="NES Solar"
        />
        <img
          className={`${styles.mob}`}
          src={path ? path : "/assets/sol.webp"}
          alt="NES Solar"
        />
        <span>
          <div className={`${styles.wrapper}`}>
            <h1>{title}</h1>
            <samp>
              <Link href="/" title="Home">
                Home
              </Link>
              <small>{title}</small>
            </samp>
          </div>
        </span>
      </div>
    </>
  );
}
