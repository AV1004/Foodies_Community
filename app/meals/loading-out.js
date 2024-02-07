// This is loading.js file before as you know filename in next is important and loading.js is use to show loading state means the state when data is not arrvided but this loading.js file will cover whole page where this loading.js file is use what if we want to show loading text at only some part where data is used to do that checkout the page.js of meals

import React from "react";
import classes from "./loading.module.css";

export default function Loading() {
  return <p className={classes.loading}>fetchig meals...</p>;
}
