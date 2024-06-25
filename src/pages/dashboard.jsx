import React from "react";
import { BarLoader } from "react-spinners";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div>
      {true && <BarLoader width={"100%"} color="#36d7b7" />}

      <div>
        <Card>
          <CardHeader>
            <CardTitle>Links Created</CardTitle>
          </CardHeader>
          <CardContent>
            <p>0</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Clicks</CardTitle>
          </CardHeader>
          <CardContent>
            <p>0</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
