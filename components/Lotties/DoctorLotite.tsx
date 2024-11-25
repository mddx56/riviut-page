import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import doctorAnimation from './files/doctor1.json';

const DoctorLottie = () => {
  return <DotLottieReact width={299} height={299} className="hidden xl:block" data={doctorAnimation} loop autoplay />;
};

export default DoctorLottie;
