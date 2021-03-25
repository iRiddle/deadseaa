import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import classes from './Loader.module.scss'

const LoaderComponent = ({ width = 35, height = 35 }) => (
    <div className={classes['loader-container']}>
        <Loader
            type="Oval"
            color="#8ECAC7"
            height={height}
            width={width}
        />
    </div>
);

export default LoaderComponent