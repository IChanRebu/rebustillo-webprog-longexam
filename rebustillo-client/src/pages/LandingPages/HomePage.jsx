import Button from '../../components/Button';
import banner from '../../assets/img/nu_bulldogex_banner.jpg';
import dailyImage from '../../assets/img/image1.jpg';
import studyImage from '../../assets/img/image2.jpg';
import campusImage from '../../assets/img/image3.jpg';    
const HomePage = () => {
    return (
        <div className="flex w-full flex-col gap-6">
            <section className="relative min-h-[28rem] overflow-hidden border-y-2 border-sky-700 bg-sky-950 px-4 py-10 sm:px-6 lg:px-8">
                <img
                    src={banner}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-sky-950/65" />

                <div className="relative z-10 flex min-h-[22rem] items-start justify-end text-right sm:min-h-[24rem]">
                    <div className="max-w-xl">
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-200">
                            Campus Marketplace
                        </p>
                        <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                            Welcome to BulldogEx Shop
                        </h1>
                        <p className="mt-4 text-sm leading-7 text-sky-100 sm:text-base">
                            Explore campus uniforms, student essentials, and school merch in one
                            quick storefront.
                        </p>
                        <div className="mt-6 flex flex-wrap justify-end gap-3">
                            <Button to="/products">
                                Shop Now
                            </Button>
                            <Button to="/about" variant="primary">
                                About Store
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-y-2 border-sky-700 bg-slate-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-600">
                        Store Overview
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-slate-900">Quick shopping blocks</h2>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-3xl border-2 border-sky-700 bg-white p-5">
                        <p className="text-2xl font-bold text-slate-900">08</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-600">
                            Products
                        </p>
                    </div>
                    <div className="rounded-3xl border-2 border-sky-700 bg-white p-5">
                        <p className="text-2xl font-bold text-slate-900">05</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-600">
                            Categories
                        </p>
                    </div>
                    <div className="rounded-3xl border-2 border-sky-700 bg-white p-5">
                        <p className="text-2xl font-bold text-slate-900">24</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-600">
                            Orders
                        </p>
                    </div>
                    <div className="rounded-3xl border-2 border-sky-700 bg-white p-5">
                        <p className="text-2xl font-bold text-slate-900">03</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-600">
                            Pickup Slots
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-y-2 border-sky-700 bg-slate-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-600">
                        Shop Sections
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-slate-900">Simple store cards</h2>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    <article className="flex h-full flex-col rounded-3xl border-2 border-sky-700 bg-white p-4 shadow-sm">
                        <div className="overflow-hidden rounded-[1.25rem] bg-sky-100 aspect-[4/3]">
                            <img
                                src={dailyImage}
                                alt="Daily essentials"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-slate-900">Daily Essentials</h3>
                        <p className="mt-3 text-sm leading-6 text-slate-600">
                            Bags, tumblers, lanyards, and items used every school day.
                        </p>
                        <Button to="/products" className="mt-auto" variant="primary">View Products</Button>
                    </article>

                    <article className="flex h-full flex-col rounded-3xl border-2 border-sky-700 bg-white p-4 shadow-sm">
                        <div className="overflow-hidden rounded-[1.25rem] bg-sky-100 aspect-[4/3]">
                            <img
                                src={studyImage}
                                alt="Study supplies"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-slate-900">Study Supplies</h3>
                        <p className="mt-3 text-sm leading-6 text-slate-600">
                            Notes, desk tools, and study kits for class and review weeks.
                        </p>
                        <Button to="/products" className="mt-auto" variant="primary">Shop Supplies</Button>
                    </article>

                    <article className="flex h-full flex-col rounded-3xl border-2 border-sky-700 bg-white p-4 shadow-sm">
                        <div className="overflow-hidden rounded-[1.25rem] bg-sky-100 aspect-[4/3]">
                            <img
                                src={campusImage}
                                alt="Campus apparel"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-slate-900">Campus Apparel</h3>
                        <p className="mt-3 text-sm leading-6 text-slate-600">
                            Comfortable pieces for class days, commute days, and weekends.
                        </p>
                        <Button to="/products" className="mt-auto" variant="primary">
                            View Apparel
                        </Button>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
