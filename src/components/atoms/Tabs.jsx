import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import ChartData from "../Chart/ChartData";

export default function TabNav({ data }) {
  return (
    <Tabs colorScheme="gray" align="end" defaultIndex={1}>
      <TabList sx={{ paddingBottom: 3, paddingRight: 2 }}>
        <Tab
          _selected={{
            color: "#3D3D3D",
            bg: "#f5f5f5",
            borderRadius: 8,
            padding: "5px 20px",
            fontWeight: 600,
            fontSize: "14px",
          }}
        >
          View Method
        </Tab>
        <Tab
          _selected={{
            color: "#3D3D3D",
            bg: "#f5f5f5",
            borderRadius: 8,
            padding: "5px 20px",
            fontWeight: 600,
            fontSize: "14px",
          }}
        >
          Monthly
        </Tab>
        <Tab
          _selected={{
            color: "#3D3D3D",
            bg: "#f5f5f5",
            borderRadius: 8,
            padding: "5px 20px",
            fontWeight: 600,
            fontSize: "14px",
          }}
        >
          Yearly
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <ChartData data={data} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
