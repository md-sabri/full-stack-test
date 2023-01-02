import { render, screen } from "@testing-library/react";
import { AppLayout } from "../layouts/index";

describe("Layout", () => {
    it("renders a heading", () => {
        const query = render(<AppLayout />);

        expect(query.findByRole("heading")).toBeInTheDocument();
        expect(query.findByRole("main")).toBeInTheDocument();
        expect(query.findByRole("footer")).toBeInTheDocument();
    });
});
