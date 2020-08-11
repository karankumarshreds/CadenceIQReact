import '../../styles/body-content.css';
import BodyContentLeft from './BodycontentLeft';
import BodyContentRight from './BodycontentRight';
const BodyContent = () => {
    return (
        <>
            <p className="BodyContent__title">Dashboard</p>
            <hr className="BodyContentLeft__hr" />
            <div className="BodyContent">
                <BodyContentLeft />
                <BodyContentRight />
            </div>
        </>
    )
}

export default BodyContent;