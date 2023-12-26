import { Logo } from "./Logo";
import { Slogan } from "./Slogan";

export const Hero = () => {
  return (
    <section className="max-w-4xl mx-auto my-32">
      <Logo />
      <Slogan />
    </section>
  );
};
