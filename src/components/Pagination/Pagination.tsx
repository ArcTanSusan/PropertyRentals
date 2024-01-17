import {FC} from "react";

import Styles from "./Pagination.module.css";
import ReactPaginate from "react-paginate";

interface PaginationProps {

}

export const Pagination: FC<PaginationProps> = () => {
    return <ReactPaginate
        className={Styles.root}
        breakLabel="..."
        nextLabel="next >"
        onPageChange={selectedItem => {
            console.log("Page clicked", selectedItem);
        }}
        pageRangeDisplayed={5}
        pageCount={5}
        previousLabel="< prev"
        renderOnZeroPageCount={null}
        hrefBuilder={(pageIndex, pageCount, selectedPage) => {
            return pageIndex === selectedPage + 1 ? undefined : "#";
        }}
    />
}