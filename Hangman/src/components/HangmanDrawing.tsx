const Head = (
  <div className="w-[80px] h-[80px] border-[10px] absolute top-[50px] right-[-35px]  border-black  rounded-full" />
);
const Body = (
  <div className="w-[10px] h-[130px] bg-black absolute top-[120px] right-0 " />
);
const Right_Arm = (
  <div className="w-[100px] h-[10px] bg-black absolute top-[150px] right-[-95px] rotate-[-30deg]   origin-bottom-left " />
);
const Left_Arm = (
  <div className="w-[100px] h-[10px] bg-black absolute top-[150px] right-[5px] rotate-[30deg] origin-bottom-right" />
);
const Right_Leg = (
  <div className="w-[100px] h-[10px] bg-black absolute top-[240px] right-[-95px] rotate-[30deg]   origin-bottom-left " />
);
const Left_Leg = (
  <div className="w-[100px] h-[10px] bg-black absolute top-[240px] right-[5px] rotate-[-30deg] origin-bottom-right" />
);

const BODY_PARTS = [Head, Body, Right_Arm, Left_Arm, Right_Leg, Left_Leg];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};
const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div className=" relative">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="h-[50px] w-[10px] bg-black absolute top-0 right-0 " />
      <div className="h-[10px] w-[200px] bg-black ml-[120px] " />
      <div className="h-[400px] w-[10px] bg-black ml-[120px] " />
      <div className=" h-[10px] w-[250px] bg-black  "></div>
    </div>
  );
};

export default HangmanDrawing;
