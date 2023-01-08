import type { NextPage } from "next";
import { FormEvent } from "react";
import { UrlEventType } from "../lib/UrlEventType";

const Index: NextPage = () => {
  const handleSubmit = async (event : FormEvent<HTMLFormElement> & {target: UrlEventType}) => {
    event.preventDefault();
    const {target} = event;

    const data = {
      url : target?.url_textbox?.value
    }
    console.log(data);
  }
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
        <form onSubmit={handleSubmit}>
          <input id="url_textbox" 
          className="bg-green-500 col-start-2 col-end-4"
          contentEditable={true}
          />

          <button id="url_btn" type="submit" className="bg-yellow-500" 
          >test</button>
        </form>
      </div>
    </div>
  );
};

export default Index;