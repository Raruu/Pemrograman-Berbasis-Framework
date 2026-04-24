import { render, screen } from "@testing-library/react";
import TampilanProduk from "@/pages/produk";
import useSWR from "swr";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt ?? ""} />;
  },
}));

jest.mock("swr", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/produk",
      pathname: "/produk",
      query: {},
      asPath: "/produk",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      isReady: true,
    };
  },
}));

const mockedUseSWR = useSWR as jest.Mock;

describe("Product Page", () => {
  beforeEach(() => {
    mockedUseSWR.mockReset();
  });

  it("renders loading state when data is loading", () => {
    mockedUseSWR.mockReturnValue({
      data: undefined,
      error: undefined,
      isLoading: true,
    });

    render(<TampilanProduk />);

    expect(screen.getByText("Daftar Produk")).not.toBeNull();
    expect(screen.queryByText("Produk Test")).toBeNull();
  });

  it("renders product list when data is available", () => {
    mockedUseSWR.mockReturnValue({
      data: {
        data: [
          {
            id: "1",
            name: "Produk Test",
            price: 15000,
            image: "/test.png",
            category: "Elektronik",
          },
        ],
      },
      error: undefined,
      isLoading: false,
    });

    render(<TampilanProduk />);

    expect(screen.getByText("Produk Test")).not.toBeNull();
    expect(screen.getByText("Elektronik")).not.toBeNull();
    expect(screen.getByText("Rp 15.000")).not.toBeNull();
  });
});
