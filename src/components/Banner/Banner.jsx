import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Marquee from 'react-fast-marquee';
import './Banner.css';

const Banner = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const getBanners = async () => {
      try {
        const response = await axios.get('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/banners', {
          headers: {
            apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
          },
        });
        setBanners(response.data.data);
      } catch (error) {
        console.error('Error fetching banners:', error);
      }
    };

    getBanners();
  }, []);

  return (
    <div className='p-[100px]'>
      <Marquee pauseOnHover>
        {banners.map((banner) => (
          <div key={banner.id} className='relative mx-4 w-[300px] h-[200px]'>
            <img src={banner.imageUrl} alt="banner" className='object-cover rounded-lg w-full h-full' />
            <div className='overlay absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 hover:rounded-lg text-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              <h1 className='text-white text-xl font-bold'>
                {banner.name}
              </h1>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Banner;

