import { AddBeerPage } from "./pages/AddBeerPage";
import { AllBeersPage } from "./pages/AllBeersPage";
import { BeerDetailsPage } from "./pages/BeerDetailsPage";
import { HomePage } from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import { RandomBeerPage } from "./pages/RandomBeerPage";

export const routes =[
    {
        path: '/',
        element : <HomePage />
    },
    {
        path: '/beers',
        element : <AllBeersPage />
    },
    {
        path : '/random',
        element : <RandomBeerPage />
    },
    {
        path : '/new-beer',
        element : <AddBeerPage />
    },
    {
        path : '/beers/:beerId',
        element : <BeerDetailsPage />
    },
    {
        path : '*',
        element : <NotFoundPage />
    },

]


// <NavBarGlobal/>
// <Routes>
//   <Route path="/" element={<HomePage />} />
//   <Route path="/beers" element={<AllBeersPage />} />
//   <Route path="/random" element={<RandomBeerPage />} />
//   <Route path="/new-beer" element={<AddBeerPage />} />
//   <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
//   <Route path="*" element={<NotFoundPage />} />
// </Routes>