export type UserRole = "admin" | "editor" | "member" | "user";

export type OAuthProviderName = "google" | "github";

export type OAuthUserData = {
  fullname: string;
  email: string;
  image?: string | null;
  type: OAuthProviderName;
};

export type AppUser = {
  id?: string;
  email: string;
  fullname: string;
  password?: string;
  image?: string;
  role?: UserRole;
  type?: OAuthProviderName;
};