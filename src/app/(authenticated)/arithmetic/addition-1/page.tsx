"use client";
import { useState, SyntheticEvent } from "react";
import { Tab, Box } from "@mui/material";
import { TabPanel, TabList, TabContext } from "@mui/lab";

// import TabPanel from "app/components/TabPanel";
import Lesson from "./Lesson";
import Practice from "./Practice";

export default function Page() {
    const [selectedTab, setSelectedTab] = useState("0");

    const handleSelectedTabChange = (
        _event: SyntheticEvent,
        newTab: string,
    ) => {
        setSelectedTab(newTab);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <TabContext value={selectedTab}>
                <Box
                    sx={{
                        borderBottom: 1,
                        borderColor: "divider",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <TabList onChange={handleSelectedTabChange}>
                        <Tab label="Lesson" value="0" />
                        <Tab label="Practice" value="1" />
                    </TabList>
                </Box>

                <Box className="relative flex flex-col grow p-12 mx-96 m-w-96">
                    <TabPanel value="0" keepMounted>
                        <Lesson />
                    </TabPanel>
                    <TabPanel value="1" keepMounted>
                        <Practice />
                    </TabPanel>
                </Box>
            </TabContext>
        </Box>
    );
}
