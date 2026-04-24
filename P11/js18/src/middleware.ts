import { NextResponse } from "next/server";
import type { NextMiddleware } from "next/server";
import withAuth from "./middleware/withAuth";

const baseMiddleware: NextMiddleware = () => {
  return NextResponse.next();
};

export default withAuth(baseMiddleware, [
  "/produk",
  "/profile",
  "/admin",
  "/editor",
]);

