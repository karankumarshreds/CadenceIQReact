import Header from './Header';
import BodyContent from './BodyContent';
import '../../styles/body.css';

const Body = () => {
    return (
        <div className="Body">
            <Header className="Body__header" />
            <div className="Body__container">
                <BodyContent />
            </div>
        </div>
    )
}
export default Body;