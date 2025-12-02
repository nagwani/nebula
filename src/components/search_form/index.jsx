import { cn } from "@/lib/utils";

const searchParams = new URLSearchParams(window.location.search);
const q = searchParams.get('q') || '';

export default function SearchForm({ className }) {
  return (
    <form action="/search" method="get" className={cn("flex gap-2 leading-5", className)}>
      <div className="w-full flex items-center">
        <input
          type="search"
          name="q"
          id="search_input"
          defaultValue={q}
          placeholder="Search..."
          className="bg-white border-1 border-gray-200 rounded-md px-3 py-2 flex-grow"
        />
      </div>
      <button type="submit" className="leading-0 p-2.5 bg-blue-600 text-white rounded">
        <svg className="stroke-white text-white w-4 h-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 21L16.7 16.7" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </button>
    </form>
  );
}