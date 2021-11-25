import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { useParams } from "react-router-dom";
import Category from '../components/CategoryListDetail'

const CategoryDetailList = styled.div`
    display: flex;
    max-width: 920px;
    width: 100%;
    margin: 0 auto;
    flex-wrap: wrap;
    padding: 24px 0 42px 0;
`;

const CategoryDetail = () => {

    const params = useParams();
    
    const [category, setCategory] = useState([]);

    const fetchData = async () => {
        const request = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.name}`);           
        return request;
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        fetchData()
        .then((request) => {
            setCategory(request.data.meals);
        })
        .catch((error) => console.error(error));
    }, [params.name]);

    console.log(category);

    return (
        <>
            <CategoryDetailList>
                {category && category.map((category, index) => 
                    <Category category={{ category }}/>
                )}
            </CategoryDetailList>  
        </>
    )
}

export default CategoryDetail
