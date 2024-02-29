export default function ProjectForm() {
    return (
        <>
            {/* This section shows Header of Adding New Projects   */}
            <section className="AddProjectHeadFlex">
                <div className="PFAddNewPrj">Add New Project</div>
                <div className="PFAllPrj">
                    All Project{" "}
                    <span className="DownArrowPR">
                        <img src="/Images/downarrow.svg" />{" "}
                    </span>{" "}
                </div>
            </section>
            {/* Shows a Details of Project */}
            <section className="ProjectFormFlexingHeroSec">
                <form className="ProjectFormFlex">
                    <div className="ProjectFormSectioAdj">
                        <label className="PFDetailsList" for="Project">
                            Project Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Project name"
                            className="inputSpaceForm"
                        />
                    </div>

                    <div className="ProjectFormSectioAdj">
                        <label className="PFDetailsList" for="Project">
                            Project Manager :
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Admin name"
                            className="inputSpaceForm"
                        />
                    </div>

                    <div className="ProjectFormSectioAdj">
                        <label className="PFDetailsList" for="Project">
                            Project Description :
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Description.."
                            className="inputSpaceForm"
                        />
                    </div>
                    <div className="ProjectFormSectioAdj">
                        <label className="PFDetailsList" for="Project">
                            Add Resources :
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Please enter name"
                            className="inputSpaceFormAddResouces"
                        />
                    </div>

                    <div className="ProjectFormSectioAdj">
                        <label className="PFDetailsList" for="Project">
                            Project Department :
                        </label>
                        <input
                            type="text"
                            id=" name"
                            placeholder=" Please describe your customer service, internal customers directly.."
                            className="inputSpaceFormAddResouces"
                        />
                    </div>

                    <div className="ProjectFormSectioAdj">
                        <label className="PFDetailsList" for="Project">
                            Project Duration :
                        </label>
                        <input type="date" id="name" className="" />
                    </div>
                    <div className="ProjectFormSectioAdj">
                        <label className="PFDetailsList" for="Project">
                            Budget <span>(optional)</span> :
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="inputSpaceForm"
                            placeholder="...."
                        />
                    </div>
                </form>
                <button className="ProjectFormBtnNxt">Next</button>
            </section>
        </>
    );
}