import * as React from "react";
import { Separator } from "./separator";

const Header = () => {
  return (
    <div className=" text-center mb-6">
      <h1 className="text-2xl font-normal p-4 text-slate-800">Superhero App</h1>
      <Separator className="bg-black" />
    </div>
  );
};

export default Header;
