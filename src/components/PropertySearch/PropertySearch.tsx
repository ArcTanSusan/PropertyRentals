import {FC} from "react";

import Styles from "./PropertySearch.module.css";
import clsx from "clsx";
import ReactSlider from "react-slider";

export const PropertySearch: FC = () => {
    return <div className={Styles.page}>
        <div className={Styles.menu}>
            <div className={clsx(Styles.menuItem, Styles.sliderContainer)}>

                <ReactSlider
                    className={Styles.slider}
                    thumbClassName={Styles.thumb}
                    trackClassName={Styles.track}
                    defaultValue={[0, 4000]}
                    min={0}
                    max={4000}
                    ariaLabel={['Lower thumb', 'Upper thumb']}
                    ariaValuetext={state => `Thumb value ${state.valueNow}`}
                    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                    pearling
                    minDistance={10}
                />

            </div>
            <div className={clsx(Styles.menuItem, Styles.cityContainer)}>
                <label>
                    <span>City</span>
                    <select className={Styles.dropdown}>
                        <option value="all">All</option>
                        <option value="atlanta">Atlanta</option>
                        <option value="new-york">New York</option>
                    </select>
                </label>
            </div>
            <div className={clsx(Styles.menuItem, Styles.checkboxContainer)}>
                <label>
                    <input type="checkbox" className={Styles.checkbox}/>
                    Available Now
                </label>
            </div>
            <div className={clsx(Styles.menuItem, Styles.buttonContainer)}>
                <button className={Styles.button}>Find</button>
            </div>
        </div>


        <section className={Styles.content}>
            content
        </section>
    </div>
}