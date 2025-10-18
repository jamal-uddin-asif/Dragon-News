
import { useEffect, useState } from "react";

export const useData = () => {
  const [categories, setCategories] = useState(null);
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true)

 useEffect(()=>{
     fetch('/categories.json').then(res=>res.json()).then(data=> setCategories(data))
     fetch('/news.json').then(res=>res.json()).then(data=> setNews(data))
     setLoading(false)
 },[])
  
  return {categories, news, loading}
};
