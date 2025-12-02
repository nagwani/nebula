import { useState } from 'react';
import SearchForm from '@/components/search_form';
import Section from '@/components/section';

const SearchButton = ({ positionTop = 50 }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  }
  return (
    <>
      <button type="button" className="p-2.5 bg-blue-600 text-white rounded" onClick={toggleOpen}>
      {!open && <SearchIcon />}
      {open && <CloseIcon />}

      </button>
      {open && <SearchOverlay positionTop={positionTop} />}
    </>
  );
};

const SearchOverlay = ({ positionTop }) => {
  return (
    <div
      className="bg-gray-100 absolute left-0 right-0"
      style={`top: ${positionTop}px`}
    >
      <Section content={<SearchForm />} width="Normal" />
    </div>
  );
}

const SearchIcon = () => {
  return (
    <svg className="stroke-white text-white w-4 h-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M21 21L16.7 16.7" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
}

const CloseIcon = () => {
  return (
    <svg className="stroke-white text-white w-4 h-4" width="24" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 5L5 15" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5 5L15 15" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
}

export default SearchButton;
