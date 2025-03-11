import { useState, useEffect, SyntheticEvent } from "react";
import { Tab } from "@mui/material";
import { TabPanel, TabList, TabContext } from "@mui/lab";
import useQueryParams from "../hooks/useQueryParams";

export default function ModuleLayout({ Lesson, Practice }) {
    const [params, setParam, deleteParam] = useQueryParams();

    const queryParamTab = params.get("tab");
    const defaultActiveTab = "lesson";

    const [activeTab, setActiveTab] = useState(
        queryParamTab || defaultActiveTab,
    );

    useEffect(() => {
        if (!queryParamTab) {
            setParam("tab", defaultActiveTab);
        }
    });

    const handleActiveTabChange = (
        _event: SyntheticEvent,
        newActiveTabName: string,
    ) => {
        setActiveTab(newActiveTabName);
        setParam("tab", newActiveTabName);

        if (newActiveTabName === "practice") {
            deleteParam("page");
        }
    };

    const [activeLessonPageIndex, setActiveLessonPageIndex] = useState(0);

    return (
        <>
            <TabContext value={activeTab}>
                <div className="border-b border-neutral-300 flex justify-center h-12">
                    <TabList onChange={handleActiveTabChange}>
                        <Tab label="Lesson" value="lesson" />
                        <Tab label="Practice" value="practice" />
                    </TabList>
                </div>

                <div className="relative px-80 flex-1 overflow-y-auto">
                    <TabPanel
                        value="lesson"
                        keepMounted
                        sx={{ overflowY: "auto" }}
                    >
                        <Lesson
                            activePageIndex={activeLessonPageIndex}
                            setActivePageIndex={setActiveLessonPageIndex}
                        />
                    </TabPanel>
                    <TabPanel value="practice" keepMounted>
                        <div className="flex justify-center">
                            <Practice />
                        </div>
                    </TabPanel>
                </div>
            </TabContext>
        </>
    );
}
