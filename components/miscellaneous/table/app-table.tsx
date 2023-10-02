'use client';

import 
    {
        useReactTable, 
        flexRender, 
        getCoreRowModel, 
        getPaginationRowModel,
        // getSortedRowModel,
        // getFilteredRowModel,

    } from '@tanstack/react-table';
import React, { useMemo, useState } from 'react';
import MOCKDATA from '../../../MOCK_DATA.json'




export default function DataTable() {

    const columns = [

        {
            header: 'Inmate ID',
            accessorKey: 'inmateID',
    
        },
        {
            header: 'First Name',
            accessorKey: 'firstName',
        },

        {
            header: 'Last Name',
            accessorKey: 'lastName',

        },
        {
            header: 'Date of Birth',
            accessorKey: 'dateofBirth',
        },
        {
            header: 'Gender',
            accessorKey: 'gender',
    
        },
        {
            header: 'Custodial Status',
            accessorKey: 'custodialStatus',
    
        },
        {
            header: 'Cell Number',
            accessorKey: 'cellNumber',
    
        },
    
    
    ]

    const data = useMemo( () => MOCKDATA, []);
    const [sorting, setSorting] = useState([]);
    const [filtering, setFiltering] = useState([]);

    const table = useReactTable({
        data, columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        // getSortedRowModel: getSortedRowModel(),
        // getFilteredRowModel: getFilteredRowModel(),

        state: {
            sorting: sorting,
            globalFilter: filtering,

            
        },
        // onStateChange: setSorting,
        // onGlobalFilterChange: setFiltering,
    })



    
    return (
            <main className='w-full'>
                <table className='table-auto w-full text-left border-separate border-spacing-y-4'>
                    <thead>

                        {
                            table.getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id} className='text-base font-normal text-slate-500 tracking-tighter leading-tight'>
                                    {headerGroup.headers.map(header => (
                                        <th key={headerGroup.id} className='py-1.5 px-4'>
                                            {
                                                flexRender(header.column.columnDef.header, header.getContext())
                                            }
                                        </th>
                                    ))}
                                </tr>
                            ))
                        }
                    </thead>

                    <tbody>
                        {table.getRowModel().rows.map((row) => (
                            <tr key={row.id} className='bg-white hover:bg-slate-100 cursor-pointer hover:shadow-md text-neutral-700 font-medium tracking-tight'>
                                {
                                    row.getVisibleCells().map((cell) => (
                                        <td key={cell.id} className='py-1.5 px-4'>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                    ))
                                }
                            </tr>

                        ))}
                    </tbody>
                </table>

                <div className="flex space-x-6 items-center mt-4 justify-end">
                    {/* <button className='text-slate-500 font-semibold' onClick={() => table.setPageIndex(0)}>First</button> */}
                    {/* <button className='bg-green-600 px-4 py-2' onClick={() => table.setPageIndex(table.getPageCount() -1)}>Last Page</button> */}
                    <button disabled={!table.getCanPreviousPage()} className='focus:outline-none focus:ring focus:ring-slate-300 hover:bg-slate-700 bg-cyan-700 px-4 py-2 rounded-lg font-semibold text-base text-white' onClick={() => table.previousPage()}>&larr;&nbsp;Previous</button>
                    <button disabled={!table.getCanNextPage()} className='focus:outline-none focus:ring focus:ring-slate-300 hover:bg-slate-700 bg-cyan-700 px-4 py-2 rounded-lg font-semibold text-base text-white' onClick={()=>table.nextPage()}>Next&nbsp;&rarr;</button>
                </div>
            </main>
    );

}