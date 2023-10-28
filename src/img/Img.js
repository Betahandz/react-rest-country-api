import './img.css';

function Img({ flag }) {
    return (
        <div className='detail-flag my-4 shadow-lg'>
            <img src={flag} alt='flag' className='img-fluid' />
        </div>
    )
}

export default Img;