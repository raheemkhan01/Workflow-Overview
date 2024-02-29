import React from 'react'
import use from "../../../public/assets/user1.svg"
import comment from "../../../public/assets/Comment.svg"
import user2 from "../../../public/assets/user0.svg"
import Image from 'next/image'

export const UseCase1Comments = () => {
    return (
        <div>
            <div className="w-[100%] border shadow-md mb-6 mt-4">

                <h2 className="text-black-500 text-m font-bold p-2 border bg-neutral-200">
                    Usecase Development
                </h2>
                <div className='flex justify-between px-4'>
                    <div className='flex items-center gap-3 py-6 '>
                        <h2>Assign Name :</h2>
                        <Image src={use} className='rounded-full w-10 ' />
                        <p>Angela Moss</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <Image src={comment} />
                        <button className='bg-blue-400 text-white p-2'>Action</button>
                    </div>
                </div>
            </div>

            <div className="w-[100%] border shadow-md mb-6 mt-4">
                <h2 className="text-black-500 text-m font-bold p-2 border bg-neutral-200">
                    Design Specs
                </h2>
                <div className='flex justify-between px-4'>
                    <div className='flex items-center gap-3 py-6 '>
                        <h2>Assign Name :</h2>
                        <Image src={user2} className='rounded-full w-10 ' />
                        <p>Jenner</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <Image src={comment} />
                        <button className='bg-blue-400 text-white p-2'>Action</button>
                    </div>
                </div>
            </div>
            <div className="w-[100%] border shadow-md mb-6 mt-4">
                <h2 className="text-black-500 text-m font-bold p-2 border bg-neutral-200">
                    Checklist for Requirement
                </h2>
                <div className='px-4  py-6'>
                    <div className='flex gap-2'>
                        <input type='checkbox' />
                        <label>Use Case Document is stitched in netlify site in Use Cases Matrix</label>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' />
                        <label>Screen Design is stitched in netlify site in Use Cases Matrix</label>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' />
                        <label>Functional Design Review meeting is done with Technical Team</label>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' />
                        <label>Scrum Planning with Micro Level Task Allocation is done</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const UseCase2Comments = () => {
    return (
        <div>
            <div className="w-[100%] border shadow-md mb-6 mt-4">
                <h2 className="text-black-500 text-m font-bold p-2 border bg-neutral-200">
                    API Specification
                </h2>
                <div className='flex justify-between px-4'>
                    <div className='flex items-center gap-3 py-6 '>
                        <h2>Assign Name :</h2>
                        <Image src={use} className='rounded-full w-10 ' />
                        <p>Angela Moss</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <Image src={comment} />
                        <button className='bg-blue-400 text-white p-2'>Action</button>
                    </div>
                </div>
            </div>

            <div className="w-[100%] border shadow-md mb-6 mt-4">
                <h2 className="text-black-500 text-m font-bold p-2 border bg-neutral-200">
                    UI Code
                </h2>
                <div className='flex justify-between px-4'>
                    <div className='flex items-center gap-3 py-6 '>
                        <h2>Assign Name :</h2>
                        <Image src={user2} className='rounded-full w-10 ' />
                        <p>Jenner</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <Image src={comment} />
                        <button className='bg-blue-400 text-white p-2'>Action</button>
                    </div>
                </div>
            </div>
            <div className="w-[100%] border shadow-md mb-6 mt-4">
                <h2 className="text-black-500 text-m font-bold p-2 border bg-neutral-200">
                    Test Plans
                </h2>
                <div className='flex justify-between px-4'>
                    <div className='flex items-center gap-3 py-6 '>
                        <h2>Assign Name :</h2>
                        <Image src={user2} className='rounded-full w-10 ' />
                        <p>Jenner</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <Image src={comment} />
                        <button className='bg-blue-400 text-white p-2'>Action</button>
                    </div>
                </div>
            </div>
            <div className="w-[100%] border shadow-md mb-6 mt-4">
                <h2 className="text-black-500 text-m font-bold p-2 border bg-neutral-200">
                    Checklist for Requirement
                </h2>
                <div className='px-4  py-6'>
                    <div className='flex gap-2'>
                        <input type='checkbox' />
                        <label>Finalized API Specification is available in GitHub</label>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' />
                        <label>API spec Review meeting is done with UI /API Team</label>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' />
                        <label>UI code is available in GitHub that works with Mock API</label>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' />
                        <label>The code has adequate build / test instructions to run mock server and review UI</label>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' />
                        <label>Test Plans is available in Git and its stitched in netlify site in Use Cases Matrix</label>
                    </div>
                </div>
            </div>
        </div>
    )
}


export const UseCase3Comments = () => {
    return (
        <div>
            <div className="w-[100%] border shadow-md mb-6 mt-4">
                <h2 className="text-black-500 text-m font-bold p-2 border bg-neutral-200">
                    Data Design
                </h2>
                <div className='flex justify-between px-4'>
                    <div className='flex items-center gap-3 py-6 '>
                        <h2>Assign Name :</h2>
                        <Image src={use} className='rounded-full w-10 ' />
                        <p>Angela Moss</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <Image src={comment} />
                        <button className='bg-blue-400 text-white p-2'>Action</button>
                    </div>
                </div>
            </div>

            <div className="w-[100%] border shadow-md mb-6 mt-4">
                <h2 className="text-black-500 text-m font-bold p-2 border bg-neutral-200">
                    API Code
                </h2>
                <div className='flex justify-between px-4'>
                    <div className='flex items-center gap-3 py-6 '>
                        <h2>Assign Name :</h2>
                        <Image src={user2} className='rounded-full w-10 ' />
                        <p>Jenner</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <Image src={comment} />
                        <button className='bg-blue-400 text-white p-2'>Action</button>
                    </div>
                </div>
            </div>
            <div className="w-[100%] border shadow-md mb-6 mt-4">
                <h2 className="text-black-500 text-m font-bold p-2 border bg-neutral-200">
                    Checklist for Requirement
                </h2>
                <div className='px-4  py-6'>
                    <div className='flex gap-2'>
                        <input type='checkbox' />
                        <label>Data Design is available in GitHub and stitched properly</label>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' />
                        <label>API Development followed the git flow of projects(branching etc) to develop actual API</label>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' />
                        <label>API sample data is available in github</label>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' />
                        <label>Adequate readme instruction is available in GitHub to run with sample data</label>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' />
                        <label>API are tested against postman collection generated in mock stage</label>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' />
                        <label>All unit / functional / performance tests are written and kept in github</label>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' />
                        <label>All functional /performance tests meet SLA's</label>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' />
                        <label>All functional / Performance Tests</label>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' />
                        <label>Actual API works with UI by simply changing Base URL</label>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' />
                        <label>API follows 10 Points API security verification</label>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' />
                        <label>API is properly instrumented for performance metrics / logs / traces</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const UseCase4Comments = () => {
    return (
        <div>
            <div className="w-[100%] border shadow-md mb-6 mt-4">
                <h2 className="text-black-500 text-m font-bold p-2 border bg-neutral-200">
                    Build Pipeline
                </h2>
                <div className='flex justify-between px-4'>
                    <div className='flex items-center gap-3 py-6 '>
                        <h2>Assign Name :</h2>
                        <Image src={use} className='rounded-full w-10 ' />
                        <p>Angela Moss</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <Image src={comment} />
                        <button className='bg-blue-400 text-white p-2'>Action</button>
                    </div>
                </div>
            </div>

            <div className="w-[100%] border shadow-md mb-6 mt-4">
                <h2 className="text-black-500 text-m font-bold p-2 border bg-neutral-200">
                    Test Result
                </h2>
                <div className='flex justify-between px-4'>
                    <div className='flex items-center gap-3 py-6 '>
                        <h2>Assign Name :</h2>
                        <Image src={user2} className='rounded-full w-10 ' />
                        <p>Jenner</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <Image src={comment} />
                        <button className='bg-blue-400 text-white p-2'>Action</button>
                    </div>
                </div>
            </div>
            <div className="w-[100%] border shadow-md mb-6 mt-4">
                <h2 className="text-black-500 text-m font-bold p-2 border bg-neutral-200">
                    Test Environment
                </h2>
                <div className='flex justify-between px-4'>
                    <div className='flex items-center gap-3 py-6 '>
                        <h2>Assign Name :</h2>
                        <Image src={user2} className='rounded-full w-10 ' />
                        <p>Jenner</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <Image src={comment} />
                        <button className='bg-blue-400 text-white p-2'>Action</button>
                    </div>
                </div>
            </div>
            <div className="w-[100%] border shadow-md mb-6 mt-4">
                <h2 className="text-black-500 text-m font-bold p-2 border bg-neutral-200">
                    Checklist for Requirement
                </h2>
                <div className='px-4  py-6'>
                    <div className='flex gap-2'>
                        <input type='checkbox' />
                        <label>Data Design is available in GitHub and stitched properly</label>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' />
                        <label>API Development followed the git flow of projects(branching etc) to develop actual API</label>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' />
                        <label>API sample data is available in github</label>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' />
                        <label>Adequate readme instruction is available in GitHub to run with sample data</label>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' />
                        <label>API are tested against postman collection generated in mock stage</label>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' />
                        <label>All unit / functional / performance tests are written and kept in github</label>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' />
                        <label>All functional /performance tests meet SLA's</label>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' />
                        <label>All functional / Performance Tests</label>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' />
                        <label>Actual API works with UI by simply changing Base URL</label>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' />
                        <label>API follows 10 Points API security verification</label>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' />
                        <label>API is properly instrumented for performance metrics / logs / traces</label>
                    </div>
                </div>
            </div>
        </div>
    )
}
