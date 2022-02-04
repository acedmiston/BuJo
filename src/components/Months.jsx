import Goals from './Goals';
import Highlights from './Highlights';
import MonthPicker from './MonthPicker';

function Months() {
    // const current = new Date();
    // const month = current.toLocaleString('default', { month: 'long' });
    // const date = `${month} ${current.getFullYear()}`;
    return (
        <div className='months-container'>
            {/* <h1>{date}</h1> */}
            <MonthPicker />
            <div className='goals-highlights'>
                <Goals />
                <Highlights />
            </div>
        </div>
    );
}

export default Months;