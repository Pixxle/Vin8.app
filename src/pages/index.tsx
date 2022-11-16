import type { NextPage } from "next";

const Index: NextPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div
        className="bg-red-500
        w-fit h-48
        grid grid-cols-4 gap-4"
      >
        <h1 className="bg-blue-500
        text-8xl font-neumorphic
        w-96
        col-start-2 col-end-5
        ">VIN8</h1>

        <input className="bg-green-500
        col-start-2 col-end-4
        "
        contentEditable={true}
        />

        <button className="bg-yellow-500" 
        >test</button>

      </div>
    </div>
  );
};

export default Index;