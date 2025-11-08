import React from 'react'
import Stack from './stack';
import { cn } from '@/lib/utils';

// export default function keyboard() {
//  const keys = [
//   // Function row
//   { title: "Esc", no: "1", className: "col-span-2" },
//   { title: "F1", no: "2", className: "w-15" },
//   { title: "F2", no: "3", className: "" },
//   { title: "F3", no: "4", className: "" },
//   { title: "F4", no: "5", className: "" },
//   { title: "F5", no: "6", className: "" },
//   { title: "F6", no: "7", className: "" },
//   { title: "F7", no: "8", className: "" },
//   { title: "F8", no: "9", className: "" },
//   { title: "F9", no: "10", className: "" },
//   { title: "F10", no: "11", className: "" },
//   { title: "F11", no: "12", className: "" },
//   { title: "F12", no: "13", className: "" },
//   { title: "", no: "13.5", className: "" },

//   // Number row
//   { title: "`", no: "14", className: "" },
//   { title: "1", no: "15", className: "" },
//   { title: "2", no: "16", className: "" },
//   { title: "3", no: "17", className: "" },
//   { title: "4", no: "18", className: "" },
//   { title: "5", no: "19", className: "" },
//   { title: "6", no: "20", className: "" },
//   { title: "7", no: "21", className: "" },
//   { title: "8", no: "22", className: "" },
//   { title: "9", no: "23", className: "" },
//   { title: "0", no: "24", className: "" },
//   { title: "-", no: "25", className: "" },
//   { title: "=", no: "26", className: "" },
//   { title: "delete", no: "27", className: "col-span-2" },

//   // Q row
//   { title: "Tab", no: "28", className: "col-span-2" },
//   { title: "Q", no: "29", className: "" },
//   { title: "W", no: "30", className: "" },
//   { title: "E", no: "31", className: "" },
//   { title: "R", no: "32", className: "" },
//   { title: "T", no: "33", className: "" },
//   { title: "Y", no: "34", className: "" },
//   { title: "U", no: "35", className: "" },
//   { title: "I", no: "36", className: "" },
//   { title: "O", no: "37", className: "" },
//   { title: "P", no: "38", className: "" },
//   { title: "[", no: "39", className: "" },
//   { title: "]", no: "40", className: "" },
//   { title: "\\", no: "41", className: "" },

//   // A row
//   { title: "Caps Lock", no: "42", className: "col-span-2 col-end-3" },
//   { title: "A", no: "43", className: "" },
//   { title: "S", no: "44", className: "" },
//   { title: "D", no: "45", className: "" },
//   { title: "F", no: "46", className: "" },
//   { title: "G", no: "47", className: "" },
//   { title: "H", no: "48", className: "" },
//   { title: "J", no: "49", className: "" },
//   { title: "K", no: "50", className: "" },
//   { title: "L", no: "51", className: "" },
//   { title: ";", no: "52", className: "" },
//   { title: "'", no: "53", className: "" },
//   { title: "return", no: "54", className: "col-span-2" },

//   // Z row
//   { title: "Shift", no: "55", className: "col-s[5_/_span_3]" },
//   { title: "Z", no: "56", className: "" },
//   { title: "X", no: "57", className: "" },
//   { title: "C", no: "58", className: "" },
//   { title: "V", no: "59", className: "" },
//   { title: "B", no: "60", className: "" },
//   { title: "N", no: "61", className: "" },
//   { title: "M", no: "62", className: "" },
//   { title: ",", no: "63", className: "" },
//   { title: ".", no: "64", className: "" },
//   { title: "/", no: "65", className: "" },
//   { title: "Shift", no: "66", className: "col-span-2" },

//   // Bottom row
//   { title: "Ctrl", no: "67", className: "" },
//   { title: "Win", no: "68", className: "" },
//   { title: "Alt", no: "69", className: "" },
//   { title: "Space", no: "70", className: "col-span-4" },
//   { title: "Alt", no: "71", className: "" },
//   { title: "Fn", no: "72", className: "" },
//   { title: "Menu", no: "73", className: "" },
//   { title: "Ctrl", no: "74", className: "" },

//   // Arrow keys
//   { title: "↑", no: "75", className: "" },
//   { title: "←", no: "76", className: "" },
//   { title: "↓", no: "77", className: "" },
//   { title: "→", no: "78", className: "" }
// ];

//   return (
//     <div className='grid grid-cols-15 gap-x-3 gap-y-2 auto-rows-[60px] leading-none'>
//         {keys.map((key,idx) => (
//             <Stack title={key.title} key={key.no} className={cn('',key.className)}></Stack>
//         ))}
//     </div>
//   )
// }


export default function keyboard() {

  return (
    <div className='mx-1 h-40 rounded-md bg-[#050505] p-1 '>
        <div className='mb-[2px] flex w-full shrink-0 gap-[2px]'>
            <Stack className='w-10 items-end justify-start pb-[2px] pl-[4px]' childrenClassName='items-start'>esc</Stack>
            <Stack childrenClassName='items-center justify-center'>F1</Stack>
            <Stack childrenClassName='items-center justify-center'>F2</Stack>
            <Stack childrenClassName='items-center justify-center'>F3</Stack>
            <Stack childrenClassName='items-center justify-center'>F4</Stack>
            <Stack childrenClassName='items-center justify-center'>F5</Stack>
            <Stack childrenClassName='items-center justify-center'>F6</Stack>
            <Stack childrenClassName='items-center justify-center'>F7</Stack>
            <Stack childrenClassName='items-center justify-center'>F8</Stack>
            <Stack childrenClassName='items-center justify-center'>F9</Stack>
            <Stack childrenClassName='items-center justify-center'>F10</Stack>
            <Stack childrenClassName='items-center justify-center'>F11</Stack>
            <Stack childrenClassName='items-center justify-center'>F12</Stack>
            <Stack className='w-8 pb-[2px] pl-[4px] ' childrenClassName='items-center justify-center'></Stack>
        </div>
        <div className='mb-[2px] flex w-full shrink-0 gap-[2px]'>
            <Stack>`</Stack>
            <Stack>1</Stack>
            <Stack>2</Stack>
            <Stack>3</Stack>
            <Stack>4</Stack>
            <Stack>5</Stack>
            <Stack>6</Stack>
            <Stack>7</Stack>
            <Stack>8</Stack>
            <Stack>9</Stack>
            <Stack>0</Stack>
            <Stack>-</Stack>
            <Stack>=</Stack>
            <Stack className='w-12 items-end justify-start pb-[2px] pl-[4px]'>delete</Stack>
        </div>

        <div className='mb-[2px] flex w-full shrink-0 gap-[2px]'>
            <Stack className='w-12'>Tab</Stack>
            <Stack>Q</Stack>
            <Stack>W</Stack>
            <Stack>E</Stack>
            <Stack>R</Stack>
            <Stack>T</Stack>
            <Stack>Y</Stack>
            <Stack>U</Stack>
            <Stack>I</Stack>
            <Stack>O</Stack>
            <Stack>P</Stack>
            <Stack>[</Stack>
            <Stack>]</Stack>
            <Stack>\</Stack>
        </div>

        <div className='mb-[2px] flex w-full shrink-0 gap-[2px]'>
            <Stack className='w-13'>Caps Lock</Stack>
            <Stack>A</Stack>
            <Stack>S</Stack>
            <Stack>D</Stack>
            <Stack>F</Stack>
            <Stack>G</Stack>
            <Stack>H</Stack>
            <Stack>J</Stack>
            <Stack>K</Stack>
            <Stack>L</Stack>
            <Stack>;</Stack>
            <Stack>&apos;</Stack>
            <Stack className='w-12 items-end justify-start pb-[2px] pl-[4px]'>return</Stack>
        </div>
        <div className='mb-[2px] flex w-full shrink-0 gap-[2px]'>   
            <Stack className='w-16'>Shift</Stack>
            <Stack>Z</Stack>
            <Stack>X</Stack>
            <Stack>C</Stack>
            <Stack>V</Stack>
            <Stack>B</Stack>
            <Stack>N</Stack>
            <Stack>M</Stack>
            <Stack>,</Stack>
            <Stack>.</Stack>
            <Stack>/</Stack>
            <Stack className='w-16 items-end justify-start pb-[2px] pl-[4px]'>Shift</Stack>
        </div>
        <div>
            <div className='flex w-full shrink-0 gap-[2px]'>
                <Stack>fn</Stack>
                <Stack>ctrl</Stack>
                <Stack>option</Stack>
                <Stack className='w-8'>command</Stack>
                <Stack className='w-35'>space</Stack>
                <Stack className='w-8'>command</Stack>
                    <Stack>option</Stack>
                    <div>
                        <div className='h-3 '></div>
                        <Stack className='h-3'>←</Stack>
                    </div>
                
                <div className='flex flex-col'>
                <Stack className='h-3'>↑</Stack>
                <Stack className='h-3'>↓</Stack>
                </div>
                <div>
                        <div className='h-3 '></div>
                        <Stack className='h-3'>→</Stack>
                    </div>
                </div>
        </div>
    </div>
    
  )
}
