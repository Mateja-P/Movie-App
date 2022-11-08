import React from 'react';
import '../Styles/Pagination.scss';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Pagination({
  postsPerPage,
  totalPosts,
  setPage,
  currentPage,
  scrollTo,
}) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  function checkIndex(index) {
    if (index !== 1 && index !== pages.length) {
      window.scrollTo(0, scrollTo);
    }
  }

  return (
    <div className='pagination-div__wrapper'>
      <div className='pagination-div__content'>
        <div
          className='prev__button'
          onClick={() => {
            setPage(currentPage == 1 ? 1 : (currentPage -= 1));
            checkIndex(currentPage);
          }}
        >
          <ArrowBackIosNewIcon />
        </div>
        <div className='pages-div__wrapper'>
          {pages.map((page, index) => {
            return (
              <div
                className={page == currentPage ? 'active' : ''}
                key={index}
                onClick={() => {
                  setPage(page);
                  window.scrollTo(0, scrollTo);
                }}
              >
                {page}
              </div>
            );
          })}
        </div>

        <div
          className='next__button'
          onClick={() => {
            setPage(
              currentPage == pages.length ? pages.length : (currentPage += 1)
            );
            checkIndex(currentPage);
          }}
        >
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
}

export default Pagination;
