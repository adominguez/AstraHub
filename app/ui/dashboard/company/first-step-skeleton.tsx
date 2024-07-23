import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default async function firstStepSkeleton() {
  return (
    <div className="grid">
      <Card>
        <CardHeader className="flex-row">
          <div className="flex-col flex-grow">
            <Skeleton className="h-4 w-1/2 mb-2" />
            <Skeleton className="h-3 w-full" />
          </div>
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row gap-4 flex-wrap">
          <div className="flex flex-1 flex-col gap-4">
            {'12345'.split('').map(() => (
                <div className="space-y-2">
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-9 w-full" />
                </div>
            ))}
          </div>
          <div className="flex flex-1 flex-col gap-4">
            {'123456'.split('').map(() => (
                <div className="space-y-2">
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-9 w-full" />
                </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Skeleton className="h-8 w-20" />
        </CardFooter>
      </Card>
    </div>
  )
}