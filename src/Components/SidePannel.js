// SidePanel.js
import React from "react";

const SidePanel = () => {
  return (
    <div class="ui visible thin inverted left vertical sidebar menu">
      <a class="item" href="">
        <i class="home icon" href=""></i>
        Home
      </a>
      <a class="item" href="">
        <i class="block layout icon"></i>
        Topics
      </a>
      <a class="item" href="">
        <i class="smile icon"></i>
        Friends
      </a>
      <a class="item" href="">
        <i class="calendar icon"></i>
        History
      </a>
    </div>
  );
};

export default SidePanel;
