import Signup from "@/components/Auth/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Riviut",
  description: "Clinica Riviut",
  // other metadata
};

export default function Register() {
  return (
    <>
      <Signup />
    </>
  );
}
