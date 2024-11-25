import Privacy from "@/components/Privacy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacidad Riviut",
  description: "Clinica",
  // other metadata
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Privacy />
    </div>
  );
};

export default SupportPage;
