import type { JSX } from "react/jsx-runtime";
function SuccessOrderIconSvg(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 19"
            fill="none"
            {...props}
        >
            <path
                fill="#52C47F"
                d="M12.294 5.075a.562.562 0 1 1 .682-.895A6.563 6.563 0 0 1 9.54 15.942l.563.562.055.063a.563.563 0 0 1-.85.732l-1.5-1.5-.055-.063a.563.563 0 0 1 .055-.732l.25-.25a5.464 5.464 0 0 0 1.542.049l-.004.004a5.438 5.438 0 0 0 2.7-9.732ZM7.898 2.299a.562.562 0 1 1 .795-.795l1.5 1.5c.22.22.22.575 0 .795l-.25.25A5.47 5.47 0 0 0 8.4 4l.004-.004a5.438 5.438 0 0 0-2.864 9.6.562.562 0 0 1-.717.867A6.563 6.563 0 0 1 8.46 2.861l-.562-.562Zm3.375 6.375a.562.562 0 1 0-.796-.795L8.25 10.106l-.727-.727a.562.562 0 1 0-.796.795L7.852 11.3c.22.22.576.22.796 0l2.625-2.625ZM9 13.901a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-1.125a3.375 3.375 0 1 1 0-6.75 3.375 3.375 0 0 1 0 6.75Z"
            />
        </svg>
    );
}
export default SuccessOrderIconSvg;