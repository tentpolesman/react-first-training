import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const CategoryListContainer = styled.div`
    padding: 12px;
    flex: 0 0 100%;
    a {
        text-decoration: none;
    }
`;

const CategoryListItem = styled.div`
    background: #181E25;
    color: #fff;
    transition: all .25s ease-in-out;
    padding: 24px;
    display: flex;
    .image {
        margin-right: 24px;
        flex: 0 0 200px;
        img {
            width: 100%;
            height: auto;
            transition: all .25s ease-in-out;
        }
    }
    .description {
        flex: 1 1 100%;
    }
    h2 {
        text-transform: uppercase;
    }
    p {
        margin-top: 12px;
        letter-spacing: 0.15mm;
        line-height: 5mm;
        font-size: 14px;
    }
    &:hover {
        background: #28323E;
        transform: scale(1.05);
        img {
            filter: grayscale(1);
        }
    }
`;

const CategoryList = ( props ) => {
    const category = props.category.category;
    console.log(category);
    return (
        <CategoryListContainer className='animate__animated animate__fadeInUp'>
            <Link to={category.strCategory}>
                <CategoryListItem>
                    <div className="image">
                        <img src={category.strCategoryThumb} alt="image" />
                    </div>
                    <div className="description">
                        <h2>{category.strCategory}</h2>
                        <p>{category.strCategoryDescription.length > 300 ? (category.strCategoryDescription.substring(0, 300) + "...") : category.strCategoryDescription}</p>
                    </div>
                </CategoryListItem>
            </Link>
        </CategoryListContainer>
    )
}

export default CategoryList;
