import { render, screen } from "@testing-library/react";
import AboutPage from "@/pages/about";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/about",
      pathname: "/about",
      query: {},
      asPath: "/about",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      isReady: true,
    };
  },
}));

describe("About Page", () => {
  it("renders about page correctly", () => {
    const { asFragment } = render(<AboutPage />);
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByTestId("title").textContent).toBe("About Page");
  });
});
