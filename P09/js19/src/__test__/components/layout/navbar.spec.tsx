import "@testing-library/jest-dom"
import { render, screen, fireEvent } from "@testing-library/react"
import Navbar from "../../../components/layout/navbar"
import { useSession, signIn, signOut } from "next-auth/react"

// mock next auth react
jest.mock("next-auth/react", () => ({
    useSession: jest.fn(),
    signIn: jest.fn(),
    signOut: jest.fn(),
}))

// mock next image
jest.mock("next/image", () => ({
    __esModule: true,
    default: (props: any) => {
        return <img {...props} />
    }
}))

describe("navbar component", () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it("renders sign in button when not logged in", () => {
        // mock session null
        (useSession as jest.Mock).mockReturnValue({ data: null })

        render(<Navbar />)

        const signInBtn = screen.getByRole("button", { name: "Sign In" })
        expect(signInBtn).toBeInTheDocument()

        fireEvent.click(signInBtn)
        expect(signIn).toHaveBeenCalled()
    })

    it("renders user name and sign out button when logged in without image", () => {
        // mock session with user but no image
        (useSession as jest.Mock).mockReturnValue({
            data: {
                user: { fullname: "test user", image: null }
            }
        })

        render(<Navbar />)

        expect(screen.getByText("Welcome, test user")).toBeInTheDocument()

        const signOutBtn = screen.getByRole("button", { name: "Sign Out" })
        fireEvent.click(signOutBtn)
        expect(signOut).toHaveBeenCalled()
    })

    it("renders user image when image is provided in session", () => {
        // mock session with image to cover the image block
        (useSession as jest.Mock).mockReturnValue({
            data: {
                user: { fullname: "test user", image: "/test.jpg" }
            }
        })

        render(<Navbar />)

        const image = screen.getByAltText("test user")
        expect(image).toBeInTheDocument()
        expect(image).toHaveAttribute("src", "/test.jpg")
    })
})