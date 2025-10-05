import { Bebas_Neue } from "next/font/google";

const bebasFont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const page = () => {
  return (
    <div>
      <h1>Bebas Neue</h1>
      <p className={`${bebasFont.className}`}>This is some random text.</p>
    </div>
  );
};

export default page;
