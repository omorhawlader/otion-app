import { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight, LucideIcon } from "lucide-react";

interface ItemsProps {
  id?: Id<"documents">;
  documentIcon?: string;
  active?: boolean;
  expanded?: boolean;
  isSearch?: boolean;
  level?: number;
  onExpand?: () => void;
  onClick: () => void;
  label: string;
  Icon: LucideIcon;
}

export const Item = ({
  onClick,
  label,
  Icon,
  id,
  level = 0,
  isSearch,
  documentIcon,
  active,
  expanded,
  onExpand,
}: ItemsProps) => {
  const ChevronIcon = expanded ? ChevronDown : ChevronRight;
  return (
    <div
      role="button"
      onClick={onClick}
      style={{ paddingLeft: level ? `${level * 12 + 12}px` : "12px" }}
      className={cn(
        "group min-[27px] text-sm py-1 pr-3 flex items-center w-full hover:bg-primary/5 text-muted-foreground font-medium",
        active && "bg-primary/5 text-primary"
      )}
    >
      {!!id && (
        <div
          className="h-full rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 mr-1 "
          onClick={() => {}}
        >
          <ChevronIcon className="w-4 h-4 shrink-0 text-muted-foreground/50" />
        </div>
      )}
      {documentIcon ? (
        <div className="shrink-0 mr-2 text-[18px] ">{documentIcon}</div>
      ) : (
        <Icon className="shrink-0 h-[16px] mr-1 text-muted-foreground" />
      )}
      <span className="truncate">{label}</span>

      {isSearch && (
        <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">CTRL</span>K
        </kbd>
      )}
    </div>
  );
};
