import { useState } from "react";
import { JsonApiClient } from "@drupal-api-client/json-api-client";
import { DrupalJsonApiParams } from "drupal-jsonapi-params";
import useSWR from "swr";

// Safe access to window for SSR/Storybook compatibility
const getSearchQuery = () => {
  if (typeof window === "undefined") return "";
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get("q") || "";
};

const client = new JsonApiClient();

function getOffsetFromLink(link) {
  if (!link || !link.href) return null;
  try {
    const url = new URL(link.href);
    const offset = url.searchParams.get("page[offset]");
    return offset ? parseInt(offset, 10) : null;
  } catch {
    return null;
  }
}

/**
 * SearchResults component
 * @param {Object} props
 * @param {Array} [props.results] - Optional array of search results. If provided, skips API fetch.
 *   Each result should have: { title, path: { alias } }
 * @param {boolean} [props.showPagination] - Whether to show pagination buttons (for mock data)
 */
export default function SearchResults({
  results: propResults,
  showPagination = false,
}) {
  const [pageOffset, setPageOffset] = useState(0);
  const q = getSearchQuery();

  // Only fetch from API if results are not provided via props
  const shouldFetch = !propResults;
  const { data, error, isLoading } = useSWR(
    shouldFetch
      ? [
          "index--cms_content",
          {
            queryString: new DrupalJsonApiParams()
              .addFields("node--article", ["title", "path"])
              .addFields("canvas_page--canvas_page", ["title", "path"])
              .addFilter("fulltext", q)
              .addPageLimit(10)
              .addPageOffset(pageOffset)
              .getQueryString(),
          },
        ]
      : null,
    ([type, options]) => client.getCollection(type, options),
  );

  const results = propResults || data || [];
  const [links, setLinks] = useState({});

  const handlePage = (link) => {
    const offset = getOffsetFromLink(link);
    if (offset !== null) {
      setPageOffset(offset);
    }
  };

  if (!propResults && error) return "An error has occurred.";
  if (!propResults && isLoading) return "Loading...";

  return (
    <div>
      <h2 className="text-2xl font-bold">Search results</h2>
      <ul className="mt-2 space-y-3">
        {results.map((item, index) => (
          <li
            key={index}
            className="mb-1 border-b border-[#E5E7EB] py-3 font-semibold"
          >
            <h3 className="text-[#2563EB]">
              <a href={item.path?.alias || "#"}>{item.title}</a>
            </h3>
          </li>
        ))}
      </ul>
      {(showPagination || links.prev || links.next) && (
        <div className="mt-4 flex gap-2">
          {(showPagination || links.prev) && (
            <button
              onClick={() => handlePage(links.prev)}
              className="flex items-center justify-between rounded rounded-xl border border-[#E5E7EB] bg-white px-2 py-1 text-sm text-[#6B7280]"
            >
              <svg
                className="mr-1"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 12L6 8L10 4"
                  stroke="#4B5563"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Previous
            </button>
          )}
          {(showPagination || links.next) && (
            <button
              onClick={() => handlePage(links.next)}
              className="flex items-center justify-between rounded rounded-xl border border-[#E5E7EB] bg-white px-2 py-1 text-sm text-[#6B7280]"
            >
              Next
              <svg
                className="ml-1"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="#4B5563"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
