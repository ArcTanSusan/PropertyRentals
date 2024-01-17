import {FC, useEffect} from "react";

import Styles from "./PropertySearch.module.css";
import {PropertyCard} from "../PropertyCard/PropertyCard.tsx";
import {Pagination} from "../Pagination/Pagination.tsx";
import {Menu} from "../Menu/Menu.tsx";
import {fetchProperties} from "../../api/properties.ts";

export const PropertySearch: FC = () => {
    useEffect(() => {
        fetchProperties({}).then(result => console.log(result));
    }, []);

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