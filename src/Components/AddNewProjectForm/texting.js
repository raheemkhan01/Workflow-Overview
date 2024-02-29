import React from 'react'

const texting = () => {
  return (
    <div>
      <form className="flex flex-col px-6 py-5 items-center justify-center gap-3">
          {/* Project Name */}
          <div className="flex flex-row items-center justify-between">
            <label
              className="text-black  text-left font-sans text-base font-normal not-italic leading-6 w-40 h-6"
              htmlFor="Project"
            >
              Project Name:
            </label>

            <input
              type="text"
              name="projectName"
              id="projectName" // Unique ID for each input
              placeholder="Project name"
              className="text-slate-500 font-sans text-sm font-normal not-italic leading-6 pb-1 self-stretch items-center flex-1 border rounded-sm border-slate-200 bg-slate-100 shadow px-1 py-1 h-8 w-96 m-1"
              value={project.projectName}
              onChange={handleChange}
            />
          </div>

          {/* Project Description */}
          <div className="flex flex-row items-baseline justify-between">
            <label
              className="text-black  text-left font-sans text-base font-normal not-italic leading-6 w-40 h-6"
              htmlFor="Project"
            >
              Project Description :
            </label>
            <textarea
              name="projectDescription"
              id="projectDescription" // Unique ID for each input
              placeholder="Description.."
              className="text-slate-500 font-sans text-sm font-normal not-italic leading-6 pb-1 self-stretch items-center flex-1 border rounded-sm border-slate-200 bg-slate-100 shadow px-1 py-1 h-28 w-96 m-1"
              value={project.projectDescription}
              onChange={handleChange}
            />
          </div>

          {/* Project Departement */}
          <div className="flex flex-row items-center justify-between">
            <label
              className="text-black  text-left font-sans text-base font-normal not-italic leading-6 w-40 h-6"
              htmlFor="Project"
            >
              Project Department :
            </label>
            <input
              type="text"
              name="projectDepartment"
              id="projectDepartment" // Unique ID for each input
              placeholder=" Please describe your customer service, internal customers directly.."
              className="text-slate-500 font-sans text-sm font-normal not-italic leading-6 self-stretch items-center flex-1 border rounded-sm border-slate-200 bg-slate-100 shadow px-1 py-1 h-8 w-96 m-1"
              value={project.projectDepartment}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-row items-center justify-between">
            <label
              className="text-black  text-left font-sans text-base font-normal not-italic leading-6 w-40 h-6"
              htmlFor="Project"
            >
              Project Duration :
            </label>
            <div>
              <DatePicker
                id="projectStartDate"
                placeholder="Start Date"
                className="text-slate-500 font-sans text-sm font-normal not-italic leading-6 pb-1 self-stretch items-center flex-1 border rounded-sm border-slate-200 bg-slate-100 shadow px-1 py-1 h-8 w-[184px] m-1"
                onChange={(date, dateString) =>
                  setProject({
                    ...project,
                    startDate: moment(dateString).format(
                      "YYYY-MM-DDTHH:mm:ss.SSS[Z]"
                    ),
                  })
                }

                // value={project.startDate}
              />
              <span>-</span>
              <DatePicker
                id="projectEndDate"
                placeholder="End Date"
                className="text-slate-500 font-sans text-sm font-normal not-italic leading-6 pb-1 self-stretch items-center flex-1 border rounded-sm border-slate-200 bg-slate-100 shadow px-1 py-1 h-8 w-[184px] m-1"
                onChange={(date, dateString) =>
                  setProject({
                    ...project,
                    endDate: moment(dateString).format(
                      "YYYY-MM-DDTHH:mm:ss.SSS[Z]"
                    ),
                  })
                }
                // value={project.endDate}
              />
            </div>
          </div>

          <div className="flex flex-row items-center justify-between">
            <label
              className="text-black  text-left font-sans text-base font-normal not-italic leading-6 w-40 h-6"
              htmlFor="projectIcon"
            >
              project Icon :
            </label>
            <div className="w-96">
              <div className="text-slate-500 font-sans text-sm font-normal not-italic leading-6 self-stretch items-center flex-1 border rounded-sm border-slate-200 bg-slate-100 shadow px-1 py-1 h-8  m-1">
                <a
                  href="#"
                  className="flex justify-between items-center"
                  onClick={() => openModal(setIsPrjectIconModalOpen)}
                >
                  <span className=" text-neutral-5 font-segoe-ui text-base  font-normal leading-6 text-gray-300">
                    Upload Icons
                  </span>
                </a>
                <Modal
                  id="projectIcon"
                  open={isPrjectIconModalOpen}
                  onCancel={handleCloseModals}
                  closable={false}
                  onOk={handleCloseModals}
                  width={430}
                  okButtonProps={{ className: "bg-blue-500" }}
                >
                  <UploadPopul2 onSubmit={handleCloseModals} />
                </Modal>
              </div>
            </div>
          </div>

          {/* HandleSubmit Button */}
          {/* <Button
            type="submit"
            className="ml-[90%] m-10 px-2 py-1 justify-center items-center rounded-sm border border-blue-500 bg-blue-500 shadow-sm h-8 font-sans text-center text-white text-sm font-normal not-italic leading-3 flex-row-reverse"
            // onClick={handleSubmit}
            onClick={() => next()}
            formNext={current}
          >
            Next
          </Button> */}
        </form>
    </div>
  )
}

export default texting
