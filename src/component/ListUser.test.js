import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { QueryClient, QueryClientProvider } from "react-query";
import ListUser from "./ListUser";

const clientQuery = new QueryClient({
  defaultOption: {
    queries: {
      retry: false,
    },
  },
});

describe("Test component list user", () => {
  afterEach(() => jest.spyOn(global, "fetch").mockClear());
  test("renders fail user data", async () => {
    const spy = jest.spyOn(global, "fetch");
    spy.mockImplementation(() => Promise.reject("API Fail"));
    await act(async () => {
      render(
        <QueryClientProvider client={clientQuery}>
          <ListUser />
        </QueryClientProvider>
      );
    });
    const item = await screen.findAllByText("Is Loading");
    expect(item).toHaveLength(1);
  });
  test("should not show card after data empty card ", async () => {
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
      render(
        <QueryClientProvider client={clientQuery}>
          <ListUser />
        </QueryClientProvider>
      );
    });
    // console.log(container.getElementsByClassName("card").length);
    screen.debug();
    // expect(container.getElementsByClassName("card").length).toBeInTheDocument();
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
      render(
        <QueryClientProvider client={clientQuery}>
          <ListUser />
        </QueryClientProvider>
      );
    });
    const item = await screen.findAllByText("Joni Baez");
    expect(item).toHaveLength(2);
  });
});
