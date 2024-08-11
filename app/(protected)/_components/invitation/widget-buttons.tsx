import { Button } from "@/components/ui/button";
import { ArrowBigDown, ArrowBigUp, Settings, SquareX } from "lucide-react";
import { WidgetType } from "@/app/(protected)/_components/widgets/widgets-list";

interface WidgetButtonsProps {
  widget: WidgetType;
  changePosition: (id: string, direction: "up" | "down") => void;
  removeWidget: (id: string) => void;
}

export const WidgetButtons = ({
  widget,
  changePosition,
  removeWidget,
}: WidgetButtonsProps) => {
  return (
    <>
      <Button
        title="Settings"
        className="hover:bg-yellow-200"
        size="sm"
        variant="link"
      >
        <Settings />
      </Button>
      <Button
        title="Move up"
        className="hover:bg-green-200"
        size="sm"
        variant="link"
        onClick={() => {
          changePosition(widget.id, "up");
        }}
      >
        <ArrowBigUp />
      </Button>
      <Button
        title="Move down"
        className="hover:bg-green-200"
        size="sm"
        variant="link"
        onClick={() => {
          changePosition(widget.id, "down");
        }}
      >
        <ArrowBigDown />
      </Button>
      <Button
        title="Remove"
        className="hover:bg-red-200"
        size="sm"
        variant="link"
        onClick={() => {
          removeWidget(widget.id);
        }}
      >
        <SquareX />
      </Button>
    </>
  );
};
