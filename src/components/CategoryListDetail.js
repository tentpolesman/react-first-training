import React from 'react';
import styled from '@emotion/styled';

const CategoryListDetailContainer = styled.div`
    padding: 12px;
    flex: 0 0 33.3%;
    a {
        text-decoration: none;
    }
    @media (max-width: 520px) {
        flex: 0 0 100%;
    }
    @media (max-width: 720px) {
        flex: 0 0 50%;
    }
`;

const CategoryListDetailItem = styled.div`
    background: #181E25;
    color: #fff;
    padding: 24px;
    img {
        width: 100%;
        height: auto;
    }
    h2 {
        margin-top: 16px;
        text-transform: uppercase;
        font-size: 16px;
        letter-spacing: 0.25mm;
        line-height: 6.5mm;
        position: relative;
    }
    span {
        font-size: 11px;
        background: #4187F6;
        display: inline-block;
        padding: 2px 8px;
        line-height: 4mm;
        top: -1px;
        position: relative;
    }
`;

const CategoryListDetail = ( props ) => {
    const category = props.category.category;
    console.log(category);
    return (
        <CategoryListDetailContainer className='animate__animated animate__fadeInUp'>
            <CategoryListDetailItem>
                <img src={category.strMealThumb} alt="image" />
                <h2>{category.strMeal} <span>#{category.idMeal}</span></h2>
            </CategoryListDetailItem>
        </CategoryListDetailContainer>
    )
}

export default CategoryListDetail;
