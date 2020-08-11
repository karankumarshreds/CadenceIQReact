import WarningIcon from '@material-ui/icons/Warning';
import BodyList from './BodyList';

const BodyContentLeft = () => {
    return (
        <div className="BodyContentLeft">
            <div className="BodyContentLeft__warning">
                <WarningIcon
                    className="BodyContentLeft__warning__icon" /> <p>6 tasks remaining (check your scheduled tasks)</p>
            </div>
            <img className="BodyContentLeft__graph" src="/bar.png" />
            <div className="BodyContentLeft__info">
                <p className="BodyContentLeft__heading">Prospects analysis</p>
                <div className="BodyContentLeft__flex">
                    <BodyList className="prospect_list" />
                    <img src="/pie.png" />
                </div>

            </div>
        </div>
    )
}

export default BodyContentLeft;