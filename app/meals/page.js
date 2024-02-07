import Link from "next/link";
import React, { Suspense } from "react";

import classes from "./page.module.css";
import MealsGrid from "@/components/meals/mealsGrid";
import { getMeals } from "@/components/lib/meals";
// import Loading from "./loading-out";

export const metadata = {
  title: "All Meals",
  description: "Browse our meals.",
};

const Meals = async () => {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
};

// export default async function meals() {
//Now You can make react severside component to async function in next
export default function meals() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href={"/meals/share"}>Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>fetchig meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
