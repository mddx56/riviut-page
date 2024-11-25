import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import waAnimation from "./files/maker.json";

const MapLottie = () => {
  return <DotLottieReact data={waAnimation} className="size-16" loop autoplay />;
};

export default MapLottie;
