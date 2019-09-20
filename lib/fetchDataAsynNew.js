// Fetch data async

import fetch from "isomorphic-unfetch";

export default async function fetchDataAsync(context, route) {
  console.log(
    "TCL: ******************* FETCH DATA ASYNC NEW ***********************"
  );
  console.log("TCL: fetchDataAsync -> process.browser:", process.browser);

  try {
    let baseUrl = "";
    if (typeof window === "undefined") {
      baseUrl = `${context.req.protocol}://${context.req.get("host")}`;
    }
    const url = `${baseUrl}${route}`;
    console.log("TCL: fetchDataAsync -> url", url);

    const res = await fetch(url);
    const data = await res.json();

    return data;
  } catch (err) {
    console.log("TCL: fetchDataAsync -> ERROR", err);
    return { success: false, lastError: err };
  }
}
