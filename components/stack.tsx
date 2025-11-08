import { cn } from '@/lib/utils';
import React from 'react'

interface StackProps {
    className?: string;
    children? :  React.ReactNode;
    childrenClassName?: string;
    backlit?: boolean;
}

// export default function Stack ({title, className} : StackProps) {
//   return (
//     <div className={cn('', className)}>
//         <div className='h-15 bg-neutral-950 text-white rounded-lg w-full  shadow-xl shadow-white/50 inset-shadow-md'>
//             <div className=''>{title}</div>
//             </div>
//     </div>
//   )
// }

export default function Stack({ children, className, childrenClassName, backlit = true }: StackProps) {
  return (
    <div className={cn('rounded-[4px] p-[0.5px]', backlit && "bg-white/[0.2] shadow-xl shadow-white hover:shadow-white/50")}>
        <div className={cn('flex h-6 w-6 items-center justify-center rounded-[2.5px] bg-[#0a090D] selection:bg-[#0a090D]', className)} 
        >
            <div className={cn('flex w-full flex-col items-center justify-center text-[5px] text-neutral-200', childrenClassName, backlit && "text-white")}>
                {children}
            </div>
        </div>
    </div>
  )
}


