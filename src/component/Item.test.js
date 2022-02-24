import { render, screen } from "@testing-library/react";
import Item from "./Item";

test("test style of Item after render", () => {
  const data = {
    name: "John",
    phone: "09123123312",
    email: "John@gmail.com",
  };
  render(<Item card={data} />);
  const element = screen.getByText("09123123312");
  expect(element).toHaveStyle(`color:"#C7C7C7"`);
});

test("should show card after fake api ", () => {
  const data = {
    name: "John",
    phone: "09123123312",
    email: "John@gmail.com",
  };
  const { container } = render(<Item card={data} />);
  expect(container.getElementsByClassName("card").length).toBe(1);
});

