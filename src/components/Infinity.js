import { useEffect, useRef } from 'react'
import './Infinity.scss'

export default function Infinity({counter,names}) {
    const infinite = useRef() 

    const handleObserver = ([e])=>{
        if (e.isIntersecting && Array.isArray(names)) counter(prev => prev + 10)
    }


    const observer = new IntersectionObserver(handleObserver,
    {
        rootMargin: '80px',
        threshold: 1.0
    })

    useEffect(()=>{
        observer.observe(infinite.current)
    },[])

    return <div ref={infinite} className="infinity"></div>
}