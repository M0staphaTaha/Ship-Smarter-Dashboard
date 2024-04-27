import type { JSX } from "react/jsx-runtime";
function FailedIconSvg(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <path
                fill="#F52A2A"
                d="M13.409 2.513a3.75 3.75 0 0 0-2.818 0l-2.19.888 9.592 3.73 3.374-1.303a1.747 1.747 0 0 0-.46-.275l-7.498-3.04ZM22 7.191l-9.25 3.574v2.3A6.482 6.482 0 0 1 17.5 11c1.747 0 3.332.689 4.5 1.81V7.19Zm-10.75 3.574v4.945a6.503 6.503 0 0 0-.25 1.791c0 .621.087 1.222.25 1.79v2.397a3.748 3.748 0 0 1-.659-.199l-7.498-3.04A1.75 1.75 0 0 1 2 16.827V7.192l9.25 3.574ZM2.633 5.828 12 9.447l3.917-1.514-9.543-3.71-3.281 1.33c-.17.069-.324.162-.46.275ZM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-7.146-2.354a.5.5 0 0 0-.708.707l1.647 1.647-1.647 1.646a.5.5 0 0 0 .708.708l1.646-1.647 1.646 1.647a.5.5 0 0 0 .708-.708l-1.647-1.646 1.647-1.647a.5.5 0 0 0-.708-.707L17.5 16.794l-1.646-1.647Z"
            />
        </svg>
    );
}
export default FailedIconSvg;