"use client";

import { useFormState } from "react-dom";

import ImagePicker from "@/components/images/imagePicker";
import classes from "./page.module.css";
import { shareMeal } from "@/components/lib/action";
import MealsFormSubmission from "@/components/meals/mealsFormSubmission";

export default function ShareMealPage() {
  // const shareMeal = async (formData) => {
  //   "use server"; //Now use server direactive is use to run fucntion only on server and make sure make this function async funtion as it is run on server!

  //   // Now how to call this function? very simple pass this function as action on form yes this is a little bit different type of handling of form submission we have to pass this function as form action and this will automatically recieves the formData as argument which you can extract throught get() function

  //   const meal = {
  //     title: formData.get("title"),
  //     summary: formData.get("summary"),
  //     instructions: formData.get("instructions"),
  //     image: formData.get("image"),
  //     creator: formData.get("name"),
  //     creator_email: formData.get("email"),
  //   };

  //   console.log(meal);
  // };

  // Now what if in some case you want to make this component a client component then you have to use "use Client" direactive which not possible i mean we can't use use client and use server both in same component so to solve this you can make another component as shown below then you can export that function and then you can also make this component client side compomnent you can try here!

  // Now to handle response of invalid form there is special hook useFormState which can be use as shown below!

  const [state, formAction] = useFormState(shareMeal, { message: null });
  // Now this useFormState takes two arguments (first form action and then response message objct) and return two things current state of this form and then formAction as function which can be excute when form is submitted!

  // Now use this state to print message if message exists and use this formAction as action as object!

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          {/* As Shown Above You Have to Pass function(a server side fucntion as action) as Action */}
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label={"Your Image"} name={"image"} />
          {state.message && <p style={{ color: "red" }}>{state.message}</p>}
          <p className={classes.actions}>
            <MealsFormSubmission />
          </p>
        </form>
      </main>
    </>
  );
}
