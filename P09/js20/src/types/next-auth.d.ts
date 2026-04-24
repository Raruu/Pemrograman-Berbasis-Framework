import { DefaultSession } from "next-auth";
import type { UserRole } from "./auth";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      fullname?: string;
      role?: UserRole;
      type?: string;
    };
  }

  interface User {
    fullname?: string;
    role?: UserRole;
    type?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    fullname?: string;
    role?: UserRole;
    image?: string;
    type?: string;
  }
}