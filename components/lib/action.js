"use server";
import { redirect } from "next/navigation";

import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

//Now use server direactive is use to run fucntion only on server and make sure make this function async funtion as it is run on server!

const isInvalidText = (text) => {
  return !text || text.trim() === "";
};

export const shareMeal = async (prevFormState, formData) => {
  // This useFormState has 2 arguments as shown above so be remeber to add it like this!

  // Now how to call this function? very simple pass this function as action on form yes this is a little bit different type of handling of form submission we have to pass this function as form action and this will automatically recieves the formData as argument which you can extract throught get() function

  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    // throw new Error("invalid input"); //When you throw error as validation is will handle by error.js page of that route which can take user away from form which is bad UI that's why we can pop a message in form when user try to enter invalid form data at below of Form by returning object with some property like message as show like below.
    return {
      message: "Invalid Input.",
    };
    // Now to handle this message object (i mean to show this message in form) you have to handle by a hook that is show in page.js of (app/meals/page)
  }
  await saveMeal(meal);

  revalidatePath("/meals"); //This revalidatePath is use to clear cache of that page(i.e. /meals page) , we are using it here because it is needed here as when you build next project i.e. build it as production next will statically store some cache data of some pages which will always store as cache and when you update it it will never change! so you have to clear cache for that particular or that pages which is use that data which is going to update!

  redirect("/meals");
};
