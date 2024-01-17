import {FC} from "react";
import clsx from "clsx";
import ReactSlider from "react-slider";

import Styles from "./Menu.module.css";

interface MenuProps {

}

export const Menu: FC<MenuProps> = () => {
    return (
        <div className={Styles.menu}>
            <div className={clsx(Styles.menuItem, Styles.sliderContainer)}>
                <ReactSlider
                    className={Styles.slider}
                    thumbClassName={Styles.thumb}
                    trackClassName={Styles.track}
                    defaultValue={[500, 2500]}
                    min={0}
                    max={3000}
                    ariaLabel={['Lower thumb', 'Upper thumb']}
                    ariaValuetext={state => `Thumb value ${state.valueNow}`}
                    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                    pearling
                    minDistance={10}
                    onChange={(value, thumbIndex) => {
                        console.log({
                            value, thumbIndex
                        })
                    }}
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
            <div className={clsx(Styles.menuItem, Styles.buttonContainer)}>
                <button className={Styles.button}>Find</button>
            </div>
        </div>
    );
}