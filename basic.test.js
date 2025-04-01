// basic.test.js
import React from "react";

import { render } from "@testing-library/react";
import HelloWorld from "./src/test";

test("renders HelloWorld component", () => {
  const { getByText } = render(<HelloWorld />);
  const linkElement = getByText(/Hello, World!/i);
  expect(linkElement).toBeInTheDocument();
});
