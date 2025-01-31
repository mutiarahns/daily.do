import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ArrowLeftIcon } from "lucide-react";

export function TaskDetail() {
  return (
    <div className="max-w mx-auto flex min-h-screen flex-col px-4 pt-8 xl:max-w-3xl">
      <header className="flex flex-row items-center justify-between rounded-md bg-white p-4">
        <div className="flex items-center space-x-2 text-sm">
          <Button
            onClick={() => (window.location.href = "/")}
            variant={"ghost"}
            className="z-50 p-0 text-sm text-gray-700 hover:bg-transparent"
          >
            <ArrowLeftIcon />
          </Button>
          <p>Task Detail</p>
        </div>

        <div>
          <Button
            variant="outline"
            className="h-8 px-4 py-2 hover:border-green-500 hover:bg-green-100 hover:text-green-700"
          >
            <p className="text-[12px]">Mark complete</p>
          </Button>
        </div>
      </header>

      <Separator />

      <ScrollArea className="flex-[1] rounded-sm bg-white p-4">
        <p className="text-2xl font-bold">[Task Title]</p>

        <div className="pt-5">
          <p className="text-[12px] text-slate-600">Description</p>
        </div>

        <div>
          <p className="mt-2 text-sm text-slate-600">[Task Description]</p>
        </div>
      </ScrollArea>

      <footer className="pb-8">
        <p className="pt-5 text-center text-sm">
          Copyright © {new Date().getFullYear()} Daily.do. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
