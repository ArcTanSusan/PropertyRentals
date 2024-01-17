import {FC} from "react";

import Styles from "./PropertyCard.module.css";
import clsx from "clsx";

interface PropertyCardProps {
    className?: string;
}

export const PropertyCard: FC<PropertyCardProps> = props => {
    return <div className={clsx(Styles.card, props.className)}>
        <div className={Styles.imgContainer}>
            <img src="https://placehold.co/320x240/000000/FFF?text=Image" className={Styles.img} />
        </div>
        <div className={Styles.content}>
            <div className={Styles.title}>Central Business District Flat</div>
            <div className={Styles.row}>
                <div className={Styles.city}>
                    Atlanta
                </div>
                <div className={Styles.roomsCount}>
                    5 rooms
                </div>
            </div>
            <div className={Styles.price}><span className={Styles.priceText}>$3200</span> month</div>
        </div>
    </div>
}