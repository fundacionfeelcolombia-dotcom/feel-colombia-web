import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function downloadPDF() {
  const url =
    "https://public-feel.s3.us-east-1.amazonaws.com/LIBERATEDELESTRESYLAANSIEDAD.pdf";

  const response = await fetch(url);
  const blob = await response.blob();

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "LIBERATE_DEL_ESTRES_Y_LA_ANSIEDAD.pdf";
  link.click();

  URL.revokeObjectURL(link.href);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function sendDataUser(body: any) {
  try {
    const response = await fetch(
      "https://w29npefjx5.execute-api.us-east-1.amazonaws.com/default/lambda-feel-people",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error posting data:", error);
    return null;
  }
}
