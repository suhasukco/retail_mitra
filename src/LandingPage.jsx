import React from "react";

export default function LandingPage() {
    return (
        <>
            <header>
                <nav class="bg-white border-gray-200 px-4 mt-4 lg:px-6 py-2.5 dark:bg-gray-800">
                    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <a href="#" class="flex items-center">
                            <span class="self-center text-3xl font-bold whitespace-nowrap dark:text-white">Retail Mitra</span>
                        </a>
                    </div>
                </nav>
            </header>

            <section class="bg-white dark:bg-gray-900">
                <div class="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div class="place-self-center mr-auto lg:col-span-7">
                        <h1 class="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">Redefining Retail Convenience</h1>
                    </div>
                    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src="images/Retail Mitra-05.jpg" alt="mockup" />
                    </div>
                </div>
            </section>

            <section class="bg-gray-50 dark:bg-gray-800">
                <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div class="mb-8 max-w-screen-md lg:mb-16">
                        <h2 class="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">Why Retail Mitra Works for You </h2>
                        <p class="text-gray-500 sm:text-xl dark:text-gray-400">With Retail Mitra, we’re not just simplifying your orders—we’re making your business run smoother, so you can focus on what really matters: growing your store. It’s your business, your way. </p>
                    </div>
                    <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                        <div>
                            <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <svg
                                    className="w-6 h-6 text-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 2.25h1.5l1.54 6.16a1.5 1.5 0 001.46 1.09h9.25a1.5 1.5 0 001.46-1.09l1.54-6.16h1.5M7.5 13.5h9M8.25 19.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm9 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                                    />
                                </svg>
                            </div>
                            <h3 class="mb-2 text-xl font-bold dark:text-white">Order Anytime, anywhere</h3>
                            <p class="text-gray-500 dark:text-gray-400">No waiting, no back-and-forth. Just message us when you’re ready, and we’ll handle the rest. </p>
                        </div>
                        <div>
                            <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <svg
                                    className="w-6 h-6 text-primary-600 dark:text-primary-300"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path d="M2.59 3.59A2 2 0 014 3h6a2 2 0 011.41.59l6 6a2 2 0 010 2.82l-6 6A2 2 0 0110 19H4a2 2 0 01-2-2v-6c0-.53.21-1.04.59-1.41l6-6zM7.5 8.23l-.9 1.87a.75.75 0 00.56 1.09l2.02.29c.22.03.41.17.56.41l.9 1.87a.75.75 0 001.34 0l.9-1.87a.75.75 0 01.56-.41l2.02-.29a.75.75 0 00.42-1.28l-1.46-1.42c-.17-.16-.24-.4-.22-.66l.34-1.99a.75.75 0 00-1.08-.79l-1.81.95c-.22.12-.48.12-.7 0l-1.81-.95a.75.75 0 00-1.08.79l.34 1.99c.03.25-.05.5-.22.66L7.92 7.95a.75.75 0 00-.18.28z" />
                                </svg>
                            </div>
                            <h3 class="mb-2 text-xl font-bold dark:text-white">Exclusive Offers Straight to Your Phone</h3>
                            <p class="text-gray-500 dark:text-gray-400">Be the first to know about deals that boost your profits.</p>
                        </div>
                        <div>
                            <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <svg
                                    className="w-6 h-6 text-blue-600"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 7h5 M3 9h6 M3 11h6 m3.25-1h5.25 a1.5 1.5 0 011.379.93l1.75 3.5 A1.5 1.5 0 0121 16.5v.75 a.75.75 0 01-.75.75h-.75 a1.5 1.5 0 01-3 0H12 a1.5 1.5 0 01-3 0H7.5 a.75.75 0 01-.75-.75v-3 c0-.414.336-.75.75-.75h1.5 "
                                    />
                                </svg>
                            </div>
                            <h3 class="mb-2 text-xl font-bold dark:text-white">Fast and Reliable Delivery</h3>
                            <p class="text-gray-500 dark:text-gray-400"> Your shelves stay stocked, and your customers stay happy.</p>
                        </div>
                        <div>
                            <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <svg
                                    className="w-6 h-6 text-blue-600"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 7.5l1.5-3A1.5 1.5 0 015 3h14a1.5 1.5 0 011.3.75l1.5 3m-18 0v11.25c0 .414.336.75.75.75h15c.414 0 .75-.336.75-.75V7.5m-18 0 9 4.5 9-4.5"
                                    />
                                </svg>
                            </div>
                            <h3 class="mb-2 text-xl font-bold dark:text-white">A Wide Range of Products</h3>
                            <p class="text-gray-500 dark:text-gray-400"> From pantry staples to customer favorites, everything you need is just a message away. </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="bg-gray-50 dark:bg-gray-800">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className="mb-8 max-w-screen-md lg:mb-16 mx-auto text-center">
                        <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
                            Key Benefits for Retailers
                        </h2>
                        <p className="text-gray-500 sm:text-xl dark:text-gray-400">
                            With Retail Mitra, retailers can focus on growing their business while
                            we handle the logistics seamlessly. It’s retail convenience, redefined!
                        </p>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="max-w-lg p-6 bg-white rounded-lg shadow-md dark:bg-gray-900 self-start text-left border-blue-600">
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Ease of Ordering</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Place orders anytime, anywhere through WhatsApp, saving time and effort.
                            </p>
                        </div>
                        <div className="max-w-lg p-6 bg-white rounded-lg shadow-md dark:bg-gray-900 self-end text-right">
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Direct Access to Offers</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Stay updated on the latest deals and discounts, ensuring better profit margins.
                            </p>
                        </div>
                        <div className="max-w-lg p-6 bg-white rounded-lg shadow-md dark:bg-gray-900 self-start text-left">
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Quick Delivery</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Reliable and fast delivery ensures shelves are always stocked to meet customer demands.
                            </p>
                        </div>
                        <div className="max-w-lg p-6 bg-white rounded-lg shadow-md dark:bg-gray-900 self-end text-right">
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Transparency</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Clear and timely updates on order status, delivery schedules, and pricing.
                            </p>
                        </div>
                        <div className="max-w-lg p-6 bg-white rounded-lg shadow-md dark:bg-gray-900 self-start text-left">
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Wide Product Range</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Access to an extensive portfolio of FMCG products to cater to diverse customer needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}
