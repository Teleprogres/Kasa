
import data from "../data/data";
import Box from "./Box";
import '../sass/componentsStyles/housingList.scss'


const HousingList = () => {

    return (
        <main className='housingList'>
            {data.map(element => {
                return (
                    <Box
                        // key juste pour react
                        key={element.id}
                        // props 
                        id={element.id}
                        title={element.title}
                        cover={element.cover}
                    />
                )
            })}
        </main>
    )
}


export default HousingList;