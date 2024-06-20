import { redirect } from "next/navigation";
import { ThematicCodifier } from "../../templates";
import { http } from "@/core/axios";

export default async function ThematicCodifierPage() {
  try {
    const response = await http.get("/api/v1/codifier/");
    return <ThematicCodifier data={response.data} />;
  } catch (error) {
    redirect("/404");
  }
}