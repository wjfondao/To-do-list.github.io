import React from 'react';
import { Button } from "@material-tailwind/react";

function PageTitle() {
  return (
    <div className="flex w-max gap-4">
      <Button variant="filled">filled</Button>
      <Button variant="gradient">gradient</Button>
      <Button variant="outlined">outlined</Button>
      <Button variant="text">text</Button>
    </div>
  );
}

export default PageTitle;
