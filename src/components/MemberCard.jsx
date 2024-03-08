/* eslint-disable react/prop-types */
import { Button, Typography } from "@material-tailwind/react";

const MemberCard = ({ members }) => {
  console.log(members);
  return (
    <tbody>
      {members?.data?.length === 0 && (
        <tr>
          <td className="text-center py-8">
            <Typography className=" text-red-300 ">
              There is no member available
            </Typography>
          </td>
        </tr>
      )}
      {members?.data?.map(({ name, contactNo, address }, index) => {
        const isLast = index === members?.data.length - 1;
        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

        return (
          <tr key={name}>
            <td className={classes}>
              <Typography
                variant="h6"
                color="blue-gray"
                className="font-normal"
              >
                {name}
              </Typography>
            </td>
            <td className={classes}>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {contactNo}
              </Typography>
            </td>
            <td className={classes}>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {address}
              </Typography>
            </td>
            <td className={`${classes} text-right`}>
              <Button size="sm">Edit</Button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default MemberCard;
