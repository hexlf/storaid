import {FaStar} from 'react-icons/fa6'

const Testimonialcard = ({item}) => {
    
    return (
        <div className="testimonial-card">
            <div className='Ratingholder'>
                {
                Array.from({ length: item.rating }).map((_, i) => (
                    <FaStar key={i} size={25} />
                ))}
            </div>
            <p className='NeedsToBeDarkGreen'>
                {item.comment}
            </p>
            <div className='Userinfo'>
                <img className='profile' src={item.avatarUrl} alt="Profile picture" />
                <div>
                <h6 className='NeedsUrbanFont NeedsToBeDarkGreen h6size'>{item.name}</h6>
                <p className='NeedsToBeDarkGreen psize'>{item.companyName}</p>
                </div>
                <img className='Markimg' src="src/img/comenter.png" alt="Comment icon" />
            </div>
        </div>
    )
}

export default Testimonialcard