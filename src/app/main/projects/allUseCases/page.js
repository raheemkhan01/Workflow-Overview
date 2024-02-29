'use client'
import React, { useState } from 'react'

const newform = () => {

  const details = { assignto: '', describe: '', select1: '', date1: '', comm1: '', select2: '', date2: '', comm2: '', select3: '', date3: '', comm3: '' }
  const Second = { Sassignto: '', Sdescribe: '', Sselect1: '', Sdate1: '', Scomm1: '', Sselect2: '', Sdate2: '', Scomm2: '', Sselect3: '', Sdate3: '', Scomm3: '', Sselect4: '', Sdate4: '', Scomm4: '' };
  const Third = { Tassignto: '', Tdescribe: '', Tselect1: '', Tdate1: '', Tcomm1: '', Tselect2: '', Tdate2: '', Tcomm2: '', Tselect3: '', Tdate3: '', Tcomm3: '', Tselect4: '', Tdate4: '', Tcomm4: '', Tselect5: '', Tdate5: '', Tcomm5: '', Tselect6: '', Tdate6: '', Tcomm6: '', Tselect7: '', Tdate7: '', Tcomm7: '', Tselect8: '', Tdate8: '', Tcomm8: '' };
  const Fourth = { Fassignto: '', Fdescribe: '', Fselect1: '', Fdate1: '', Fcomm1: '', Fselect2: '', Fdate2: '', Fcomm2: '', Fselect3: '', Fdate3: '', Fcomm3: '', Fselect4: '', Fdate4: '', Fcomm4: '', Fselect5: '', Fdate5: '', Fcomm5: '', Fselect6: '', Fdate6: '', Fcomm6: '' };
  const Fifth = { Fiassignto: '', Fidescribe: '', Fiselect1: '', Fidate1: '', Ficomm1: '', Fiselect2: '', Fidate2: '', Ficomm2: '', Fiselect3: '', Fidate3: '', Ficomm3: '', Fiselect4: '', Fidate4: '', Ficomm4: '' };
  const Six = { Siassignto: '', Sidescribe: '', Siselect1: '', Sidate1: '', Sicomm1: '', Siselect2: '', Sidate2: '', Sicomm2: '' };
  const [Details, setDetails] = useState(details)
  const [MockDev, setMOckDev] = useState(Second)
  const [ActualDev, setAcutalDev] = useState(Third)
  const [CiCdTest, setCiCdTest] = useState(Fourth)
  const [Stage, steStage] = useState(Fifth)
  const [Publish, setPublish] = useState(Six)

  const setOnchange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...Details, [name]: value })
    setMOckDev({ ...MockDev, [name]: value })
    setAcutalDev({ ...ActualDev, [name]: value })
    setCiCdTest({ ...CiCdTest, [name]: value })
    steStage({ ...Stage, [name]: value })
    setPublish({ ...Publish, [name]: value })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const Data = [Details, MockDev, ActualDev, CiCdTest, Stage, Publish]
    console.log(Data);
  }

  return (
    <div>

      <div className='flex w-[100%] flex-col items-start gap-5'>
        <div className='flex w-[100%] h-7 flex-col justify-center text-black text-2xl non-italic font-semibold leading-snug'>Procurement Workflow</div>
        <div className='text-black text-2xl font-semibold leading-normal bg-white px-4 py-4 w-[100%] h-14 flex items-center'>Usecase </div>
        <div className='text-black text-2xl font-semibold leading-normal bg-white px-4 py-4 w-[100%] h-14 flex items-center'>Basic Details</div>
      </div>

      <div className='flex flex-col w-[100%] items-start gap-2.5 shrink-0'>
        <form>
          <div className='flex gap-3 ml-10 mt-5'>
            <div className='flex flex-col text-end justify-around mb-11 gap-2'>
              <label>UserCase Name:</label>
              <label>Assign to:</label>
              <label>UserCase description:</label>
            </div>
            <div className='flex flex-col justify-around gap-6'>
              <input type='text' className='w-[35.5rem] p-1 border border-white shadow-md' placeholder='Admin name'></input>
              <input type='text' className='w-[35.5rem] p-1 border border-white shadow-md' placeholder='Project name'></input>
              <textarea className='w-[35.5rem] h-[4.7500rem] p-1 border border-white shadow-md' placeholder='Description.....'></textarea>
            </div>
          </div>
        </form>
      </div>

      {/* //Workflow Head section */}


      <div className='text-black text-2xl font-semibold leading-normal bg-white px-4 py-3 w-[100%] flex items-center mt-6 mb-6'>Workflow Stage Details</div>

      <form onSubmit={submitHandler}>
        {/* Requirement section */}

        <div className='flex w-[100%] flex-col items-center shrink-0  gap-8 bg-white mb-4'>
          <div className='w-[100%] px-6 py-4  flex items-center  justify-between border-y border-b-neutral-300 border border-t-0 border-x-0'>
            <div className='text-pink-300 text-xl non-italic font-medium leading-normal '>1.Requirement</div>
            <div className='text-blue-500'>View More</div>
          </div>

          <div className='flex px-6 items-start self-stretch w-[100%] gap-4 border-y border-t-neutral-300 border-b-0'>
            <div className='flex flex-col items-start w-[50%]  gap-4 '>
              <label className=' text-blue-400 text-sm font-normal leading-snug' for='Assign'>Assign To:</label>
              <input type='text' className='w-[100%] h=[1.375rem] p-1 border border-neutral-300 rounded-sm' id='Assign' placeholder='example' name='assignto' value={Details.assignto} onChange={setOnchange} />
            </div>

            <div className='flex flex-col items-start w-[50%]  gap-4'>
              <label className=' text-blue-400 text-sm font-normal leading-snug'>Description:</label>
              <input type='text' className='w-[100%] h=[1.375rem] p-1 border border-neutral-300 rounded-sm' placeholder='example' name='describe' value={Details.describe} onChange={setOnchange} />
            </div>
          </div>
        </div>

        {/* Requirement Sub-Stage Details */}
        <div className='w-[100%] py-2 bg-white'>
          <div className=' w-[95%] flex px-6 py-4 flex-col items-start border-b-neutral-300 border border-t-0 border-x-0 bg-white mt-2 text-pink-300 text-xl font-medium leading-normal'>Requirement Sub-Stage Details</div>
          <div className='w-[95%]'>

            <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
              <h1 className='text-blue-500 ml-5'>Create Usecase Document</h1>
              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Assign To:</label>
                <select className='w-[100%] px-3 py-1 border border-neutral-300' I>
                  <option>@</option>
                </select>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Start - End date</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date' name='date1' value={Details.date1} onChange={setOnchange}></input>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Comments</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text' name='comm1' value={Details.comm1} onChange={setOnchange}></input>
              </div>
            </div>

            <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
              <h1 className='text-blue-500 pl-14'>Create Screen Design</h1>

              <div className='flex flex-col gap-2 w-[25%] '>
                <label className='w-[100%]'>Assign To:</label>
                <select className='w-[100%] px-3 py-1 border border-neutral-300' name='select2' value={Details.select2} onChange={setOnchange}>
                  <option>@</option>
                </select>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Start - End date</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date' name='date2' value={Details.date2} onChange={setOnchange}></input>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Comments</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text' name='comm2' value={Details.comm2} onChange={setOnchange}></input>
              </div>

            </div>

            <div className='flex items-center justify-around  w-[100%]'>
              <h1 className='text-blue-500 ml-5'>Updating Usecase in Netlifi</h1>
              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Assign To:</label>
                <select className='w-[100%] px-3 py-1 border border-neutral-300' name='select3' value={Details.select3} onChange={setOnchange}>
                  <option>@</option>
                </select>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Start - End date</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date' name='date3' value={Details.date3} onChange={setOnchange}></input>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Comments</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text' name='comm3' value={Details.comm3} onChange={setOnchange}></input>
              </div>
            </div>

          </div>
        </div>
        <div className='flex items-center justify-end p-4'>
          <div className='flex gap-4 text-lg'>
            <button className='w-28 h-10 border'>Cancel</button>
            <button className='w-28 h-10 border bg-blue-500 text-white' type='submit'>Save</button>
          </div>
        </div>
      </form>


      {/* 2.Mock Development */}
      <form onSubmit={submitHandler}>
        <div className='flex w-[100%] flex-col items-center shrink-0  gap-8 bg-white mb-4'>
          <div className='w-[100%] px-6 py-4  flex items-center  justify-between border-y border-b-neutral-300 border border-t-0 border-x-0'>
            <div className='text-pink-300 text-xl non-italic font-medium leading-normal'>2.Mock Development</div>
            <div className='text-blue-500'>View More</div>
          </div>

          <div className='flex px-6 items-start self-stretch w-[100%] gap-4 border-y border-t-neutral-300 border-b-0'>
            <div className='flex flex-col items-start w-[50%]  gap-4 '>
              <label className=' text-blue-400 text-sm font-normal leading-snug'>Assign To:</label>
              <input type='text' className='w-[100%] h=[1.375rem] p-1 border border-neutral-300 rounded-sm' placeholder='example' name='Sassignto' value={MockDev.Sassignto} onChange={setOnchange} />
            </div>

            <div className='flex flex-col items-start w-[50%]  gap-4'>
              <label className=' text-blue-400 text-sm font-normal leading-snug'>Description:</label>
              <input type='text' className='w-[100%] h=[1.375rem] p-1 border border-neutral-300 rounded-sm' placeholder='example' name='Sdescribe' value={MockDev.Sdescribe} onChange={setOnchange} />
            </div>
          </div>
        </div>

        {/* Mock Development Sub-Stage Details */}

        <div className='w-[100%] py-2 bg-white'>
          <div className=' w-[95%] flex px-6 py-4 flex-col items-start border-b-neutral-300 border border-t-0 border-x-0 bg-white mt-2 text-pink-300 text-xl font-medium leading-normal'>Mock Development Sub-Stage Details</div>
          <div className='w-[95%]'>

            <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
              <h1 className='text-blue-500 mr-28'>Create API Spec</h1>
              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Assign To:</label>
                <select className='w-[100%] px-3 py-1 border border-neutral-300' name='Sselect1' value={MockDev.Sselect1} onChange={setOnchange}>
                  <option>@</option>
                </select>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Start - End date</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date' name='Sdate1' value={MockDev.Sdate1} onChange={setOnchange}></input>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Comments</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text' name='Scomm1' value={MockDev.Scomm1} onChange={setOnchange}></input>
              </div>
            </div>


            <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
              <h1 className='text-blue-500 mr-20'>Create Postman Test</h1>
              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Assign To:</label>
                <select className='w-[100%] px-3 py-1 border border-neutral-300' name='Sselect2' value={MockDev.Sselect2} onChange={setOnchange}>
                  <option>@</option>
                </select>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Start - End date</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date' name='Sdate2' value={MockDev.Sdate2} onChange={setOnchange}></input>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Comments</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text' name='Scomm2' value={MockDev.Scomm2} onChange={setOnchange}></input>
              </div>
            </div>


            <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
              <h1 className='text-blue-500'>Create UI Screen with Mock API</h1>
              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Assign To:</label>
                <select className='w-[100%] px-3 py-1 border border-neutral-300' name='Sselect3' value={MockDev.Sselect3} onChange={setOnchange}>
                  <option>@</option>
                </select>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Start - End date</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date' name='Sdate3' value={MockDev.Sdate3} onChange={setOnchange}></input>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Comments</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text' name='Scomm3' value={MockDev.Scomm3} onChange={setOnchange}></input>
              </div>
            </div>


            <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
              <h1 className='text-blue-500 mr-32'>Create Test ApI</h1>
              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Assign To:</label>
                <select className='w-[100%] px-3 py-1 border border-neutral-300' name='Sselect4' value={MockDev.Sselect4} onChange={setOnchange}>
                  <option>@</option>
                </select>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Start - End date</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date' name='Sdate4' value={MockDev.Sdate4} onChange={setOnchange}></input>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Comments</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text' name='Scomm4' value={MockDev.Scomm4} onChange={setOnchange}></input>
              </div>
            </div>

          </div>
        </div>
        <div className='flex items-center justify-end p-4'>
          <div className='flex gap-4 text-lg'>
            <button className='w-28 h-10 border'>Cancel</button>
            <button className='w-28 h-10 border bg-blue-500 text-white'>Save</button>
          </div>
        </div>
      </form>






      {/* 3.Actual Development */}
      <form onSubmit={submitHandler}>

        <div className='flex w-[100%] flex-col items-center shrink-0  gap-8 bg-white mb-4'>
          <div className='w-[100%] px-6 py-4  flex items-center  justify-between border-y border-b-neutral-300 border border-t-0 border-x-0'>
            <div className='text-pink-300 text-xl non-italic font-medium leading-normal '>3.Actual Development</div>
            <div className='text-blue-500'>View More</div>
          </div>

          <div className='flex px-6 items-start self-stretch w-[100%] gap-4 border-y border-t-neutral-300 border-b-0'>
            <div className='flex flex-col items-start w-[50%]  gap-4 '>
              <label className=' text-blue-400 text-sm font-normal leading-snug'>Assign To:</label>
              <input type='text' className='w-[100%] h=[1.375rem] p-1 border border-neutral-300 rounded-sm' placeholder='example' name='Tassignto' value={ActualDev.Tassignto} onChange={setOnchange} />
            </div>

            <div className='flex flex-col items-start w-[50%]  gap-4'>
              <label className=' text-blue-400 text-sm font-normal leading-snug'>Description:</label>
              <input type='text' className='w-[100%] h=[1.375rem] p-1 border border-neutral-300 rounded-sm' placeholder='example' name='Tdescribe' value={ActualDev.Tdescribe} onChange={setOnchange} />
            </div>
          </div>
        </div>

        {/* Actual Development Sub-Stage Details */}
        <div className='w-[100%] py-2 bg-white'>
          <div className=' w-[95%] flex px-6 py-4 flex-col items-start border-b-neutral-300 border border-t-0 border-x-0 bg-white mt-2 text-pink-300 text-xl font-medium leading-normal'>Mock Development Sub-Stage Details</div>
          <div className='w-[95%]'>


            <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
              <h1 className='text-blue-500 mr-12'>Data Design GitHub Page</h1>
              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Assign To:</label>
                <select className='w-[100%] px-3 py-1 border border-neutral-300' name='Tselect1' value={ActualDev.Tselect1} onChange={setOnchange}>
                  <option>@</option>
                </select>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Start - End date</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date' name='Tdate1' value={ActualDev.Tdate1} onChange={setOnchange}></input>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Comments</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text' name='Tcomm1' value={ActualDev.Tcomm1} onChange={setOnchange}></input>
              </div>
            </div>

            <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
              <h1 className='text-blue-500 mr-9'>API Source Code in GitHub</h1>
              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Assign To:</label>
                <select className='w-[100%] px-3 py-1 border border-neutral-300' name='Tselect2' value={ActualDev.Tselect2} onChange={setOnchange}>
                  <option>@</option>
                </select>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Start - End date</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date' name='Tdate2' value={ActualDev.Tdate2} onChange={setOnchange}></input>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Comments</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text' name='Tcomm2' value={ActualDev.Tcomm2} onChange={setOnchange}></input>
              </div>
            </div>


            <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
              <h1 className='text-blue-500 mr-5'>Populate Test data in GitHub</h1>
              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Assign To:</label>
                <select className='w-[100%] px-3 py-1 border border-neutral-300' name='Tselect3' value={ActualDev.Tselect3} onChange={setOnchange}>
                  <option>@</option>
                </select>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Start - End date</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date' name='Tdate3' value={ActualDev.Tdate3} onChange={setOnchange}></input>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Comments</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text' name='Tcomm3' value={ActualDev.Tcomm3} onChange={setOnchange}></input>
              </div>
            </div>




            <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
              <h1 className='text-blue-500 mr-20'>Junit5 Test in GitHub</h1>
              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Assign To:</label>
                <select className='w-[100%] px-3 py-1 border border-neutral-300' name='Tselect4' value={ActualDev.Tselect4} onChange={setOnchange}>
                  <option>@</option>
                </select>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Start - End date</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date' name='Tdate4' value={ActualDev.Tdate4} onChange={setOnchange}></input>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Comments</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text' name='Tcomm4' value={ActualDev.Tcomm4} onChange={setOnchange}></input>
              </div>
            </div>




            <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
              <h1 className='text-blue-500 mr-1'>Cucumber BDD tests in GitHub</h1>
              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Assign To:</label>
                <select className='w-[100%] px-3 py-1 border border-neutral-300' name='Tselect5' value={ActualDev.Tselect5} onChange={setOnchange}>
                  <option>@</option>
                </select>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Start - End date</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date' name='Tdat5' value={ActualDev.Tdate5} onChange={setOnchange}></input>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Comments</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text' name='Tcomm5' value={ActualDev.Tcomm5} onChange={setOnchange}></input>
              </div>
            </div>



            <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
              <h1 className='text-blue-500 mr-4'>Code Review with Tech Lead</h1>
              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Assign To:</label>
                <select className='w-[100%] px-3 py-1 border border-neutral-300' name='Tselect6' value={ActualDev.Tselect6} onChange={setOnchange}>
                  <option>@</option>
                </select>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Start - End date</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date' name='Tdate6' value={ActualDev.Tdate6} onChange={setOnchange}></input>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Comments</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text' name='Tcomm6' value={ActualDev.Tcomm6} onChange={setOnchange}></input>
              </div>
            </div>


            <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
              <h1 className='text-blue-500 mr-12'>Actual UI-API Integration</h1>
              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Assign To:</label>
                <select className='w-[100%] px-3 py-1 border border-neutral-300' name='Tselect7' value={ActualDev.Tselect7} onChange={setOnchange}>
                  <option>@</option>
                </select>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Start - End date</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date' name='Tdate7' value={ActualDev.Tdate7} onChange={setOnchange}></input>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Comments</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text' name='Tcomm7' value={ActualDev.Tcomm7} onChange={setOnchange}></input>
              </div>
            </div>


            <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
              <h1 className='text-blue-500 mr-8'>Branch Merge after Review</h1>
              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Assign To:</label>
                <select className='w-[100%] px-3 py-1 border border-neutral-300' name='Tselect8' value={ActualDev.Tselect8} onChange={setOnchange}>
                  <option>@</option>
                </select>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Start - End date</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date' name='Tdate8' value={ActualDev.Tdate8} onChange={setOnchange}></input>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Comments</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text' name='Tcomm8' value={ActualDev.Tcomm8} onChange={setOnchange}></input>
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-end p-4'>
          <div className='flex gap-4 text-lg'>
            <button className='w-28 h-10 border'>Cancel</button>
            <button className='w-28 h-10 border bg-blue-500 text-white'>Save</button>
          </div>
        </div>
      </form>







      {/* 4.CI/CD/TEST */}
      <form onSubmit={submitHandler}>

        <div className='flex w-[100%] flex-col items-center shrink-0  gap-8 bg-white mb-4'>
          <div className='w-[100%] px-6 py-4  flex items-center  justify-between border-y border-b-neutral-300 border border-t-0 border-x-0'>
            <div className='text-pink-300 text-xl non-italic font-medium leading-normal '>4.CI/CD/TEST</div>
            <div className='text-blue-500'>View More</div>
          </div>

          <div className='flex px-6 items-start self-stretch w-[100%] gap-4 border-y border-t-neutral-300 border-b-0'>
            <div className='flex flex-col items-start w-[50%]  gap-4 '>
              <label className=' text-blue-400 text-sm font-normal leading-snug'>Assign To:</label>
              <input type='text' className='w-[100%] h=[1.375rem] p-1 border border-neutral-300 rounded-sm' placeholder='example' name='Fassignto' value={CiCdTest.Fassignto} onChange={setOnchange} />
            </div>

            <div className='flex flex-col items-start w-[50%]  gap-4'>
              <label className=' text-blue-400 text-sm font-normal leading-snug'>Description:</label>
              <input type='text' className='w-[100%] h=[1.375rem] p-1 border border-neutral-300 rounded-sm' placeholder='example' name='Fdescribe' value={CiCdTest.Fdescribe} onChange={setOnchange} />
            </div>
          </div>
        </div>

        {/* Actual Development Sub-Stage Details */}
        <div className='w-[100%] py-2 bg-white'>
          <div className=' w-[95%] flex px-6 py-4 flex-col items-start border-b-neutral-300 border border-t-0 border-x-0 bg-white mt-2 text-pink-300 text-xl font-medium leading-normal'>CI/CD Sub-Stage Details</div>
          <div className='w-[95%]'>


            <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
              <h1 className='text-blue-500 mr-20'>Create CI/CD Pipeline</h1>
              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Assign To:</label>
                <select className='w-[100%] px-3 py-1 border border-neutral-300' name='Fselect1' value={CiCdTest.Fselect1} onChange={setOnchange}>
                  <option>@</option>
                </select>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Start - End date</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date' name='Fdate1' value={CiCdTest.Fdate1} onChange={setOnchange}></input>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Comments</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text' name='Fcomm1' value={CiCdTest.Fcomm1} onChange={setOnchange}></input>
              </div>
            </div>

            <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
              <h1 className='text-blue-500 mr-9'>Create Kubernetes Operator</h1>
              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Assign To:</label>
                <select className='w-[100%] px-3 py-1 border border-neutral-300' name='Fselect2' value={CiCdTest.Fselect2} onChange={setOnchange}>
                  <option>@</option>
                </select>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Start - End date</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date' name='Fdate2' value={CiCdTest.Fdate2} onChange={setOnchange} ></input>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Comments</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text' name='Fcomm2' value={CiCdTest.Fcomm2} onChange={setOnchange}></input>
              </div>
            </div>


            <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
              <h1 className='text-blue-500 mr-3'>Link API With Github and Netlifi</h1>
              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Assign To:</label>
                <select className='w-[100%] px-3 py-1 border border-neutral-300' name='Fselec3' value={CiCdTest.Fselect3} onChange={setOnchange}>
                  <option>@</option>
                </select>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Start - End date</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date' name='Fdate3' value={CiCdTest.Fdate3} onChange={setOnchange}></input>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Comments</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text' name='Fcomm3' value={CiCdTest.Fcomm3} onChange={setOnchange}></input>
              </div>
            </div>




            <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
              <h1 className='text-blue-500 '>Upload Test Result in S# Website</h1>
              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Assign To:</label>
                <select className='w-[100%] px-3 py-1 border border-neutral-300' name='Fselect4' value={CiCdTest.Fselect4} onChange={setOnchange}>
                  <option>@</option>
                </select>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Start - End date</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date' name='Fdate4' value={CiCdTest.Fdate4} onChange={setOnchange}></input>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Comments</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text' name='Fcomm4' value={CiCdTest.Fcomm4} onChange={setOnchange}></input>
              </div>
            </div>




            <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
              <h1 className='text-blue-500'>Upload Test env URL in Netlifi site</h1>
              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Assign To:</label>
                <select className='w-[100%] px-3 py-1 border border-neutral-300' name='Fselect5' value={CiCdTest.Fselect5} onChange={setOnchange}>
                  <option>@</option>
                </select>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Start - End date</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date' name='Fdate5' value={CiCdTest.Fdate5} onChange={setOnchange}></input>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Comments</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text' name='Fcomm5' value={CiCdTest.Fcomm5} onChange={setOnchange}></input>
              </div>
            </div>



            <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
              <h1 className='text-blue-500 mr-28'>Stage after review</h1>
              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Assign To:</label>
                <select className='w-[100%] px-3 py-1 border border-neutral-300' name='Fselect6' value={CiCdTest.Fselect6} onChange={setOnchange}>
                  <option>@</option>
                </select>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Start - End date</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date' name='Fdate6' value={CiCdTest.Fdate6} onChange={setOnchange}></input>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Comments</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text' name='Fcomm6' value={CiCdTest.Fcomm6} onChange={setOnchange}></input>
              </div>
            </div>

          </div>
        </div>
        <div className='flex items-center justify-end p-4'>
          <div className='flex gap-4 text-lg'>
            <button className='w-28 h-10 border'>Cancel</button>
            <button className='w-28 h-10 border bg-blue-500 text-white'>Save</button>
          </div>
        </div>
      </form>




      {/* 5.Stage / Release */}
      <form onSubmit={submitHandler}>
        <div className='flex w-[100%] flex-col items-center shrink-0  gap-8 bg-white mb-4'>
          <div className='w-[100%] px-6 py-4  flex items-center  justify-between border-y border-b-neutral-300 border border-t-0 border-x-0'>
            <div className='text-pink-300 text-xl non-italic font-medium leading-normal '>5.Stage / Release</div>
            <div className='text-blue-500'>View More</div>
          </div>

          <div className='flex px-6 items-start self-stretch w-[100%] gap-4 border-y border-t-neutral-300 border-b-0'>
            <div className='flex flex-col items-start w-[50%]  gap-4 '>
              <label className=' text-blue-400 text-sm font-normal leading-snug'>Assign To:</label>
              <input type='text' className='w-[100%] h=[1.375rem] p-1 border border-neutral-300 rounded-sm' placeholder='example' name='Fiassignto' value={Stage.Fiassignto} onChange={setOnchange} />
            </div>

            <div className='flex flex-col items-start w-[50%]  gap-4'>
              <label className=' text-blue-400 text-sm font-normal leading-snug'>Description:</label>
              <input type='text' className='w-[100%] h=[1.375rem] p-1 border border-neutral-300 rounded-sm' placeholder='example' name='Fidescribe' value={Stage.Fidescribe} onChange={setOnchange} />
            </div>
          </div>
        </div>

        {/* Mock Development Sub-Stage Details */}

        <div className='w-[100%] py-2 bg-white'>
          <div className=' w-[95%] flex px-6 py-4 flex-col items-start border-b-neutral-300 border border-t-0 border-x-0 bg-white mt-2 text-pink-300 text-xl font-medium leading-normal'>Stage / Release Sub-Stage Details</div>
          <div className='w-[95%]'>

            <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
              <h1 className='text-blue-500 mr-12'>Stage Test and Review</h1>
              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Assign To:</label>
                <select className='w-[100%] px-3 py-1 border border-neutral-300' name='Fiselect1' value={Stage.Fiselect1} onChange={setOnchange}>
                  <option>@</option>
                </select>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Start - End date</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date' name='Fidate1' value={Stage.Fidate1} onChange={setOnchange}></input>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Comments</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text' name='Ficomm1' value={Stage.Ficomm1} onChange={setOnchange}></input>
              </div>
            </div>


            <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
              <h1 className='text-blue-500 mr-24'>Promote to Prod</h1>
              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Assign To:</label>
                <select className='w-[100%] px-3 py-1 border border-neutral-300' name='Fiselect2' value={Stage.Fiselect2} onChange={setOnchange}>
                  <option>@</option>
                </select>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Start - End date</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date' name='Fidate2' value={Stage.Fidate2} onChange={setOnchange}></input>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Comments</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text' name='Ficomm2' value={Stage.Ficomm2} onChange={setOnchange}></input>
              </div>
            </div>


            <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
              <h1 className='text-blue-500 mr-8'>API Security Test in Prod</h1>
              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Assign To:</label>
                <select className='w-[100%] px-3 py-1 border border-neutral-300' name='Fiselect3' value={Stage.Fiselect3} onChange={setOnchange}>
                  <option>@</option>
                </select>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Start - End date</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date' name='Fidate3' value={Stage.Fidate3} onChange={setOnchange}></input>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Comments</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text' name='Ficomm3' value={Stage.Ficomm3} onChange={setOnchange}></input>
              </div>
            </div>


            <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
              <h1 className='text-blue-500'>Create/Update Release Note</h1>
              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Assign To:</label>
                <select className='w-[100%] px-3 py-1 border border-neutral-300' name='Fiselect4' value={Stage.Fiselect4} onChange={setOnchange}>
                  <option>@</option>
                </select>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Start - End date</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date' name='Fidate4' value={Stage.Fidate4} onChange={setOnchange}></input>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Comments</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text' name='Ficomm4' value={Stage.Ficomm4} onChange={setOnchange}></input>
              </div>
            </div>

          </div>
        </div>
        <div className='flex items-center justify-end p-4'>
          <div className='flex gap-4 text-lg'>
            <button className='w-28 h-10 border'>Cancel</button>
            <button className='w-28 h-10 border bg-blue-500 text-white'>Save</button>
          </div>
        </div>
      </form>





      {/* 6.Publish / Operate */}
      <form onSubmit={submitHandler}>
        <div className='flex w-[100%] flex-col items-center shrink-0  gap-8 bg-white mb-4'>
          <div className='w-[100%] px-6 py-4  flex items-center  justify-between border-y border-b-neutral-300 border border-t-0 border-x-0'>
            <div className='text-pink-300 text-xl non-italic font-medium leading-normal '>6.Publish / Operate</div>
            <div className='text-blue-500'>View More</div>
          </div>

          <div className='flex px-6 items-start self-stretch w-[100%] gap-4 border-y border-t-neutral-300 border-b-0'>
            <div className='flex flex-col items-start w-[50%]  gap-4 '>
              <label className=' text-blue-400 text-sm font-normal leading-snug'>Assign To:</label>
              <input type='text' className='w-[100%] h=[1.375rem] p-1 border border-neutral-300 rounded-sm' placeholder='example' name='Siassignto' value={Publish.Siassignto} onChange={setOnchange} />
            </div>

            <div className='flex flex-col items-start w-[50%]  gap-4'>
              <label className=' text-blue-400 text-sm font-normal leading-snug'>Description:</label>
              <input type='text' className='w-[100%] h=[1.375rem] p-1 border border-neutral-300 rounded-sm' placeholder='example' name='Sidescribe' value={Publish.Sidescribe} onChange={setOnchange} />
            </div>
          </div>
        </div>

        {/* Mock Development Sub-Stage Details */}

        <div className='w-[100%] py-2 bg-white'>
          <div className=' w-[95%] flex px-6 py-4 flex-col items-start border-b-neutral-300 border border-t-0 border-x-0 bg-white mt-2 text-pink-300 text-xl font-medium leading-normal'>Publish / Operate Sub-Stage Details</div>
          <div className='w-[95%]'>

            <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
              <h1 className='text-blue-500 '>Stage Test and Review</h1>
              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Assign To:</label>
                <select className='w-[100%] px-3 py-1 border border-neutral-300' name='Siselect1' value={Publish.Siselect1} onChange={setOnchange}>
                  <option>@</option>
                </select>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Start - End date</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date' name='Sidate1' value={Publish.Sidate1} onChange={setOnchange}></input>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Comments</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text' name='Sicomm1' value={Publish.Sicomm1} onChange={setOnchange}></input>
              </div>
            </div>


            <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
              <h1 className='text-blue-500 mr-12'>Promote to Prod</h1>
              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Assign To:</label>
                <select className='w-[100%] px-3 py-1 border border-neutral-300' name='Siselect2' value={Publish.Siselect2} onChange={setOnchange}>
                  <option>@</option>
                </select>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Start - End date</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date' name='Sidate2' value={Publish.Sidate2} onChange={setOnchange}></input>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Comments</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text' name='Sicomm2' value={Publish.Sicomm2} onChange={setOnchange}></input>
              </div>
            </div>


          </div>
        </div>
        <div className='flex items-center justify-end p-4'>
          <div className='flex gap-4 text-lg'>
            <button className='w-28 h-10 border'>Cancel</button>
            <button className='w-28 h-10 border bg-blue-500 text-white'>Save</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default newform