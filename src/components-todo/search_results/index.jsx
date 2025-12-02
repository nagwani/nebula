import useSWR from "swr";
import { JsonApiClient } from "@drupal-api-client/json-api-client";
import { DrupalJsonApiParams } from "drupal-jsonapi-params";
import { useEffect, useState } from "react";

const searchParams = new URLSearchParams(window.location.search);
const q = searchParams.get('q') || '';

const client = new JsonApiClient();

function getOffsetFromLink(link) {
  if (!link || !link.href) return null;
  try {
    const url = new URL(link.href);
    const offset = url.searchParams.get('page[offset]');
    return offset ? parseInt(offset, 10) : null;
  } catch {
    return null;
  }
}

export default function List() {
  const [items, setItems] = useState([]);
  const [links, setLinks] = useState({});
  const [pageOffset, setPageOffset] = useState(0);

  const { data, error, isLoading } = useSWR(
    ["index--cms_content", {
      queryString: new DrupalJsonApiParams()
        .addFields('node--article', ['title', 'path'])
        .addFields('canvas_page--canvas_page', ['title', 'path'])
        .addFilter('fulltext', q)
        .addPageLimit(10)
        .addPageOffset(pageOffset)
        .getQueryString()
    }],
    ([type, options]) => client.getCollection(type, options)
  );

  const handlePage = (link) => {
    const offset = getOffsetFromLink(link);
    if (offset !== null) {
      setPageOffset(offset);
    }
  };

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";

  return (
    <div>
      <h2 class="font-bold text-2xl">Search results</h2>
      <ul className="space-y-3 mt-2">
        {data.map((item, index) => (
          <li key={index} className="font-semibold border-[#E5E7EB] border-b py-3 mb-1">
            <h3 className="text-[#2563EB]"><a href={item.path.alias}>{item.title}</a></h3>
          </li>
        ))}
      </ul>
      <div className="flex gap-2 mt-4">
        {links.prev && (
          <button
            onClick={() => handlePage(links.prev)}
            className="px-2 py-1 border rounded bg-white border-[#E5E7EB] rounded-xl text-[#6B7280] text-sm flex items-center justify-between"
          >
            <svg className="mr-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 12L6 8L10 4" stroke="#4B5563" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Previous
          </button>
        )}
        {links.next && (
          <button
            onClick={() => handlePage(links.next)}
            className="px-2 py-1 border rounded bg-white border-[#E5E7EB] rounded-xl text-[#6B7280] text-sm flex items-center justify-between"
          >
            Next
            <svg className="ml-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12L10 8L6 4" stroke="#4B5563" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        )}
      </div>
    </div>
  )
}
