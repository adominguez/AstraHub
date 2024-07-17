import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { type BreadcrumbType } from "@/app/ui/dashboard/types"
import Link from "next/link"
import { AvatarFallback, AvatarImage, Avatar } from "@/components/ui/avatar"

type HeaderProps = {
  breadcrumb?: BreadcrumbType[]
}

export default function Header({breadcrumb = []}: HeaderProps) {
  return (
    <header className="sticky z-30 h-14 items-center gap-4 border-b bg-background top-0 px-4 py-2 sm:h-auto sm:px-6">
      <div className="flex gap-2">
        {
          breadcrumb?.length > 0 && (
            <Breadcrumb className="hidden md:flex">
              <BreadcrumbList>
                {breadcrumb.map((item, index) => (
                  <>
                    <BreadcrumbItem key={index}>
                      <BreadcrumbLink asChild>
                        <Link href={item.href} prefetch={false}>
                          {item.name}
                        </Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    {index < breadcrumb.length - 1 && (
                      <BreadcrumbSeparator />
                    )}
                  </>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          )
        }
        <div className="relative ml-auto flex-1 md:grow-0">
          <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search pages..."
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Admin</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}