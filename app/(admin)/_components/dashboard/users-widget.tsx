"use client";

import { Button } from "@/components/ui/button";
import {
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { getUsersStatistics } from "@/data/manage-users";
import { useState, useEffect, useTransition } from "react";
import { toast } from "sonner";
import { BeatLoader } from "react-spinners";

export const UsersWidget = () => {
  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState<any>([]);

  const getData = () => {
    startTransition(() => {
      getUsersStatistics().then(res => {
        if (res?.success) {
          setData(res);
        }
        if (res?.error) {
          toast.error(res.error);
        }
      });
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <CardHeader className="pb-3">
        <CardTitle>Registered Users</CardTitle>
        <CardDescription className="text-balance max-w-lg leading-relaxed">
          {isPending ? (
            <BeatLoader />
          ) : (
            <>
              <div className="flex justify-between w-full">
                <span>Total admins</span>
                <span className="font-semibold font-mono">
                  {data?.totalAdminsCount}
                </span>
              </div>
              <div className="flex justify-between w-full">
                <span>Total users</span>
                <span className="font-semibold font-mono">
                  {data?.totalUsersCount}
                </span>
              </div>
              <div className="flex justify-between w-full">
                <span>Total</span>
                <span className="font-semibold font-mono">
                  {data?.totalAdminsCount + data?.totalUsersCount}
                </span>
              </div>
            </>
          )}
        </CardDescription>
      </CardHeader>
    </>
  );
};
