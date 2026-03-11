/* File: client/src/App.jsx - Router entry for BrokenLink AI */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import About from './pages/About.jsx';
import Blog from './pages/Blog.jsx';
import BlogArticle from './pages/BlogArticle.jsx';
import Features from './pages/Features.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import Policies from './pages/Policies.jsx';
import Pricing from './pages/Pricing.jsx';
import Resources from './pages/Resources.jsx';
import Support from './pages/Support.jsx';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="features" element={<Features />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogArticle />} />
        <Route path="resources" element={<Resources />} />
        <Route path="about" element={<About />} />
        <Route path="support" element={<Support />} />
        <Route path="policies" element={<Policies />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
