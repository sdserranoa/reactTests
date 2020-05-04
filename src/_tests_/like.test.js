import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Like from "../components/like";

let container;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
        ReactDOM.render(
            <Like />,
            container
        );
    });
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

describe("Testing like component",()=>{

    it("Defaults to Likes label", () => {
        const p = container.querySelector("p");
        expect(p.textContent).toBe("Likes: 0");
    });

    it("Like increments when clicked", () => {
        const button = container.querySelector("#increment");
        const p = container.querySelector("p");

        var num = p.textContent.split(" ")[1]

        act(() => {
            button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });

        num++

        expect(p.textContent).toBe(p.textContent.split(" ")[0]+" "+num)
       

    });

    it("Like decrement when clicked", () => {
        const button = container.querySelector("#decrement");
        const p = container.querySelector("p");

        var num = p.textContent.split(" ")[1]

        act(() => {
            button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });

        num--

        expect(p.textContent).toBe(p.textContent.split(" ")[0]+" "+num)
       

    });

})