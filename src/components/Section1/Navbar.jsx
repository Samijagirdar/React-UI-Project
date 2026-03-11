import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-8 px-16">
      <h4 className="bg-black text-white rounded-full px-4 py-2 uppercase tracking-widest">
        Target Audience
      </h4>
      <button className="bg-gray-200 px-5 py-2 rounded-full uppercase text-sm tracking-widest">
        Digital Banking Platform
      </button>
    </div>
  );
};

export default Navbar;
