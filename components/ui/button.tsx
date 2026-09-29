import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a6cc2]/40 disabled:pointer-events-none disabled:opacity-50", { variants: { variant: { default:"bg-[#0a6cc2] text-white shadow-sm shadow-[#0a6cc2]/25 hover:bg-[#0a58a3]", outline:"border border-[#0a6cc2]/35 bg-transparent text-[#0a2540] hover:border-[#0a6cc2] hover:bg-[#0a6cc2] hover:text-white", ghost:"hover:bg-[#0a2540]/5" }, size:{default:"h-11 px-6", sm:"h-9 px-4 text-xs", lg:"h-13 px-8"}}, defaultVariants:{variant:"default",size:"default"}});
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean }
const Button=React.forwardRef<HTMLButtonElement,ButtonProps>(({className,variant,size,asChild=false,...props},ref)=>{const Comp=asChild?Slot:"button";return <Comp className={cn(buttonVariants({variant,size,className}))} ref={ref} {...props}/>}); Button.displayName="Button";
export {Button,buttonVariants};
