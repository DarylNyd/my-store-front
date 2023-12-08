import React from "react";

const Index = ({ text, buttonAction }) => {
    return (
        <button
            class="bg-black hover:bg-white border border-black text-white hover:text-black font-bold py-2 px-4 rounded"
            onClick={buttonAction}
        >
            {text}
        </button>
    );
};

export default Index;
