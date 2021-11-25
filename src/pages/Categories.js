import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import Category from '../components/CategoryList'

const CategoriesList = styled.div`
    display: flex;
    max-width: 920px;
    width: 100%;
    margin: 0 auto;
    flex-wrap: wrap;
    padding: 24px 0 42px 0;
`;

const Categories = () => {

    const [categories, setCategories] = useState([]);
    
    const fetchData = async () => {
        const request = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');           
        return request;
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        fetchData()
        .then((request) => {
            setCategories(request.data.categories);
        })
        .catch((error) => console.error(error));
    }, []);

    console.log(categories);

    return (
        <>
            <CategoriesList>
                {categories && categories.map((category, index) => 
                    <Category category={{ category }}/>
                )}
            </CategoriesList>  
        </>
    )
}

export default Categories
