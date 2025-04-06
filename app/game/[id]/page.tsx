'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';
import Image from 'next/image';
import Header from '@/app/components/header/Header';
import axiosInstance from '@/utils/axiosInstance';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const res = await axiosInstance.get(`/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error('Failed to fetch product', error);
      }
      setLoading(false);
    };

    if (id) fetchProduct();
  }, [id]);

  if (loading || !product) {
    return (
      <div className="p-6">
        <Skeleton className="h-96 w-full mb-6" />
        <Skeleton className="h-8 w-1/2 mb-2" />
        <Skeleton className="h-4 w-1/3 mb-2" />
        <Skeleton className="h-4 w-2/3 mb-2" />
        <Skeleton className="h-10 w-32 mt-4" />
      </div>
    );
  }

  return (
    <div className="min-h-screen  ">
        <Header/>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mt-10">
        <div>
          <Image
            src={product.images || product.thumbnail}
            alt="product image"
            width={500}
            height={500}
            className="rounded-lg object-contain bg-white"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-400 mb-4">{product.description}</p>

          <div className="flex items-center gap-2 text-yellow-400 mb-2">
            <Star className="w-5 h-5 fill-yellow-400" />
            <span>{product.rating.toFixed(2)}</span>
          </div>

          <div className="text-2xl font-semibold text-green-400 mb-2">
            ${product.price}
          </div>

          <p className="text-sm text-gray-400 mb-1">
            <span className="font-medium">Brand:</span> {product.brand}
          </p>
          <p className="text-sm text-gray-400 mb-1">
            <span className="font-medium">Category:</span> {product.category}
          </p>
          <p className="text-sm text-gray-400 mb-1">
            <span className="font-medium">Stock:</span> {product.stock} (
            {product.availabilityStatus})
          </p>
          <p className="text-sm text-gray-400 mb-1">
            <span className="font-medium">SKU:</span> {product.sku}
          </p>
          <p className="text-sm text-gray-400 mb-4">
            <span className="font-medium">Warranty:</span>{' '}
            {product.warrantyInformation}
          </p>

          <Button>Buy Now</Button>

          {/* Tags */}
          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-2">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {product.tags?.map((tag: string) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-700 px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-8">
            <h3 className="font-semibold text-lg mb-4">Customer Reviews</h3>
            {product.reviews?.length > 0 ? (
              product.reviews.map((review: any, index: number) => (
                <Card
                  key={index}
                  className="bg-[#2b2b2b] text-white p-4 mb-4 border-gray-700"
                >
                  <div className="flex items-center gap-2 text-yellow-400 mb-1">
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <span className="text-sm">{review.rating}</span>
                  </div>
                  <p className="text-sm text-gray-300 mb-1">
                    {review.comment}
                  </p>
                  <p className="text-xs text-gray-500">
                    — {review.reviewerName}
                  </p>
                </Card>
              ))
            ) : (
              <p className="text-sm text-gray-400">No reviews yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
