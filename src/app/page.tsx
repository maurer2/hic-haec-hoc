'use client'

import styles from "./page.module.css";

import withReactQueryHOC from "@/components/withReactQueryHOC/withReactQueryHOC";
import Output from "@/components/Output/Output";

const OutputWithReactQueryHOC = withReactQueryHOC(Output);

export default function Home() {
  return (
    <main className={styles.main}>
      <OutputWithReactQueryHOC url="/" />
    </main>
  );
}
