/* eslint-disable react/prop-types */
import { Button, Typography } from "@material-tailwind/react";

const OrganizersCard = ({ organizers }) => {
  console.log(organizers);
  return (
    <tbody>
      {organizers?.data?.length === 0 && (
        <tr>
          <td className="text-center py-8">
            <Typography className=" text-red-300 ">
              There is no member available
            </Typography>
          </td>
        </tr>
      )}
      {organizers?.data?.map(({ name, email, role }, index) => {
        const isLast = index === organizers?.data.length - 1;
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
                {email}
              </Typography>
            </td>
            <td className={classes}>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {role}
              </Typography>
            </td>
            <td className={`${classes} text-right`}>
              <Button size="sm" color="green">
                Verified
              </Button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default OrganizersCard;
