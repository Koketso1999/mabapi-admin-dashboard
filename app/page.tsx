import { getUsers } from '@/lib/db';
import { UsersTable } from './users-table';
import { Search } from './search';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function IndexPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
        {/* Cards here with no changes */}
        <Card className="w-full px-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Users
            </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            {/*<p className="text-xs text-muted-foreground">*/}
            {/*  +20.1% from last month*/}
            {/*</p>*/}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Properties Listed
            </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            {/*<p className="text-xs text-muted-foreground">*/}
            {/*  +180.1% from last month*/}
            {/*</p>*/}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Maintenance Requests</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <path d="M2 10h20" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            {/*<p className="text-xs text-muted-foreground">*/}
            {/*  +19% from last month*/}
            {/*</p>*/}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Revenue
            </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">P 573,00.00</div>
            {/*<p className="text-xs text-muted-foreground">*/}
            {/*  +201 since last hour*/}
            {/*</p>*/}
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Recent Activity</h2>
          <Search />
        </div>
        Activity Goes Here
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-1 md:col-span-4">
          <CardHeader>
            <CardTitle>Activity Log</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            Activity Log
          </CardContent>
        </Card>
        <Card className="col-span-1 md:col-span-3 m-2">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
         <CardContent className="flex flex-col gap-4 items-center justify-center">
            <Button className="h-8 w-1/2 bg-amber-300" variant="destructive">
              <p className="text-white text-xs">Add New Property</p>
            </Button>
            <Button className="h-8 w-1/2 bg-amber-300" variant="destructive">
              <p className="text-white text-xs">View All Users</p>
            </Button>
            <Button className="h-8 w-1/2 bg-amber-300" >
              <p className="text-white text-xs">Generate Report</p>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>

  );
}