import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "./App";

describe("Test component App", () => {
  afterEach(() => jest.spyOn(global, "fetch").mockClear());
  test("renders fail user data", async () => {
    const spy = jest.spyOn(global, "fetch");
    spy.mockImplementation(() => Promise.reject("API Fail"));
    await act(async () => {
      render(<App />);
    });
    const item = await screen.findAllByText("Is Loading");
    expect(item).toHaveLength(1);
  });
 
  it("renders success user data", async () => {
    const fakeUser = [
      {
        name: "Joni Baez",
        phone: "32",
        address: "123, Charming Avenue",
      },
      {
        name: "Joni Baez",
        phone: "3",
        address: "123, Charming Avenue",
      },
    ];

    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(fakeUser),
      })
    ); 
    await act(async () => {
      render(<App />);
    });
    const item = await screen.findAllByText("Joni Baez");
    expect(item).toHaveLength(2)
  });
});
