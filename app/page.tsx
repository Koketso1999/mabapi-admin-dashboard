import { getUsers } from '@/lib/db';
import { UsersTable } from './users-table';
import { Search } from './search';

export default async function IndexPage() {
 

  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
    <div className="flex items-center">
        <h1 className="font-semibold text-lg md:text-2xl">Dashboard Overview</h1>
      </div>
    </main>
  );
}
