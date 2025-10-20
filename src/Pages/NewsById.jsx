import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useData } from '../Hooks/useData';
import NewsCard from '../Components/NewsCard';
import LoadingSpinner from '../Components/LoadingSpinner';

const NewsById = () => {
    const [newsData, setNewsData] = useState([])
    const [loading, setLoading] = useState(false)
    const {id} = useParams()
    const {news} = useData()

    useEffect(()=>{
        if(id === '0'){
            setNewsData(news)
        }else if(id === '1'){
            const filteredNews = news?.filter(news=> news.others.is_today_pick === true)
            // console.log(filteredNews)
            setNewsData(filteredNews)

        }
        else{
            const filteredNews = news?.filter(news=> news.category_id === Number(id))
            // console.log(filteredNews)
            setNewsData(filteredNews)
        }
    },[id,news])


    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },300)
    },[id])
  

    if(loading) return <LoadingSpinner></LoadingSpinner>

    return (
        <div className=''>
           <p className='text-xl font-bold text-primary mb-4'>Dragon News Home</p>
           <div className='space-y-3'>
        
            {
                newsData?.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
            }
           </div>
        </div>
    );
};

export default NewsById;