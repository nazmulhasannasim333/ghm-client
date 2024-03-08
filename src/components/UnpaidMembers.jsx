import { Card, Typography } from "@material-tailwind/react";
import MemberCard from "./MemberCard";
import { useGetUnpaidMemberQuery } from "../redux/features/members/memberApi";

const TABLE_HEAD = ["Name", "Contact No", "Address", "Payment Status"];

const UnpaidMembers = () => {
  const { data: members } = useGetUnpaidMemberQuery();
  console.log(members);
  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head, index) => {
              const isLast = index === TABLE_HEAD.length - 1;
              const classes = isLast
                ? "p-4 text-right"
                : "p-4 border-b border-blue-gray-50";
              return (
                <th
                  key={head}
                  className={`border-b border-blue-gray-100 bg-blue-gray-50 ${classes}`}
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              );
            })}
          </tr>
        </thead>
        <MemberCard members={members} />
      </table>
    </Card>
  );
};

export default UnpaidMembers;
