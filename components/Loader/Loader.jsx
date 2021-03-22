import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import classes from './Loader.module.scss'

const LoaderComponent = () => (
    <div className={classes['loader-container']}>
        <Loader
            type="Oval"
            color="#8ECAC7"
            height={35}
            width={35}
        />
    </div>
);

export default LoaderComponent