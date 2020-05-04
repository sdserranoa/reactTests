import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Checkbox from "../components/checkbox";

let container;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
        ReactDOM.render(
            <Checkbox labelActive="Active" labelInactive="Inactive" />,
            container
        );
    });
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

describe("Testing checkbox", () => {

    it("Defaults to Inactive label", () => {
        const label = container.querySelector("label");
        expect(label.textContent).toBe("Inactive");
    });

    it("Checkbox inactive by default", () => {
        const checkbox = container.querySelector("input");
        expect(checkbox.checked).toBe(false);
    });

    it("Checkbox status and label changes when clicked", () => {
        const checkbox = container.querySelector("input");
        const label = container.querySelector("label");
        act(() => {
            checkbox.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });
        expect(label.textContent).toBe("Active");
        expect(checkbox.checked).toBe(true);
    });
})

