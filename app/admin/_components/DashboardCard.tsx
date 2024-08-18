import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

type DashboardCardProps = {
  title: string;
  subtitle: string;
  body: string;
};

export function DashboardCard({ title, subtitle, body }: DashboardCardProps) {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{subtitle}</CardDescription>
        </CardHeader>
        <CardContent>{body}</CardContent>
      </Card>
    </>
  );
}
