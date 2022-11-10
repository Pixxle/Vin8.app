import type { NextPage } from "next";
import Button from "../components/button";


const Index: NextPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Button 
        text="Hello World" 
        height="4em" 
        width="4em"
        fontSize="5rem"
        onClick={() => console.log("Hello World")}
        />
    </div>
  );
};

export default Index;