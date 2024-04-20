import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PromoDetail = ({ promoId }) => {
  const [promo, setPromo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getId = async () => {
      try {
        const response = await axios.get(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promos/${promoId}`, {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          },
        });
        setPromo(response.data.data);
      } catch (error) {
        console.error('Error fetching promo details:', error);
      } finally {
        setLoading(false); // Set loading to false after request is complete, regardless of success or failure
      }
    };

    if (promoId) {
      getId();
    }
  }, [promoId]);

  // Check if loading
  if (loading) {
    return <div>Loading...</div>;
  }

  // Check if promo is available
  if (!promo) {
    return <div>No promo details available.</div>;
  }

  // Render promo details
  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Promo Details</h3>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Title</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{promo.title}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Description</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{promo.description}</dd>
          </div>
          {/* Add more details as needed */}
        </dl>
      </div>
    </div>
  );
}

export default PromoDetail;
