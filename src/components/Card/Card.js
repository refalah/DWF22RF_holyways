import { useHistory } from "react-router-dom";
import './Card.css'
import {convertToRupiah} from '../../utils/index'

const Card = ({ donateData }) => {
    const { id, title, description, sum, image} = donateData;
    const router = useHistory();

    const goToDetailPage = () => {
        router.push(`/donate-detail/${id}`);
    };
    
    return (
        <div className='cards mb-5'>
                <div className='card-image-container'>
                    <img src={image} className='img-dono'></img>
                </div>
                <div className='card-content'>
                    <div className='card-title'>
                        <h6 style={{
                            minHeight: "40px"
                        }}>{title}</h6>
                    </div>
                    <div className='card-bodies'>
                        <p style={{
                            height: "50px",
                            fontSize: "12px"
                        }}>{description}</p>
                    </div>
                    <div className='progress-bar'>
                        <div className='red-team'></div>
                        {/* <div className='grey-team'></div> */}
                    </div>
                </div>
                
                <div className='btns'>
                    <p>{convertToRupiah(sum)}</p>
                    <button onClick={goToDetailPage}><a>Donate</a></button>                    
                </div>
        </div>
    )
}

export default Card
