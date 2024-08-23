import './App.css';
import Gallery from './components/home-section/gallery';
import UserTier from './components/user-tier';
import ProductInfoTabs from './components/home-section/product-info-tabs';
import Header from './components/header';
import BundleSet from './components/home-section/bundle-set';
import CustomerReview from './components/home-section/customer-review';
import FloatingButton from './components/home-section/floating-button-drawer';
import FlashSale from './components/home-section/flash-sale';
import ProductSelection from './components/home-section/product-selection';

function App() {
  return (
    <>
      <main className="relative">
        <div className="max-w-[1050px] flex flex-col mx-auto relative">
          <Header />
          <UserTier />
          <section>
            <Gallery />
            <FlashSale />
            <ProductSelection />
          </section>
          <div className="w-full h-2 bg-[#fafafa] py-2" />
          <section>
            <ProductInfoTabs />
          </section>
          <div className="w-full h-2 bg-[#fafafa] py-2" />
          <BundleSet />
          <div className="w-full h-2 bg-[#fafafa] py-2" />
          <CustomerReview />
          <FloatingButton />
        </div>
      </main>
    </>
  );
}

export default App;
