import { render } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  const exec = () => render(<Button />);

  it("renders correctly", () => {
    const { container } = exec();

    expect(container).toMatchInlineSnapshot(`
      <div>
        <button>
          Boop
        </button>
      </div>
    `);
  });
});
