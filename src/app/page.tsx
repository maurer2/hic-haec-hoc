'use client'

import styles from "./page.module.css";

import { useSwapiQuery } from "@/queries/useSwapiQuery/useSwapiQuery";

export default function Home() {
  // the modern way
  const { isLoading, isFetching, data } = useSwapiQuery(["swapi", "test"]);

  return (
    <main className={styles.main}>
      {isLoading || isFetching ? (
        <span>Loading</span>
      ) : (
        <pre>{JSON.stringify(data, undefined, 4)}</pre>
      )}
    </main>
  );
}
