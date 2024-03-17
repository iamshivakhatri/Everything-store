import exp from "constants";
import { forwardRef } from "react";
import {cn} from "@/lib/utils";

export interface ButtonProps
extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

const Button =forwardRef<HTMLButtonElement, ButtonProps>(({className, children, disabled, type = "button", ...props}, ref)=>
{
    return(
        <button
        className={cn(
            `
            px-4
            py-2 
            rounded-full
            bg-black 
            text-white
            disabled:cursor-not-allowed
            disabled:opacity-50
            font-semibold
            hover:opacity-75
            transition
            `

            , className)}
        ref={ref}
        {...props}
        >
            {children}
        </button>
    )
});

Button.displayName = "Button";

export default Button;