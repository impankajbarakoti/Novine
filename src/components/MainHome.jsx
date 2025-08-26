import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import RecentProducts from './RecentProducts'
import PromoBanners from './PromoBanners'
import TrendingProducts from './TrendingProducts'
import FeatureSection from './FeatureSection'
import BestSeller from "./BestSeller"
import LogoRow from './LogoRow'
import TestimonialSlider from './TestimonialSlider'
import NewsSection from './NewsSection'
import FullWidthGallery from './FullWidthGallery'

const MainHome = () => {
  return (
    <div>
          <HeroSection />
          <RecentProducts />
          <PromoBanners />
          <TrendingProducts />
          <FeatureSection />
          <BestSeller />
          <LogoRow/>
          <TestimonialSlider />
          <NewsSection />
          <FullWidthGallery/>
    </div>
  )
}

export default MainHome
