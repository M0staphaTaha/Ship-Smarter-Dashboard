import type { JSX } from "react/jsx-runtime";
function AwaitingIconSvg(
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
                fill="#fff"
                d="M17.25 19.5H6.75a.25.25 0 0 1-.25-.25v-.6A3.24 3.24 0 0 1 7.92 16L10 14.52A3.22 3.22 0 0 0 11.44 12h1.12A3.22 3.22 0 0 0 14 14.52L16.08 16a3.24 3.24 0 0 1 1.42 2.65v.6a.25.25 0 0 1-.25.25ZM6.75 2A2.75 2.75 0 0 0 4 4.75v.42a5.75 5.75 0 0 0 2.792 4.93l1.81 1.086a.75.75 0 0 1 .036 1.263l-2.121 1.443A5.75 5.75 0 0 0 4 18.647v.603A2.75 2.75 0 0 0 6.75 22h10.5A2.75 2.75 0 0 0 20 19.25v-.604a5.75 5.75 0 0 0-2.517-4.754l-2.121-1.443a.75.75 0 0 1 .036-1.263l1.81-1.086A5.75 5.75 0 0 0 20 5.17v-.42A2.75 2.75 0 0 0 17.25 2H6.75ZM5.5 4.75c0-.69.56-1.25 1.25-1.25h10.5c.69 0 1.25.56 1.25 1.25v.42a4.25 4.25 0 0 1-2.063 3.643L14.627 9.9c-1.41.845-1.467 2.866-.108 3.79l2.12 1.442a4.25 4.25 0 0 1 1.861 3.514v.604c0 .69-.56 1.25-1.25 1.25H6.75c-.69 0-1.25-.56-1.25-1.25v-.604a4.25 4.25 0 0 1 1.86-3.514l2.121-1.442c1.359-.924 1.302-2.945-.107-3.79l-1.81-1.087A4.25 4.25 0 0 1 5.5 5.17V4.75Z"
            />
        </svg>
    );
}
export default AwaitingIconSvg;