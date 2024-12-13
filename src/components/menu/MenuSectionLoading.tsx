import { Skeleton } from "@/components/ui/skeleton";

const MenuSectionLoading = () => {
  return (
    <div className="space-y-12">
      {[1, 2, 3].map((section) => (
        <div key={section} className="space-y-6">
          <Skeleton className="h-8 w-48" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-48 w-full" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuSectionLoading;