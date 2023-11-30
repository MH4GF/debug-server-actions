"use server";

type Result =
  | {
      success: true;
      data: string;
    }
  | {
      success: false;
      error: string;
    };

export const sampleActions = async (
  _prevState: Result,
  formData: FormData
): Promise<Result> => {
  const data = formData.get("data") as string;
  console.log("sampleActions", { data });

  if (data === "success") {
    return {
      success: true,
      data: "server actions success",
    };
  } else {
    return {
      success: false,
      error: "server actions error",
    };
  }
};
