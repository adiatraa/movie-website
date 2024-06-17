import React from 'react';
import MainLayout from '../../layout/MainLayout.jsx';
import styles from '../Home/Home.module.css';
import ButtonWatchNow from '../../components/ButtonWatchNow.jsx';
import ButtonHWatchlist from '../../components/ButtonHWatchlist.jsx';
import ButtonWatchlist from '../../components/ButtonWatchlist.jsx';
import SliderHero from '../../components/SliderHero.jsx';
import { StarIcon } from '@heroicons/react/20/solid';
import subscribeImage from '../../assets/subscribe.png';

const subCategories = [
    { name: 'Action', href: '#' },
    { name: 'Comedy', href: '#' },
    { name: 'Drama', href: '#' },
    { name: 'Horror', href: '#' },
    { name: 'Romance', href: '#' },
    { name: 'Kids', href: '#' },
];

const reviews = [
    {
        id: 1,
        rating: 5,
        viewer: 457000,
    },
    {
        id: 2,
        rating: 5,
        viewer: 500000,
    },
];

const topMovies = [
    {
        number: 1,
        title: 'Start Up',
        year: 2020,
        country: 'KOREA',
        duration: '1hr 25min',
        reviewId: 1,
    },
    {
        number: 2,
        title: 'Welcome to Waikiki',
        year: 2018,
        country: 'KOREA',
        duration: '1hr 10min',
        reviewId: 2,
    },
    {
        number: 3,
        title: 'Queen of Tears',
        year: 2024,
        country: 'KOREA',
        duration: '1hr 10min',
        reviewId: 2,
    },
    {
        number: 4,
        title: 'Save Me',
        year: 2017,
        country: 'KOREA',
        duration: '1hr 10min',
        reviewId: 2,
    },
    {
        number: 5,
        title: 'Reply 1988',
        year: 2017,
        country: 'KOREA',
        duration: '1hr 10min',
        reviewId: 2,
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

function HomePage() {
    return (
        <MainLayout>
            <div className="hidden lg lg:block">
                <div className={styles.heroSection}>
                    <div className={styles.leftSide}>
                        <div className="flex gap-7 mb-6 ml-24">
                            <h3 className="text-[#1977F1] font-semibold">DRAMA</h3>
                            <p>2020</p>
                            <p>KOREA</p>
                            <p>1hr 25min</p>
                        </div>
                        <div>
                            <h1 className="text-[81px] mb-10 ml-24">Start Up</h1>
                            <p className="text-base ml-24 mb-10">
                                The series revolves around a woman who has dreams of becoming an entrepreneur like Steve Jobs, and her love triangle between a man who is secretly her first love and another man who is pretending to be her first love.
                            </p>
                        </div>
                        <div className="flex ml-24 gap-6">
                            <ButtonWatchNow />
                            <ButtonHWatchlist />
                        </div>
                    </div>
                    <div className={styles.rightSide}>
                        {/* Slider Sweeper JS */}
                        <SliderHero />
                    </div>
                </div>
                <div className="topMovies mt-24 ml-24">
                    <div className="flex flex-row min-[2000px]:space-x-[900px] lg:space-x-[550px]">
                        <div>
                            <h2 className="text-3xl">Top 5 Movies</h2>
                        </div>
                        <div className="flex gap-16">
                            <p className="font-medium text-white">All Genre</p>
                            <ul role="list" className="font-medium text-gray-900 flex gap-16 mr-10">
                                {subCategories.map((category) => (
                                    <li key={category.name}>
                                        <a href={category.href} className="text-white/50">
                                            {category.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="TmoviesContent gap-14 flex">
                        <div className={styles.poster}></div>
                        <div className="mt-14 flex min-[2000px]:gap-5 gap-3 flex-col">
                            {topMovies.map((movie, index) => {
                                const review = reviews.find((r) => r.id === movie.reviewId);
                                return (
                                    <div key={index} className={styles.card}>
                                        <div className={styles.cardContent}>
                                            <div className="cardTitles flex">
                                                <p className="mr-10">#{movie.number}</p>
                                                <p>{movie.title}</p>
                                            </div>
                                            <div className={styles.filmStatus}>
                                                <p>{movie.year}</p>
                                                <p>{movie.country}</p>
                                                <p>{movie.duration}</p>
                                            </div>
                                            <div className={styles.filmRate}>
                                                <div className="lg:flex lg:gap-x-8 ml-16">
                                                    <div className="flex items-center gap-4">
                                                        <div className="flex items-center">
                                                            {[0, 1, 2, 3, 4].map((rating) => (
                                                                <StarIcon
                                                                    key={rating}
                                                                    className={classNames(
                                                                        review.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                                                                        'h-5 w-5 flex-shrink-0'
                                                                    )}
                                                                    aria-hidden="true"
                                                                />
                                                            ))}
                                                        </div>
                                                        <p className="ml-2 text-sm text-white">
                                                            {review.viewer / 1000 + "k viewers"}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.cardWatchlist}>
                                            <ButtonWatchlist />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="subscribe mt-24">
                    <div className="bg-white">
                        <div
                            className="relative isolate flex flex-col gap-10 overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:px-24 xl:flex-row xl:items-center xl:py-32"
                            style={{ backgroundImage: `url(${subscribeImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                        >
                            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl xl:max-w-none xl:flex-auto">
                                Subscribe our newsletter for newest movies updates
                            </h2>
                            <form className="w-full max-w-md">
                                <div className="flex gap-x-4">
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                                        placeholder="Enter your email"
                                    />
                                    <button
                                        type="submit"
                                        className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                                <p className="mt-4 text-sm leading-6 text-gray-300">
                                    We care about your data. Read our{' '}
                                    <a href="#" className="font-semibold text-white">
                                        privacy&nbsp;policy
                                    </a>
                                    .
                                </p>
                            </form>
                            
                        </div>
                    </div>
                </div>


            </div>
        </MainLayout>
    );
}

export default HomePage;
