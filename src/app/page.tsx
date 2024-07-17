import React from "react";

import MainNav from "../components/mainNav";

export default function HomePage() {
  return (
    <div className="container flex max-w-4xl flex-col  sm:min-h-screen overflow-y-scroll no-scrollbar">
      <MainNav />
      <div></div>
    </div>
  );
}
