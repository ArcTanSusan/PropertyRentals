import {FC} from "react";

import Styles from "./PropertySearch.module.css";
import {PropertyCard} from "../PropertyCard/PropertyCard.tsx";
import {Pagination} from "../Pagination/Pagination.tsx";
import {Menu} from "../Menu/Menu.tsx";

export const PropertySearch: FC = () => {
    return <div className={Styles.page}>
        <Menu />

        <section className={Styles.content}>
            <PropertyCard />
        </section>

        <section className={Styles.pagination}>
            <Pagination />
        </section>
    </div>
}