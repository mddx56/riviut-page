import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import doctorAnimation from './files/doctor2.json';

const Doctor2Lottie = () => {
  return <DotLottieReact width={255}  height={314} className="absolute -left-25 -top-35 -z-1 lg:left-0" data={doctorAnimation} loop autoplay />;
};

export default Doctor2Lottie;
