import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import doctorAnimation from './files/doctor2.json';

const Doctor2Lottie = () => {
  return <DotLottieReact ={299} height={299} className="scale-x-[-1] absolute -left-25 -top-35 -z-1 lg:left-0" data={doctorAnimation} loop autoplay />;
};

export default Doctor2Lottie;
