import React from "react";

const Collapse = () => {
  return (
    <div className="mx-10">
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div class="collapse-title text-xl font-medium">
          Focus me to see content
        </div>
        <div class="collapse-content">
          <p>attribute is necessary to make the div focusable</p>
        </div>
      </div>

      <div className="my-6">
        <div
          tabindex="0"
          class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div class="collapse-title text-xl font-medium">
            Focus me to see content
          </div>
          <div class="collapse-content">
            <p>attribute is necessary to make the div focusable</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Collapse;
