"use client";

import { useFormState } from "react-dom";
import { sampleActions } from "./sampleAction";

export default function Home() {
  const [state, formAction] = useFormState(sampleActions, {
    success: true,
    data: "",
  });

  return (
    <main>
      <form action={formAction}>
        <input type="text" name="data" />
        <button type="submit">Submit</button>
      </form>
      <p>{state.success ? state.data : state.error}</p>
    </main>
  );
}
