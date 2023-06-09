import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Menu from '../../Shared/Menu/Menu';

const PopularItem = () => {
const [menu, setMenu] = useState([]);

useEffect(() =>{
    fetch('menu.json')
    .then(res => res.json())
    .then(data => {

        const popularItems = data.filter(item=> item.category === 'popular')
        setMenu(popularItems)
    })
},[])

    return (
        <section className='mb-12'>
            <SectionTitle 
            heading="From Our Menu"
            subHeading="Popular Items"
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {menu.map(item=> <Menu key={item._id} item={item}/>)}
            </div>
        </section>
    );
};

export default PopularItem;