import { SparkleIcon } from "@phosphor-icons/react";
import { suggestions } from "../../../utils/mock/suggestions";
import { Card } from "../../ui/card";

const EmptyState = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center px-6">
      <div className="logo">
        <SparkleIcon size={64} weight="duotone" className="text-primary" />
      </div>
      <div className="title mt-6 text-3xl font-bold tracking-tight">
        How can I help today?
      </div>
      <div className="sub-title mt-2 max-w-md text-center text-muted-foreground">
        Ask questions, generate code, debug issues, or explore ideas.
      </div>
      <div className="suggestions flex max-w-md flex-wrap gap-2 mt-6 items-center justify-center">
        {suggestions.map((i) => (
          <Card className="cursor-pointer transition hover:bg-accent px-4 py-2 rounded-lg">
            {i}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EmptyState;
