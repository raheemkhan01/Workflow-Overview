'use client'
import React from 'react'
import UseCaseTabs from '@/Components/useCaseTabsScrol/useCaseTabs'

const Page = () => {
    return (
        <div className='w-[100%]'>
            <div className='flex w-[100%] flex-col items-start  gap-5'>
                <h1 className='flex w-[100%] h-7 flex-col justify-center text-black text-2xl non-italic font-semibold leading-snug bg-white'>Procurement Solution</h1>
                <div className='flex gap-4  w-[100%]'>
                    <p className='text-grey text-sm'>Last Updated By Siddhesh.D</p>
                    <p className='text-grey text-sm'>24 Min Ago</p>
                </div>
                <h1 className='text-black text-2xl font-semibold leading-normal bg-white px-4 py-4 w-[100%] h-14 flex items-center'>Usecase 1</h1>

            </div>
            <div className='w-[100%]'>
                <UseCaseTabs />
            </div>
        </div>
    )
}

export default Page