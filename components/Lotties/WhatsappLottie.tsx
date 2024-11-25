import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import waAnimation from "./files/whatsapp.json";

const WALottie = () => {
  return <DotLottieReact data={waAnimation} className="size-14" loop autoplay />;
};

export default WALottie;