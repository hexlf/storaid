import Accordion from './Accordion'
import { useEffect, useState } from 'react'

const Faq = () => {
    const [Accordions, setAccordions] = useState([])

    const fetchaccordion = async () => {
        const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/faqs')
        const data = await res.json()  
        setAccordions(data)
    }
    
    useEffect(() => {
        fetchaccordion()
    }, [])
    
     
  return (
    <div className='Faq-holder'>
        
        <div className='Faq-header'>
            <h4 className='NeedsUrbanFont NeedToBeYelow'>FAQs</h4>
            <h3 className='NeedsUrbanFont NeedsToBeDarkGreen'>Frequently Ask Questions</h3>
            <p className='NeedsToBeDarkGreen'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className='Faq-Textarea'>
            {
                Accordions.map(item => (
                    <Accordion key={item.id} item={item} />
                ))       
            }

        </div>
    </div>
  )
}

export default Faq