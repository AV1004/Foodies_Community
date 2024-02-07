import React from "react";
import classes from "./page.module.css";
import Image from "next/image";
import { getMeal } from "@/components/lib/meals";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const meal = getMeal(params.someSlug);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default function Something({ params }) {
  const meal = getMeal(params.someSlug);

  // Now this meal does't exist then we have to show a not found page to do that we can check i meal is there or not and then can show closest error or not-found(first not-found then error but the closest) page using notFound provided by next

  if (!meal) {
    notFound(); //Show closest not-found page or (if not-found is not then closest error page)
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
          {/* fill is use adjust images according to screen as we don't know the images widht and height */}
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions, //Now this meal.instruction is default in html form so that's why you have set InnerHtml like this
          }}
        ></p>
      </main>
    </>
  );
}
