import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Members from "./Members";
import PaidMembers from "./PaidMembers";
import UnpaidMembers from "./UnpaidMembers";
import Organizers from "./Organizers";

export function MemberTabs() {
  const data = [
    {
      label: " Members",
      value: "members",
      desc: (
        <>
          <Members />
        </>
      ),
    },
    {
      label: "Paid",
      value: "paid",
      desc: (
        <>
          <PaidMembers />
        </>
      ),
    },
    {
      label: "Unpaid",
      value: "unpaid",
      desc: (
        <>
          <UnpaidMembers />
        </>
      ),
    },
    {
      label: "Organizers",
      value: "organizers",
      desc: (
        <>
          <Organizers />
        </>
      ),
    },
  ];

  return (
    <Tabs value="members">
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
