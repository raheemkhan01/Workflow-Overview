export default function ProjectStages() {
    return (
        <>
            <section>
                <div className="ProjectStagesBar">Stages</div>
                {/* left Conatiner Box  Stages */}
                <section className="LeftStagesSection">
                    <div className="AddSatge1Txt">Add Stages</div>

                    {/* Stages start */}
                    <div className="LeftSectionStagesStage1">
                        <div className="Satge1Txt">Stage 1</div>
                        <div>
                            <div className="RequirementStages">Requirement</div>
                            <div className="AddStages">+Add Sub Stages</div>
                            <div className="AddCheckListStages">+Add Check List</div>
                        </div>
                    </div>
                    <div className="LeftSectionStagesStage1">
                        <div className="Satge1Txt">Stage 2</div>
                        <div>
                            <div className="RequirementStages">Mock Development</div>
                            <div className="AddStages">+Add Sub Stages</div>
                            <div className="AddCheckListStages">+Add Check List</div>
                        </div>
                    </div>
                    <div className="LeftSectionStagesStage1">
                        <div className="Satge1Txt">Stage 3</div>
                        <div>
                            <div className="RequirementStages">Actual Development</div>
                            <div className="AddStages">+Add Sub Stages</div>
                            <div className="AddCheckListStages">+Add Check List</div>
                        </div>
                    </div>
                    <div className="LeftSectionStagesStage1">
                        <div className="Satge1Txt">+Add Stages</div>
                        <div>
                            <div className="RequirementStages"></div>
                            <div className="AddStages"></div>
                            <div className="AddCheckListStages"></div>
                        </div>
                    </div>
                    {/* Stages end */}

                    {/* <div className="AddStagsCol">+Add Stages</div> */}
                </section>
            </section>
        </>
    );
};